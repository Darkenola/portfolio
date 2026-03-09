export type Language = "en" | "tr";

export const defaultLanguage: Language = "en";

export function resolveLanguage(value?: string): Language {
  return value === "tr" ? "tr" : defaultLanguage;
}

export function isTurkish(language: Language) {
  return language === "tr";
}
