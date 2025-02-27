import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { TerminalContextProvider } from "react-terminal";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TerminalContextProvider>
      <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        <App />
      </Suspense>
    </TerminalContextProvider>
  </StrictMode>
);
