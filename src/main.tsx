import "./style.css";
import React from "react";
import i18n from "i18next";
import App from "./App.tsx";
import i18next from "i18next";
import ReactDOM from "react-dom/client";
import global_en from "./translations/en/global.json";
import global_ar from "./translations/ar/global.json";

import { I18nextProvider, initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  resources: {
    en: {
      global: global_en,
    },
    ar: {
      global: global_ar,
    },
  },
  lng: "ar",

  interpolation: {
    escapeValue: false,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
