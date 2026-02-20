import { COLORS, type BrandColor } from "@/constants/colors";

interface WavyUnderlineProps {
  /** Brand color key or raw hex value */
  color?: BrandColor | string;
  className?: string;
}

const WAVY_PATH =
  "M0 9C0 9 10 2 25 2C40 2 45 16 60 16C75 16 80 2 95 2C110 2 115 16 130 16C145 16 150 2 165 2C180 2 185 16 200 16C215 16 220 2 235 2C250 2 255 16 270 16C285 16 290 2 305 2C320 2 325 16 340 16C355 16 360 2 375 2C390 2 400 9 400 9";

/**
 * Reusable wavy underline SVG that appears under hero headings.
 * Previously duplicated across 5+ pages with identical markup.
 */
export const WavyUnderline = ({
  color = "lime",
  className = "",
}: WavyUnderlineProps) => {
  const strokeColor = color in COLORS ? COLORS[color as BrandColor] : color;

  return (
    <svg
      className={`w-[200px] h-[18px] ${className}`}
      viewBox="0 0 400 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <path
        d={WAVY_PATH}
        stroke={strokeColor}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
