import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

i18n
  .use(HttpApi) // Load translation files from the backend
  .use(LanguageDetector) // Detect language from the browser
  .use(initReactI18next) // Integrate with React
  .init({
    supportedLngs: ["en", "fr", "hi"], // Supported languages
    fallbackLng: "en", // Fallback language
    detection: {
      order: ["querystring", "cookie", "localStorage", "navigator"], // Language detection order
      caches: ["cookie", "localStorage"] // Cache user preference
    },
    backend: {
      loadPath: "/locales/{{lng}}/translation.json" // Translation files path
    },
    interpolation: {
      escapeValue: false // React already escapes strings
    }
  });

export default i18n;
