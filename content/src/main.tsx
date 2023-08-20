import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./stores/useTranscriptStore.ts";

// Create a div for the extension's root element
const rootElement = document.createElement("div");
rootElement.id = "youtube-summarizer-extension";
document.body.appendChild(rootElement);

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
