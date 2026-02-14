import type { MDXComponents } from "mdx/types";
import { useMDXComponents as getThemeComponents } from "nextra-theme-blog"; // nextra-theme-blog or your custom theme

// Get the default MDX components
const themeComponents = getThemeComponents();

// Merge components
export function useMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...themeComponents,
    ...components,
  };
}
