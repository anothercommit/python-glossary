import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import content from "./content.js";
// import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Markdown rehypePlugins={[rehypeHighlight]}>{content}</Markdown>
  </StrictMode>,
);
