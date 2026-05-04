export type ChapterKey =
  | "home"
  | "about"
  | "skills"
  | "projects"
  | "services"
  | "process"
  | "contact";

export type Chapter = {
  key: ChapterKey;
  num: string;
  href: string;
  label: string;
  title: string;
  kicker: string;
  blurb: string;
};

export const chapters: Chapter[] = [
  {
    key: "home",
    num: "00",
    href: "/",
    label: "Anasayfa",
    title: "Modern web deneyimleri.",
    kicker: "Index",
    blurb: "Bir geliştiricinin dijital vitrini.",
  },
  {
    key: "about",
    num: "01",
    href: "/about",
    label: "Hakkımda",
    title: "Markalar için dijital vitrinler tasarlıyorum.",
    kicker: "About",
    blurb:
      "Tasarım ve kodu aynı pencerede tutan, hızlı ve estetik üreten bir geliştirici.",
  },
  {
    key: "skills",
    num: "02",
    href: "/skills",
    label: "Yetenekler",
    title: "Modern, hızlı ve ölçeklenebilir bir stack.",
    kicker: "Stack",
    blurb: "Tasarımdan deploy'a kadar tek elden, premium bir teknoloji çatısı.",
  },
  {
    key: "projects",
    num: "03",
    href: "/projects",
    label: "Projeler",
    title: "Tasarımdan teslime, baştan sona kurguladığım çalışmalar.",
    kicker: "Showcase",
    blurb: "Birkaç farklı sektör. Birkaç farklı format. Aynı premium standart.",
  },
  {
    key: "services",
    num: "04",
    href: "/services",
    label: "Hizmetler",
    title: "İhtiyacına uygun, net ölçekli premium çözümler.",
    kicker: "Services",
    blurb: "Tasarım + geliştirme + lansman + 1 ay destek; tek paket.",
  },
  {
    key: "process",
    num: "05",
    href: "/process",
    label: "Süreç",
    title: "Net, şeffaf ve birlikte ilerleyen bir süreç.",
    kicker: "Workflow",
    blurb: "Sürpriz yok. Her adımda ne yaptığımızı biliyor, beraber karar veriyoruz.",
  },
  {
    key: "contact",
    num: "06",
    href: "/contact",
    label: "İletişim",
    title: "Bir sonraki projeni konuşalım.",
    kicker: "Talk",
    blurb: "Aklındaki fikri yaz, 24 saat içinde dönüş yapayım.",
  },
];

export function chapterByKey(key: ChapterKey): Chapter {
  return chapters.find((c) => c.key === key)!;
}

export function chapterByPath(path: string): Chapter | undefined {
  return chapters.find((c) => c.href === path || (path.startsWith(c.href) && c.href !== "/"));
}

export function adjacentChapters(key: ChapterKey) {
  const list = chapters.filter((c) => c.key !== "home");
  const idx = list.findIndex((c) => c.key === key);
  return {
    prev: idx > 0 ? list[idx - 1] : null,
    next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
  };
}
