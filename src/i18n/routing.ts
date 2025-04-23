import { defineRouting } from "next-intl/routing";

// eslint-disable-next-line import/prefer-default-export
export const routing = defineRouting({
  // Used when no locale matches
  defaultLocale: "en",
  localePrefix: "as-needed",
  // eslint-disable-next-line write-good-comments/write-good-comments
  // A list of all locales that are supported
  locales: ["en", "ja"],
});
