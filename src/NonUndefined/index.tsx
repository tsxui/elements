import { ComponentType, PropsWithChildren, Ref } from "react";

export type NonUndefinedProps<P, R> = P & {
  Container: ComponentType<PropsWithChildren<P>>;
  ref?: Ref<R>;
}

export const NonUndefined = <P, R>(props: PropsWithChildren<NonUndefinedProps<P, R>>) => {
  const { children, Container, ref, ...rest } = props;

  if (children === undefined) {
    return null;
  }

  return (
    <Container {...rest as any} ref={ref}>
      {children}
    </Container>
  )
};