import { type Metadata } from "next";
import Backlog from "./_components/Backlog";

export const metadata: Metadata = {
  title: "Product Backlog",
};

export default function Page(): React.JSX.Element {
  return <Backlog />;
}
