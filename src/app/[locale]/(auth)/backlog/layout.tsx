import { type ReactNode } from "react";
import BacklogLayout from "./_components/Layout";

export type LayoutProps = {
  children: ReactNode;
  detail: ReactNode;
};

export default function Layout({
  children,
  detail,
}: LayoutProps): React.JSX.Element {
  return <BacklogLayout detail={detail}>{children}</BacklogLayout>;
}
