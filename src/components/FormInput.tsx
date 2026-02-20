import { COLORS } from "@/constants/colors";

const INPUT_BASE =
  "w-full px-4 py-3 bg-white/5 border border-white/40 rounded-lg focus:outline-none focus:border-[#b4eb2c] transition-all shadow-inner text-white";

interface FormInputProps {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}

interface FormTextareaProps {
  label: string;
  name: string;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

export const FormInput = ({
  label,
  name,
  type = "text",
  required = false,
  placeholder,
}: FormInputProps) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">
      {label}
      {required && " *"}
    </label>
    <input
      type={type}
      name={name}
      required={required}
      placeholder={placeholder}
      className={INPUT_BASE}
    />
  </div>
);

export const FormTextarea = ({
  label,
  name,
  required = false,
  placeholder,
  rows = 12,
}: FormTextareaProps) => (
  <div className="space-y-2">
    <label className="text-sm font-medium">
      {label}
      {required && " *"}
    </label>
    <textarea
      name={name}
      required={required}
      placeholder={placeholder}
      rows={rows}
      className={`${INPUT_BASE} px-4 py-4 resize-none`}
    />
  </div>
);
