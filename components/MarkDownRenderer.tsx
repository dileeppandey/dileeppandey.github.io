// components/MarkdownRenderer.tsx

import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/default.css"; // Import the highlight.js CSS theme

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown rehypePlugins={[rehypeRaw, rehypeHighlight]}>
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
