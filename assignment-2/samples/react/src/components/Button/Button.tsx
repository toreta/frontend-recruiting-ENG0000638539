import style from "./Button.module.css";

export type ButtonProps = {
  children?: React.ReactNode;
  isError?: boolean;
  onClick?: () => void;
};

export function Button({ children, isError = false, onClick }: ButtonProps) {
  console.log(isError);

  return (
    <button
      disabled={isError}
      onClick={onClick}
      className={`${style.button} ${isError ? style.disabled : ""}`}
    >
      {children}
    </button>
  );
}
