import dynamic from "next/dynamic";
import { useState } from "react";

const MDEditor = dynamic(async () => import("@uiw/react-md-editor"), {
  ssr: false,
});

export default function MarkdownEditor(): React.JSX.Element {
  const [value, setValue] = useState("**Hello world!!!**");

  return <MDEditor onChange={(value) => setValue(value ?? "")} value={value} />;
}
