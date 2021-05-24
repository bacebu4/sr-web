import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// TODO it will be in other folders when we'll have other translations
const resources = {
  ru: {
    translation: {
      "Book stash": "Book stash",

      // HEADERS
      "Highlight of the day": "Главное за день",
      "Click on the button below to see the rest of your highlights":
        "Нажмите на кнопку ниже что увидеть все",
      "Reviewing goals": "Достижения",
      "Don’t forget what you read. Review your notes daily!":
        "Не забывайте, что вы читали. Просматривайте заметки каждый день!",
      "All books": "Книги",
      "26 total books were captured": "26 книг сохранено",
      "Account settings": "Настройки аккаунта",
      "Manage your account settings":
        "Просматривайте и изменяйте настройки вашего аккаунта",

      // UI
      "Add new comment...": "Добавить комментарий...",
      "Start review process": "Начать обзор",
      "Highlights per day": 'Количество заметок в "Главное за день"',
      "Configure how much highlights you want to see on a daily basis":
        'Выберите сколько заметок вы хотите видеть в "Главное за день"',
      "Restart manual": "Начальное обучение",
      "Click this button if you want to see tutorial all over again in case you miss something":
        "Нажмите на эту кнопку если вы хотите посмотреть обучение заново",
      "Sign out": "Выйти из аккаунта",
      "Show privacy policy": "Показать политику конфиденциальности",
      "Show terms and conditions": "Показать условия использования",
      "Notes & Books": "Заметки и книги",
      "Review Process": "Погресс обзора",
      "Latest reads": "Последние",
      Notes: "Заметки",
      "Recent tag": "Последние теги",
      "See all": "Просмотреть все",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
