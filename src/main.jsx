import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Markdown from "react-markdown";
// import App from "./App.jsx";
import "./index.css";

const markdown = "# Hi, *Pluto*!";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Markdown>{markdown}</Markdown>)
  </StrictMode>,
);
