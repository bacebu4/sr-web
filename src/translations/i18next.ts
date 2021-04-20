import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// TODO it will be in other folders when we'll have other translations
const resources = {
  ru: {
    translation: {
      "Book stash": "Book stash",

      "Highlight of the day": "Главное за день",
      "Click on the button below to see the rest of your highlights":
        "Нажмите на кнопку ниже что увидеть все",
      "Reviewing goals": "Достижения",
      "Don’t forget what you read. Review your notes daily!":
        "Не забывайте, что вы читали. Просматривайте заметки каждый день!",

      "Add new comment...": "Добавить комментарий...",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
