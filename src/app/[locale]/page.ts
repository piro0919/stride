import { redirect } from "@/i18n/navigation";
import { getLocale } from "next-intl/server";

export default async function Page(): Promise<void> {
  const locale = await getLocale();

  redirect({ href: { pathname: "/backlog" }, locale });
}
