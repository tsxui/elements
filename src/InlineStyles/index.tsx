import { ComponentPropsWithoutRef, FC } from "react";
import { StylesToStringInput, stylesToString } from "@tsxui/styles";

export interface InlineStylesProps 
  extends
    StylesToStringInput,
    Omit<ComponentPropsWithoutRef<"style">, keyof StylesToStringInput> {}

export const InlineStyles: FC<InlineStylesProps> = (props) => {
  const { selector, styles, media, ...rest } = props;
  return (
    <style
      {...rest}
      dangerouslySetInnerHTML={{ __html: stylesToString({ selector, styles, media }) }}
    />
  );
};
