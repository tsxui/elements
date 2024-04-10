import { ComponentPropsWithRef, ComponentRef as ReactComponentRef, ElementType, HTMLProps as ReactHTMLProps, ReactNode } from "react";
import { ClassValue } from "clsx";

export type PropsWithClassName<P = {}> = Omit<P, "className"> & {
  className?: ClassValue;
}

export type HTMLProps<Element extends HTMLElement> = PropsWithClassName<ReactHTMLProps<Element>>;

export interface InputDecoratorProps {
  leftAdronment?: ReactNode;
  rightAdronment?: ReactNode;
  adronmentClasses?: {
    left?: ClassValue;
    right?: ClassValue;
  };
}

export type DistributiveOmit<T, K extends keyof any> = T extends any ? Omit<T, K> : never;

export type PropsWithComponent<
  RootComponent extends ElementType,
  Props extends {} = {},
> =
  & Props extends { className?: any }
    ? Omit<Props, "className">
    : Props
  & {
    component?: RootComponent;
    className?: ClassValue;
  }
  & DistributiveOmit<ComponentPropsWithRef<RootComponent>, keyof Props>;

export type ComponentRef<RootComponent extends ElementType> = RootComponent extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[RootComponent]
  : ReactComponentRef<RootComponent>;
