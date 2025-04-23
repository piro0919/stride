import { type Metadata } from "next";
import BacklogPage from "./backlog/page";

export const metadata: Metadata = {
  title: "Product Backlog",
};

export default function Page(): React.JSX.Element {
  return <BacklogPage />;
}
