// eslint-disable-next-line filenames/match-regex
import createNextIntlPlugin from "next-intl/plugin";
import removeImports from "next-remove-imports";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    typedEnv: true,
    // typedRoutes: true,
  },
  images: {
    unoptimized: true,
  },
};
const withNextIntl = createNextIntlPlugin();

export default removeImports()(withNextIntl(nextConfig));
