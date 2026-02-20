/** Centralized brand color palette — single source of truth for the whole app. */
export const COLORS = {
  lime: "#e7fe56",
  purple: "#d5bff0",
  cyan: "#72f5e3",
  limeAlt: "#d4ff00",
  limeButton: "#b4eb2c",
} as const;

export type BrandColor = keyof typeof COLORS;
