import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend"; // Load translations from public/

i18n
  .use(HttpApi)
  .use(initReactI18next)
  .init({
    lng: "en", // Default language
    fallbackLng: "en",
    debug: true,

    backend: {
      loadPath: "/locales/{{lng}}/translation.json", // Load translations dynamically
    },

    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;
