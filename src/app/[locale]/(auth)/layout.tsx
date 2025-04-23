import { type ReactNode } from "react";
import AuthLayout from "./_components/Layout";

export type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return <AuthLayout>{children}</AuthLayout>;
}
