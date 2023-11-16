import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n.use(initReactI18next).init({
  lng: "id",
  resources: {
    en: {
      translation: {
        Wanita: "women",
        Pria: "men",
      },
    },
    id: {
      translation: {
        Wanita: "wanita",
        Pria: "pria",
      },
    },
  },
  keySeparator: false,
  interpolation: { escapeValue: false },
});

export default i18n;
