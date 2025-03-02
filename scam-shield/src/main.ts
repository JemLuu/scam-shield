import React from "react";
import ReactDOM from "react-dom/client";
import TranscriptApp from "./TranscriptApp"; // Ensure this path is correct!

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <TranscriptApp /> 
  </React.StrictMode>
);