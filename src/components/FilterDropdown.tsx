interface FilterDropdownProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
  borderColor: string;
}

const CHEVRON_SVG = (
  <svg
    className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

/**
 * Reusable filter dropdown used in ProjectsPage.
 * Replaces 3 identical select + chevron SVG blocks.
 */
export const FilterDropdown = ({
  label,
  value,
  onChange,
  options,
  borderColor,
}: FilterDropdownProps) => (
  <div className="w-full md:w-auto md:min-w-[220px]">
    <label className="block text-sm text-white/60 mb-2">{label}</label>
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-black/40 text-white rounded-full px-6 py-3.5 appearance-none cursor-pointer transition-colors [&>option]:bg-black [&>option]:text-white"
        style={{
          borderWidth: "2px",
          borderStyle: "solid",
          borderColor: `${borderColor}b3`,
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = borderColor)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = `${borderColor}b3`)
        }
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {CHEVRON_SVG}
    </div>
  </div>
);
