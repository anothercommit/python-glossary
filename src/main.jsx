import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // Or any other theme
import content from "./content.js";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="markdown-content" style={{ fontSize: "1.5rem" }}>
      <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
    </div>
  </StrictMode>,
);

