export type PaymentService = "Cash App" | "Venmo" | "Zelle";

export interface DisplayedDestination {
  service: PaymentService;
  recipient: string;
  identifier: string;
  version: number;
}

// Fixtures for the local UI only. Production destinations must come from a
// server read that checks event state and a versioned, confirmed host route.
export const DEMO_DESTINATIONS: DisplayedDestination[] = [
  { service: "Cash App", recipient: "Alex and Maya", identifier: "$DEMO_ONLY", version: 1 },
  { service: "Venmo", recipient: "Alex and Maya", identifier: "@DEMO_ONLY", version: 1 },
  { service: "Zelle", recipient: "Alex and Maya", identifier: "demo@example.invalid", version: 1 }
];
