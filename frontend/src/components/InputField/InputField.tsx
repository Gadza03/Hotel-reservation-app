import { type ChangeEvent } from "react";
import c from "./input.module.css";

type InputFieldProps = {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  error?: string;
};

export const InputField = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  error = "",
}: InputFieldProps) => {
  return (
    <div className={c.inputGroup}>
      <label className={c.inputLabel}>{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className={c.input}
      />
      {error && <span className={c.inputText}>{error}</span>}
    </div>
  );
};
