import style from "./InputSelect.module.css";

export type InputSelectProps = {
  value: string;
  options: string[];
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export function InputSelect({
  value,
  options,
  placeholder,
  onChange,
}: InputSelectProps) {
  const isDefault = value === "";

  return (
    <select
      value={value}
      onChange={onChange}
      className={`${style.inputSelect} ${isDefault ? style.default : ""}`}
    >
      <option value="" className={style.default}>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}
