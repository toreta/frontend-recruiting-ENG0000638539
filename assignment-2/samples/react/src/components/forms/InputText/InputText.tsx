import style from "./InputText.module.css";

export type InputTextProps = {
  value: string;
  placeholder?: string;
  isError?: boolean;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputText({
  value,
  placeholder,
  isError = false,
  errorMessage,
  onChange,
}: InputTextProps) {
  return (
    <>
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        className={`${style.inputText} ${isError ? style.isError : ""}`}
      />
      {isError && errorMessage && (
        <div className={style.errorMessage}>{errorMessage}</div>
      )}
    </>
  );
}
