import { auth } from "@clerk/nextjs/server";
import Layout from "./(auth)/layout";
import App from "./_components/App";
import Landing from "./_components/Landing";

export default async function Page(): Promise<React.JSX.Element | void> {
  const { userId } = await auth();

  if (typeof userId !== "string") {
    return <Landing />;
  }

  return (
    <Layout>
      <App />
    </Layout>
  );
}
