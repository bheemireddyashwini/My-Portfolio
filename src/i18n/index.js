import de from "./de";
import en from "./en";

export const translations = { en, de };

export const locales = ["en", "de"];

export function getTranslation(locale) {
  return translations[locale] ?? translations.en;
}
