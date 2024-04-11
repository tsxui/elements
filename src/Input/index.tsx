import { FocusEvent, forwardRef, useRef } from "react";
import { HTMLProps, InputDecoratorProps } from "../types/component";
import { Adronment } from "../Adronment";
import { NonUndefined } from "../NonUndefined";
import { useDisclosure } from "@tsxui/utils";
import clsx, { ClassValue } from "clsx";

export interface InputProps extends HTMLProps<HTMLInputElement>, InputDecoratorProps {
  itemClasses?: {
    wrapper?: ClassValue;
    input?: ClassValue;
    leftAdronment?: ClassValue;
    rightAdronment?: ClassValue;
  }
}

export const inputClasses = {
  root: "Input-root",
  wrapper: "Input-wrapper",
  input: "Input-input",
  leftAdronment: "Input-leftAdronment",
  rightAdronment: "Input-rightAdronment",
  focused: "Input-focused",
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  function Input(props, ref) {
    const { className, itemClasses = {}, leftAdronment, rightAdronment, onFocus, onBlur, ...rest } = props;

    const [focused, focusHandler] = useDisclosure();
    const inputRef = useRef<HTMLInputElement>();

    const handleRef = (instance: HTMLInputElement) => {
      if (ref) {
        if (typeof ref === "function") {
          ref(instance);
        } else {
          ref.current = instance!;
        }
      }

      inputRef.current = instance;
    };

    const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
      focusHandler.open();
      onFocus?.(e);
    };

    const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
      focusHandler.close();
      onBlur?.(e);
    };

    const handleClickAdronment = () => inputRef.current?.focus();

    return (
      <div className={clsx(inputClasses.root, focused && inputClasses.focused, className)}>
        <NonUndefined
          Container={Adronment}
          className={clsx(inputClasses.leftAdronment, itemClasses.leftAdronment)}
          onClick={handleClickAdronment}
        >
          {leftAdronment}
        </NonUndefined>
        <div className={clsx(inputClasses.wrapper, itemClasses.wrapper)}>
          <input
            {...rest}
            ref={handleRef}
            className={clsx(inputClasses.input,itemClasses.input)}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        </div>
        <NonUndefined
          Container={Adronment}
          className={clsx(inputClasses.rightAdronment, itemClasses.rightAdronment)}
        >
          {rightAdronment}
        </NonUndefined>
      </div>
    );
  },
);