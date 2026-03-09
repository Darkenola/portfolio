import type { Language } from "@/lib/i18n";

export function localizedPath(path: string, lang: Language) {
  if (lang !== "tr") {
    return path;
  }

  const separator = path.includes("?") ? "&" : "?";

  return `${path}${separator}lang=tr`;
}

export function isExternalHref(href: string) {
  return /^(https?:\/\/|mailto:|tel:)/.test(href);
}
