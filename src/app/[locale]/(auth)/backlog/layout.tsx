import { type ReactNode } from "react";

export type LayoutProps = {
  children: ReactNode;
  detail: ReactNode;
};

export default function Layout({
  children,
  detail,
}: LayoutProps): React.JSX.Element {
  return (
    <>
      {children}
      {detail}
    </>
  );
}
