import Badge from "./components/mdxComponents/Badge/Badge.jsx";
import CodeBlockWithCopy from "./components/mdxComponents/CodeBlockWithCopy/CodeBlockWithCopy.jsx";
import StackBlitzPreview from "./components/mdxComponents/StackBlitzPreview/StackBlitzPreview.jsx";
import LinkComponent from "./components/mdxComponents/Link.jsx";

/** @returns {import('mdx/types.js').MDXComponents} */
export function useMDXComponents() {
  return {
    a: LinkComponent,
    Badge,
    StackBlitzPreview,
    pre: CodeBlockWithCopy,
  };
}
