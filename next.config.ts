import type { NextConfig } from "next";
import nextra from "nextra";

// Set up Nextra with its configuration
const withNextra = nextra({
  // Add Nextra-specific options here
});

const nextConfig: NextConfig = {
  /* config options here */
  // experimental: {
  //   // @ts-expect-error - turbopack is not yet in NextConfig types
  //   turbopack: {
  //     resolveAlias: {
  //       // Path to your `mdx-components` file with extension
  //       "next-mdx-import-source-file": "./mdx-components.tsx",
  //     },
  //   },
  // },
};

export default withNextra(nextConfig);
