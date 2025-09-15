import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/fonts.css";
import "./styles/index.css";
import { registerSW } from 'virtual:pwa-register';

registerSW({
  onNeedRefresh() {
    console.log("🔄 Nowa wersja dostępna");
  },
  onOfflineReady() {
    console.log("✅ Aplikacja offline ready");
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);