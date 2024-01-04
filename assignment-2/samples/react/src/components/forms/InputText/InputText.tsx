import style from "./InputText.module.css";

export type InputTextProps = {
  value: string;
  placeholder?: string;
  isError?: boolean;
  isZip?: boolean;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputText({
  value,
  placeholder,
  isError = false,
  isZip = false,
  errorMessage,
  onChange,
}: InputTextProps) {
  return (
    <>
      <div className={`${isZip ? style.isZip : ""}`}>
        <input
          type="text"
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          className={`${style.inputText} ${isError ? style.isError : ""}`}
        />
      </div>
      {isError && errorMessage && (
        <div className={style.errorMessage}>{errorMessage}</div>
      )}
    </>
  );
}
