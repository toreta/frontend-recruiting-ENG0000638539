import style from "./FormLabel.module.css";

export type FormLabelProps = {
  children?: React.ReactNode;
};

export function FormLabel({ children }: FormLabelProps) {
  return <label className={style.formLabel}>{children}</label>;
}
