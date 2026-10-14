import { createContext, useContext, useEffect, useState } from "react";
import type { Dispatch, ReactNode, SetStateAction } from "react";
import { loadStore, STORAGE_KEY } from "./model";
import type { Store } from "./model";
interface State {
  data: Store;
  setData: Dispatch<SetStateAction<Store>>;
  notify: (message: string) => void;
  message: string;
  storageError: string;
}
const Context = createContext<State | null>(null);
export function StoreProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState(loadStore);
  const [message, notify] = useState("");
  const [storageError, setError] = useState("");
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setError("");
    } catch {
      setError(
        "Your browser could not save these changes. They will last only while this page is open. Remove a photo or free up browser storage.",
      );
    }
  }, [data]);
  useEffect(() => {
    const sync = (e: StorageEvent) => {
      if (e.key === STORAGE_KEY) setData(loadStore());
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => {
    document.documentElement.dataset.motion = data.profile.reducedMotion
      ? "reduce"
      : "system";
  }, [data.profile.reducedMotion]);
  return (
    <Context.Provider value={{ data, setData, notify, message, storageError }}>
      {children}
    </Context.Provider>
  );
}
export function useStore() {
  const state = useContext(Context);
  if (!state) throw new Error("Missing store");
  return state;
}
