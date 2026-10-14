export type PaymentService = "Cash App" | "Venmo" | "Zelle";

export interface DisplayedDestination {
  service: PaymentService;
  recipient: string;
  identifier: string;
  version: number;
}
