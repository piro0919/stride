// eslint-disable-next-line filenames/match-exported
import { jaJP } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { type Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Noto_Sans_JP } from "next/font/google";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
});

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function generateMetadata(_: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const APP_NAME = "Stride";
  const APP_DEFAULT_TITLE = "Stride";
  const APP_TITLE_TEMPLATE = "%s - Stride";
  const APP_DESCRIPTION = "";

  return {
    appleWebApp: {
      capable: true,
      statusBarStyle: "default" as const,
      title: APP_DEFAULT_TITLE,
      // startUpImage: [],
    },
    applicationName: APP_NAME,
    description: APP_DESCRIPTION,
    formatDetection: {
      telephone: false,
    },
    openGraph: {
      description: APP_DESCRIPTION,
      siteName: APP_NAME,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
      type: "website" as const,
    },
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    twitter: {
      card: "summary" as const,
      description: APP_DESCRIPTION,
      title: {
        default: APP_DEFAULT_TITLE,
        template: APP_TITLE_TEMPLATE,
      },
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>): Promise<React.JSX.Element> {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <ClerkProvider localization={locale === "ja" ? jaJP : undefined}>
      <html lang={locale} suppressHydrationWarning={true}>
        <body className={notoSansJP.className}>
          <NextIntlClientProvider>
            <ThemeProvider enableSystem={false}>{children}</ThemeProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
