import { ComponentProps, ElementType, PropsWithChildren, forwardRef } from "react";
import { ComponentRef, PropsWithComponent } from "../types/component";
import clsx from "clsx";

export type AdronmentProps = {};

const adronmentClassres = {
  root: "Adronment-root"
};

export const Adronment = forwardRef(
  function Adronment<RootComponent extends ElementType = "div">(
    props: PropsWithComponent<RootComponent, PropsWithChildren<AdronmentProps>>,
    ref: ComponentRef<RootComponent>
  ) {
    const { children, className, component: Component = "div", ...rest } = props;

    return (
      <Component {...{ ...rest, ref, className: clsx(adronmentClassres.root, className) } as ComponentProps<any>}>
        {children}
      </Component>
    );
  }
);
