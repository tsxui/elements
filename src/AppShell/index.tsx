import clsx from "clsx";
import { ComponentType, PropsWithChildren, forwardRef } from "react";
import { HTMLProps } from "../types/component";
import { InlineStyles } from "../InlineStyles";

export interface AppShellProps extends HTMLProps<HTMLDivElement> {
  Header?: ComponentType;
  Navbar?: ComponentType;
}

export const appShellClasses = {
  root: "AppShell-root",
  header: "AppShell-header",
  navbar: "AppShell-navbar",
  main: "AppShell-main",
};

export const AppShell = forwardRef<HTMLDivElement, PropsWithChildren<AppShellProps>>(
  function AppShell(props, ref) {
    const { children, className, Header, Navbar, ...rest } = props;

    return (
      <>
        <InlineStyles selector="" />
        <div {...rest} ref={ref} className={clsx(appShellClasses.root, className)}>
          {Header !== undefined && (
            <header className={appShellClasses.header}>
              <Header />
            </header>
          )}
          {Navbar !== undefined && (
            <div className={appShellClasses.navbar}>
              <Navbar />
            </div>
          )}
          <main className={appShellClasses.main}>
            {children}
          </main>
        </div>
      </>
    );
  }
);
