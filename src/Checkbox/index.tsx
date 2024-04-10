import { ReactNode, forwardRef } from "react";
import { HTMLProps } from "../types/component";
import clsx from "clsx";

export interface CheckboxProps extends Omit<HTMLProps<HTMLInputElement>, "label"> {
  label?: ReactNode;
}

export const checkboxClasses = {
  root: "Checkbox-root",
  input: "Checkbox-input",
  checkbox: "Checkbox-checkbox",
  label: "Checkbox-label"
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(props, ref) {
  const { label, className, ...rest } = props;

  return (
    <label className={clsx(checkboxClasses.root, className)}>
      <input {...rest} ref={ref} type="checkbox" className={clsx(checkboxClasses.input)} />
      <span className={clsx(checkboxClasses.checkbox)}></span>
      {label !== undefined ? (
        <span className={clsx(checkboxClasses.label)}>{label}</span>
      ) : null}
    </label>
  );
});