const validLocales = new Set(["en", "fr"]);
let currentLocale = "en";

export function setLocale(locale) {
  currentLocale = validLocales.has(locale) ? locale : "en";
}

export function getLocale() {
  return currentLocale;
}

export function isLocale(locale) {
  return validLocales.has(locale);
}
