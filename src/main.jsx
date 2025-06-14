import React from "react";
import ReactDOM from "react-dom";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./i18n";
import { ThemeProvider } from "./pages/ThemeProvider.jsx";
import CookieConsent from "./Cookie.jsx";
import { AuthProvider } from "./Profile/context/AuthContext.jsx"; // Импортируем AuthProvider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
      <CookieConsent />
    </ThemeProvider>
  </StrictMode>
);
