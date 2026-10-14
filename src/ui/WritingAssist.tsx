import { useState } from "react";

export function WritingAssist({
  hosts,
  onChoose,
}: {
  hosts: string;
  onChoose: (text: string) => void;
}) {
  const [relationship, setRelationship] = useState("Friend");
  const [tone, setTone] = useState("Warm");
  const [length, setLength] = useState("Short");
  const [memory, setMemory] = useState("");
  const [choices, setChoices] = useState<string[]>([]);
  function prepare() {
    const openings =
      tone === "Playful"
        ? [
            `Here’s to you, ${hosts}, and all the good chaos ahead.`,
            `You make a pretty wonderful team, ${hosts}.`,
            `May there always be a reason to dance, ${hosts}.`,
          ]
        : tone === "Classic"
          ? [
              `With heartfelt wishes to you, ${hosts}.`,
              `Wishing you every happiness, ${hosts}.`,
              `To ${hosts}, with our warmest wishes.`,
            ]
          : [
              `So much love to you, ${hosts}.`,
              `What a joy to celebrate you, ${hosts}.`,
              `Here’s to your next beautiful chapter, ${hosts}.`,
            ];
    const detail = memory.trim()
      ? ` I’ll always treasure this: ${memory.trim()}`
      : "";
    const endings = [
      " May the everyday moments become your favorite memories.",
      " Here’s to laughter, kindness, and a life that feels like you.",
      " Wishing you a future full of people and moments you love.",
    ];
    setChoices(
      openings.map(
        (text, i) =>
          text + detail + (length === "A little longer" ? endings[i] : ""),
      ),
    );
  }
  return (
    <div id="writing-prompts" className="writing-prompts">
      <p className="eyebrow">Find your own words</p>
      <div className="form-grid">
        <div>
          <label htmlFor="writing-relationship">Your relationship</label>
          <select
            id="writing-relationship"
            value={relationship}
            onChange={(e) => {
              setRelationship(e.target.value);
              setChoices([]);
            }}
          >
            {["Friend", "Family", "Colleague", "Other"].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="writing-tone">A little tone</label>
          <select
            id="writing-tone"
            value={tone}
            onChange={(e) => {
              setTone(e.target.value);
              setChoices([]);
            }}
          >
            {["Warm", "Playful", "Classic"].map((v) => (
              <option key={v}>{v}</option>
            ))}
          </select>
        </div>
      </div>
      <label htmlFor="writing-length">Note length</label>
      <select
        id="writing-length"
        value={length}
        onChange={(e) => {
          setLength(e.target.value);
          setChoices([]);
        }}
      >
        <option>Short</option>
        <option>A little longer</option>
      </select>
      <label htmlFor="writing-memory">
        A memory in your own words <span className="optional">optional</span>
      </label>
      <textarea
        id="writing-memory"
        rows={3}
        maxLength={500}
        value={memory}
        onChange={(e) => {
          setMemory(e.target.value);
          setChoices([]);
        }}
      />
      <p className="small">
        These prepared writing options help you review the flow. Live AI is not
        connected. We use only the memory you add, and you can edit every word.
      </p>
      <button type="button" className="secondary" onClick={prepare}>
        Prepare three choices
      </button>
      {choices.length > 0 && (
        <div className="writing-choices" aria-live="polite">
          <p className="small">
            {tone} · {relationship} · {length}
          </p>
          {choices.map((text, i) => (
            <button
              key={text}
              type="button"
              className="writing-choice"
              onClick={() => onChoose(text)}
            >
              <span className="eyebrow">Choice {i + 1} · use & edit</span>
              {text}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
