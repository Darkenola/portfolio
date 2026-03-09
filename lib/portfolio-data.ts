import type { LucideIcon } from "lucide-react";
import {
  Blocks,
  Braces,
  Code2,
  Github,
  GraduationCap,
  Instagram,
  Layers3,
  Linkedin,
  MonitorSmartphone,
  PenTool,
  Rocket,
  ServerCog,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";

import type { Language } from "@/lib/i18n";

type Translate = <T>(en: T, tr: T) => T;

export type NavItem = {
  label: string;
  href: string;
};

export type HeroHighlight = {
  label: string;
  value: string;
};

export type StackGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export type Project = {
  slug: string;
  title: string;
  label: string;
  status: string;
  year: string;
  description: string;
  stack: string[];
  github: string;
  demo?: string;
  demoLabel?: string;
  variant: "portfolio" | "productivity" | "automation";
  outcome: string;
  repository: string;
  features: string[];
  metrics: Array<{
    label: string;
    value: string;
  }>;
  caseStudyIntro: string;
  challenge: string;
  solution: string;
  architecture: string;
  nextSteps: string[];
};

export type Insight = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type SocialLink = {
  title: string;
  href: string;
  subtitle: string;
  icon: LucideIcon;
};

export type TimelineItem = {
  title: string;
  period: string;
  type: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

export type NoteItem = {
  title: string;
  category: string;
  excerpt: string;
};

function withLanguage(language: Language): Translate {
  return (en, tr) => (language === "tr" ? tr : en);
}

export function getNavItems(language: Language): NavItem[] {
  const t = withLanguage(language);

  return [
    { label: t("Home", "Ana Sayfa"), href: "/" },
    { label: t("About", "Hakkımda"), href: "/about" },
    { label: t("Projects", "Projeler"), href: "/projects" },
    { label: t("Notes", "Notlar"), href: "/notes" },
    { label: t("Resume", "CV"), href: "/resume" },
  ];
}

export function getHeroHighlights(language: Language): HeroHighlight[] {
  const t = withLanguage(language);

  return [
    { label: t("Core Focus", "Ana Odak"), value: t("Backend systems", "Backend sistemler") },
    { label: t("Approach", "Yaklaşım"), value: t("Automation-first", "Otomasyon odaklı") },
    { label: t("Mindset", "Zihniyet"), value: t("Build, refine, ship", "Üret, geliştir, yayınla") },
  ];
}

export function getAboutPillars(language: Language): Insight[] {
  const t = withLanguage(language);

  return [
    {
      title: t("Problem solving", "Problem çözümü"),
      description: t(
        "I enjoy turning vague requirements into practical software with clear structure and strong implementation detail.",
        "Belirsiz ihtiyaçları net yapılı ve uygulama kalitesi yüksek yazılımlara dönüştürmeyi seviyorum.",
      ),
      icon: Sparkles,
    },
    {
      title: t("Modern technologies", "Modern teknolojiler"),
      description: t(
        "I keep learning current tools, patterns, and workflows that make software faster to build and easier to maintain.",
        "Yazılımı daha hızlı geliştiren ve sürdürülebilir yapan güncel araçları, yaklaşımları ve iş akışlarını öğrenmeye devam ediyorum.",
      ),
      icon: Layers3,
    },
    {
      title: t("Backend systems", "Backend sistemler"),
      description: t(
        "I am especially interested in reliable services, scalable logic, data flow, and system design that holds up over time.",
        "Özellikle güvenilir servisler, ölçeklenebilir mantık, veri akışı ve zamanla dayanıklı kalan sistem tasarımı ilgimi çekiyor.",
      ),
      icon: ServerCog,
    },
    {
      title: t("Builder mindset", "Üreten zihniyet"),
      description: t(
        "Real projects, iteration, and shipping matter to me more than collecting unfinished ideas or surface-level demos.",
        "Gerçek projeler, iterasyon ve yayınlama benim için yarım kalmış fikirlerden veya yüzeysel demolardan daha değerli.",
      ),
      icon: Workflow,
    },
  ];
}

export function getExperienceItems(language: Language): TimelineItem[] {
  const t = withLanguage(language);

  return [
    {
      title: t("Project-led software development", "Proje odaklı yazılım geliştirme"),
      period: t("Current", "Güncel"),
      type: t("Hands-on build path", "Üretim odaklı yol"),
      description: t(
        "My strongest growth comes from building real products end to end, then improving them through iteration, refactoring, and sharper product thinking.",
        "En güçlü gelişimimi gerçek ürünleri uçtan uca geliştirip sonra iterasyon, refactor ve daha güçlü ürün düşüncesiyle iyileştirirken elde ediyorum.",
      ),
      points: [
        t("Turning concepts into working interfaces and usable systems", "Fikirleri çalışan arayüzlere ve kullanışlı sistemlere dönüştürmek"),
        t("Practicing clean structure, polish, and maintainable decisions", "Temiz yapı, rafine detaylar ve bakımı kolay kararlar üzerinde çalışmak"),
        t("Learning by shipping instead of stopping at prototypes", "Sadece prototipte kalmayıp yayınlayarak öğrenmek"),
      ],
      icon: Rocket,
    },
    {
      title: t("Backend systems and automation", "Backend sistemler ve otomasyon"),
      period: t("Ongoing focus", "Sürekli odak"),
      type: t("Technical direction", "Teknik yönelim"),
      description: t(
        "I am especially drawn to backend workflows, monitoring, service logic, and automation patterns that remove friction from repeated work.",
        "Özellikle backend iş akışları, izleme, servis mantığı ve tekrar eden işi kolaylaştıran otomasyon desenlerine ilgi duyuyorum.",
      ),
      points: [
        t("System flow and data movement", "Sistem akışı ve veri hareketi"),
        t("Operational visibility and reliability", "Operasyonel görünürlük ve güvenilirlik"),
        t("Automation as leverage, not decoration", "Süs değil kaldıraç olarak otomasyon"),
      ],
      icon: ServerCog,
    },
    {
      title: t("Modern frontend engineering", "Modern frontend geliştirme"),
      period: t("Ongoing focus", "Sürekli odak"),
      type: t("Interface work", "Arayüz çalışmaları"),
      description: t(
        "I care about how software feels in use, so I put time into responsive layouts, visual hierarchy, motion, and UI clarity.",
        "Yazılımın kullanılırken nasıl hissettirdiğine önem veriyorum; bu nedenle responsive yapılar, görsel hiyerarşi, hareket ve arayüz netliği üzerine zaman harcıyorum.",
      ),
      points: [
        t("Responsive structure across mobile and desktop", "Mobil ve masaüstü için responsive yapı"),
        t("Clear information density and spacing", "Net bilgi yoğunluğu ve boşluk kullanımı"),
        t("Premium presentation without unnecessary noise", "Gereksiz kalabalik olmadan premium sunum"),
      ],
      icon: PenTool,
    },
    {
      title: t("Continuous learning model", "Sürekli öğrenme modeli"),
      period: t("Always active", "Her zaman aktif"),
      type: t("Growth", "Gelişim"),
      description: t(
        "Documentation, experimentation, real builds, and feedback loops are the main way I keep improving across tools and technologies.",
        "Dokümantasyon, deneme, gerçek projeler ve geri bildirim döngüleri; araçlar ve teknolojiler boyunca kendimi geliştirme yolumun merkezinde.",
      ),
      points: [
        t("Hands-on repetition over passive learning", "Pasif öğrenme yerine uygulamalı tekrar"),
        t("Modern stack exploration with practical goals", "Pratik hedeflerle modern stack keşfi"),
        t("Technical curiosity tied to actual output", "Gerçek çıktıya bağlı teknik merak"),
      ],
      icon: GraduationCap,
    },
  ];
}

export function getStackGroups(language: Language): StackGroup[] {
  const t = withLanguage(language);

  return [
    {
      title: t("Languages", "Diller"),
      description: t(
        "Core programming foundations across systems, object-oriented development, and scripting.",
        "Sistemler, nesne yönelimli geliştirme ve script tarafında temel programlama altyapım.",
      ),
      icon: Code2,
      items: ["Python", "Java", "C", "C++", "C#", "JavaScript"],
    },
    {
      title: t("Frontend", "Frontend"),
      description: t(
        "Modern interfaces with clean structure, responsive layouts, and polished user experience.",
        "Temiz yapı, responsive düzen ve rafine kullanıcı deneyimiyle modern arayüzler.",
      ),
      icon: MonitorSmartphone,
      items: ["HTML5", "CSS3", "Next.js"],
    },
    {
      title: t("Backend / Runtime", "Backend / Runtime"),
      description: t(
        "Runtime foundations for server-side logic, APIs, and application workflows.",
        "Sunucu tarafı mantık, API'ler ve uygulama iş akışları için runtime temeli.",
      ),
      icon: ServerCog,
      items: ["Node.js"],
    },
    {
      title: t("Tools", "Araçlar"),
      description: t(
        "Daily engineering tools for source control, development environment, and productivity.",
        "Kaynak yönetimi, geliştirme ortamı ve üretkenlik için günlük mühendislik araçları.",
      ),
      icon: Wrench,
      items: ["Git", "GitHub", "Linux", "VS Code"],
    },
  ];
}

export function getProjects(language: Language): Project[] {
  const t = withLanguage(language);

  return [
    {
      slug: "darkenola-portfolio",
      title: t("Developer Portfolio Website", "Geliştirici Portfolyo Sitesi"),
      label: t("Personal Brand Build", "Kişisel Marka Çalışması"),
      status: t("Live now", "Yayında"),
      year: "2026",
      description: t(
        "A premium portfolio experience designed to present technical credibility through elegant motion, strong typography, and sharp visual hierarchy.",
        "Akıcı animasyonlar, güçlü tipografi ve net görsel hiyerarşi ile teknik güveni yansıtan premium bir portfolyo deneyimi.",
      ),
      stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Darkenola/darkenola-portfolio",
      demo: "https://emirhanatici.xyz",
      demoLabel: t("Live Site", "Canlı Site"),
      variant: "portfolio",
      outcome: t(
        "Positioned to communicate technical depth and polished execution at first glance.",
        "İlk bakışta teknik derinlik ve rafine uygulama kalitesini hissettirecek şekilde konumlandı.",
      ),
      repository: "external-github-projects/darkenola-portfolio",
      features: [
        t("Premium hero choreography and section reveal system", "Premium hero kompozisyonu ve section reveal sistemi"),
        t("Reusable content-driven component architecture", "Yeniden kullanılabilir ve içerik odaklı component mimarisi"),
        t("SEO, social preview, and custom domain setup", "SEO, sosyal paylaşım önizlemesi ve özel domain kurulumu"),
      ],
      metrics: [
        { label: t("Role", "Rol"), value: t("Design + Frontend", "Tasarım + Frontend") },
        { label: t("Focus", "Odak"), value: t("Brand and hierarchy", "Marka ve hiyerarşi") },
        { label: t("Repository", "Repo"), value: t("Upload-ready", "Yüklemeye hazır") },
      ],
      caseStudyIntro: t(
        "This project was built to make a strong first impression before a recruiter or client reads a single paragraph. The site combines visual restraint with enough motion and detail to signal care, technical fluency, and strong execution.",
        "Bu proje, bir recruiter veya müşteri tek bir paragraf okumadan önce güçlü bir ilk izlenim bırakmak için tasarlandı. Site; ölçülü bir görsel dil, yeterli hareket ve detay ile özenli işçilik, teknik hakimiyet ve güçlü uygulama kalitesini bir araya getiriyor.",
      ),
      challenge: t(
        "The challenge was to avoid a generic portfolio template and instead build a site that feels intentional, modern, and credible across mobile and desktop without becoming noisy.",
        "Asıl zorluk; jenerik bir portfolyo şablonuna düşmeden, mobil ve masaüstünde bilinçli, modern ve güven veren ama aşırı kalabalık olmayan bir deneyim oluşturmaktı.",
      ),
      solution: t(
        "I used a darker premium visual system, data-driven reusable sections, and a sharper project narrative so the portfolio reads like a serious software engineer brand rather than a starter template.",
        "Daha premium koyu bir görsel sistem, veri odaklı yeniden kullanılabilir section'lar ve daha net bir proje anlatımı kullanarak siteyi başlangıç şablonu değil, ciddi bir yazılım mühendisliği markası gibi hissettirdim.",
      ),
      architecture: t(
        "The app is structured around reusable portfolio sections, shared UI primitives, centralized content data, App Router routes, and a dedicated project detail pattern that can grow over time.",
        "Uygulama; yeniden kullanılabilir portfolyo section'ları, ortak UI primitive'leri, merkezi içerik verisi, App Router yapısı ve zamanla büyüyebilecek proje detay sayfası deseni etrafında kuruldu.",
      ),
      nextSteps: [
        t("Replace placeholder project repositories with live GitHub repos", "Placeholder repo bağlantılarını gerçek GitHub repo'larıyla değiştirmek"),
        t("Add richer media and real case study screenshots", "Daha güçlü medya ve gerçek case study ekran görüntüleri eklemek"),
        t("Extend the brand with technical writing and more detailed project pages", "Markayı teknik yazılar ve daha detaylı proje sayfalarıyla genişletmek"),
      ],
    },
    {
      slug: "focusflow-productivity",
      title: t("Task / Productivity App", "Görev / Üretkenlik Uygulaması"),
      label: t("Focused Workflow Product", "Odaklı İş Akışı Ürünü"),
      status: t("Repo ready", "Repo hazır"),
      year: "2026",
      description: t(
        "A streamlined productivity interface for organizing tasks, tracking progress, and reducing friction in day-to-day execution.",
        "Görevleri düzenlemek, ilerlemeyi takip etmek ve günlük çalışma akışındaki sürtünmeyi azaltmak için tasarlanmış sade bir üretkenlik arayüzü.",
      ),
      stack: ["Next.js", "Node.js", "TypeScript", "CSS3"],
      github: "https://github.com/Darkenola/focusflow-productivity",
      variant: "productivity",
      outcome: t(
        "Structured around clarity, speed, and a product-minded approach to deep work.",
        "Netlik, hız ve derin çalışmaya ürün odaklı bir yaklaşım etrafında kurgulandı.",
      ),
      repository: "external-github-projects/focusflow-productivity",
      features: [
        t("Task lanes, daily planning, and fast priority management", "Görev kolonları, günlük planlama ve hızlı öncelik yönetimi"),
        t("Focus-oriented dashboard with progress and momentum signals", "İlerleme ve ivme sinyalleri sunan odak odaklı dashboard"),
        t("Designed to scale from personal workflow to team-ready patterns", "Bireysel kullanımdan ekip düzenine uzanabilecek şekilde tasarlandı"),
      ],
      metrics: [
        { label: t("Product", "Ürün"), value: t("Workflow dashboard", "İş akışı paneli") },
        { label: t("Focus", "Odak"), value: t("Deep work clarity", "Derin çalışma netliği") },
        { label: t("Repository", "Repo"), value: t("Upload-ready", "Yüklemeye hazır") },
      ],
      caseStudyIntro: t(
        "This concept explores a productivity surface that favors clarity over clutter. The main goal is to reduce friction between planning, action, and review.",
        "Bu konsept, kalabalık yerine netliği tercih eden bir üretkenlik yüzeyini araştırıyor. Ana hedef; planlama, uygulama ve gözden geçirme arasındaki sürtünmeyi azaltmak.",
      ),
      challenge: t(
        "Most productivity tools either feel too heavy for fast daily use or too thin to support meaningful workflow planning. The balance is hard to get right.",
        "Çoğu üretkenlik aracı ya günlük hızlı kullanım için fazla ağır kalıyor ya da anlamlı bir iş akışı planlaması sunamayacak kadar yüzeysel kalıyor. Doğru dengeyi kurmak zor.",
      ),
      solution: t(
        "The interface keeps the information density controlled: high-signal stats, a visible priority queue, and enough structure to support focus without overwhelming the user.",
        "Arayüz bilgi yoğunluğunu kontrollü tutuyor: yüksek sinyalli istatistikler, görünür bir öncelik listesi ve kullanıcıyı yormadan odağı destekleyecek kadar yapı.",
      ),
      architecture: t(
        "The starter repo is designed as a Next.js dashboard foundation with room for authentication, persistence, and richer task modeling later.",
        "Starter repo; daha sonra kimlik doğrulama, kalıcı veri saklama ve daha zengin görev modellemesini destekleyebilecek bir Next.js panel temeli olarak kuruldu.",
      ),
      nextSteps: [
        t("Add persistent task storage and user auth", "Kalıcı görev depolama ve kullanıcı girişi eklemek"),
        t("Introduce focus sessions and recurring task rules", "Odak oturumları ve tekrar eden görev kuralları eklemek"),
        t("Build a clearer analytics layer for momentum tracking", "İvmeyi takip etmek için daha net bir analiz katmanı kurmak"),
      ],
    },
    {
      slug: "automation-control-dashboard",
      title: t("Automation Control Dashboard", "Otomasyon Kontrol Paneli"),
      label: t("Systems + Monitoring", "Sistemler + İzleme"),
      status: t("Repo ready", "Repo hazır"),
      year: "2026",
      description: t(
        "A full stack dashboard concept for monitoring jobs, managing automation flows, and surfacing operational signals in a clean interface.",
        "İşleri izlemek, otomasyon akışlarını yönetmek ve operasyonel sinyalleri temiz bir arayüzde göstermek için tasarlanmış full stack panel konsepti.",
      ),
      stack: ["Node.js", "JavaScript", "GitHub", "Linux"],
      github: "https://github.com/Darkenola/automation-control-dashboard",
      variant: "automation",
      outcome: t(
        "Built to showcase backend thinking, operational awareness, and scalable workflow design.",
        "Backend düşüncesini, operasyonel farkındalığı ve ölçeklenebilir iş akışı tasarımını göstermek için oluşturuldu.",
      ),
      repository: "external-github-projects/automation-control-dashboard",
      features: [
        t("Live job monitoring, status surfaces, and failure visibility", "Canlı iş izleme, durum yüzeyleri ve hata görünürlüğü"),
        t("Automation pipeline mapping for trigger-to-result flow", "Tetikten sonuca kadar otomasyon akış haritası"),
        t("Structured foundation for API-first operational tooling", "API-first operasyonel araçlar için düzenli temel"),
      ],
      metrics: [
        { label: t("System", "Sistem"), value: t("Ops monitoring", "Operasyon izleme") },
        { label: t("Focus", "Odak"), value: t("Automation control", "Otomasyon kontrolü") },
        { label: t("Repository", "Repo"), value: t("Upload-ready", "Yüklemeye hazır") },
      ],
      caseStudyIntro: t(
        "This project is meant to show backend-oriented thinking through a monitoring and control interface that feels useful, not decorative.",
        "Bu proje, süs amaçlı değil gerçekten faydalı hissettiren bir izleme ve kontrol arayüzü üzerinden backend odaklı düşünce yapısını göstermeyi amaçlıyor.",
      ),
      challenge: t(
        "Automation tooling often exposes raw data without enough context, which makes it harder to understand job state, investigate issues, and trust the system.",
        "Otomasyon araçları çoğu zaman ham veriyi yeterli bağlam olmadan sunuyor; bu da iş durumunu anlamayı, sorun incelemeyi ve sisteme güvenmeyi zorlaştırıyor.",
      ),
      solution: t(
        "The dashboard emphasizes status clarity, runtime visibility, and workflow mapping so the user can understand the system quickly and act with confidence.",
        "Panel; durum netliği, çalışma süresi görünürlüğü ve iş akışı haritalaması üzerine kuruldu. Böylece kullanıcı sistemi hızla anlayıp güvenle harekete geçebilir.",
      ),
      architecture: t(
        "The repo package includes a simple Express server, mock job data, an API endpoint, and a clean static monitoring frontend that can evolve into a deeper full stack tool.",
        "Repo paketi; basit bir Express sunucusu, örnek iş verileri, bir API endpoint'i ve zamanla daha derin bir full stack araca dönüşebilecek temiz bir statik izleme arayüzü içeriyor.",
      ),
      nextSteps: [
        t("Add persistent job history and searchable logs", "Kalıcı iş geçmişi ve aranabilir log kaydı eklemek"),
        t("Introduce auth, alerting, and webhook triggers", "Kimlik doğrulama, uyarı sistemi ve webhook tetikleri eklemek"),
        t("Expand from mock data into real system integrations", "Örnek veriden gerçek sistem entegrasyonlarına geçmek"),
      ],
    },
  ];
}

export function getProjectSectionStats(language: Language) {
  const t = withLanguage(language);

  return [
    { label: t("Featured builds", "\u00d6ne \u00e7\u0131kan projeler"), value: "03" },
    {
      label: t("Upload-ready repos", "Y\u00fcklemeye haz\u0131r repo"),
      value: "03",
    },
    { label: t("Live project", "Canl\u0131 proje"), value: "01" },
  ];
}

export function getCredibilitySignals(language: Language): Insight[] {
  const t = withLanguage(language);

  return [
    {
      title: t("Project-first learning", "Proje \u00f6nce gelen \u00f6\u011frenme"),
      description: t(
        "I prefer learning by building, debugging, and improving real software instead of staying in tutorial mode.",
        "Tutorial modunda kalmak yerine ger\u00e7ek yaz\u0131l\u0131mlar geli\u015ftirip hata ay\u0131klayarak ve iyile\u015ftirerek \u00f6\u011frenmeyi tercih ediyorum.",
      ),
      icon: Blocks,
    },
    {
      title: t("Clean engineering habits", "Temiz m\u00fchendislik al\u0131\u015fkanl\u0131klar\u0131"),
      description: t(
        "Readable structure, maintainable decisions, and deliberate iteration are part of how I approach every build.",
        "Okunabilir yap\u0131, bak\u0131m\u0131 kolay kararlar ve bilin\u00e7li iterasyon her projeye yakla\u015f\u0131m\u0131m\u0131n temel par\u00e7as\u0131.",
      ),
      icon: Braces,
    },
    {
      title: t("Versioned workflow", "Versiyonlu i\u015f ak\u0131\u015f\u0131"),
      description: t(
        "Git and GitHub are part of the daily process: experiment, refine, commit, and keep the work understandable.",
        "Git ve GitHub g\u00fcnl\u00fck s\u00fcrecin par\u00e7as\u0131: dene, geli\u015ftir, commit at ve yap\u0131lan i\u015fi anla\u015f\u0131l\u0131r tut.",
      ),
      icon: Github,
    },
  ];
}

export function getNoteItems(language: Language): NoteItem[] {
  const t = withLanguage(language);

  return [
    {
      title: t("Why internal tools should feel sharp", "\u0130\u00e7 ara\u00e7lar neden g\u00fc\u00e7l\u00fc hissettirmeli"),
      category: t("Systems thinking", "Sistem d\u00fc\u015f\u00fcncesi"),
      excerpt: t(
        "Even operational dashboards deserve clarity, hierarchy, and polish because bad tooling slows decision-making just as much as bad product UX.",
        "Operasyonel paneller bile netlik, hiyerar\u015fi ve rafinelik hak eder; \u00e7\u00fcnk\u00fc k\u00f6t\u00fc ara\u00e7lar da k\u00f6t\u00fc \u00fcr\u00fcn deneyimi kadar karar verme h\u0131z\u0131n\u0131 d\u00fc\u015f\u00fcr\u00fcr.",
      ),
    },
    {
      title: t("Project-first learning works better", "Proje \u00f6nce gelen \u00f6\u011frenme daha iyi \u00e7al\u0131\u015f\u0131r"),
      category: t("Learning model", "\u00d6\u011frenme modeli"),
      excerpt: t(
        "Shipping small but real builds teaches more than collecting disconnected snippets. Edge cases, iteration, and cleanup are where the real lessons live.",
        "K\u00fc\u00e7\u00fck ama ger\u00e7ek projeler yay\u0131nlamak, kopuk kod par\u00e7alar\u0131n\u0131 toplamaktan daha fazla \u015fey \u00f6\u011fretir. Ger\u00e7ek dersler edge-case, iterasyon ve temizlik a\u015famas\u0131nda ortaya \u00e7\u0131kar.",
      ),
    },
    {
      title: t("Automation is leverage", "Otomasyon bir kald\u0131ra\u00e7t\u0131r"),
      category: t("Backend mindset", "Backend zihniyeti"),
      excerpt: t(
        "The most useful automation is the kind that removes repeated friction, surfaces system state clearly, and stays maintainable when requirements change.",
        "En faydal\u0131 otomasyon; tekrar eden s\u00fcrt\u00fcnmeyi azaltan, sistem durumunu net g\u00f6steren ve ihtiya\u00e7lar de\u011fi\u015fti\u011finde bak\u0131m\u0131 m\u00fcmk\u00fcn kalan otomasyondur.",
      ),
    },
  ];
}

export function getSocialLinks(language: Language): SocialLink[] {
  const t = withLanguage(language);

  return [
    {
      title: "GitHub",
      href: "https://github.com/Darkenola",
      subtitle: t(
        "Code, repositories, experiments, and build history.",
        "Kodlar, depolar, denemeler ve \u00fcretim ge\u00e7mi\u015fi.",
      ),
      icon: Github,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/darkenola/",
      subtitle: t(
        "Professional profile and collaboration network.",
        "Profesyonel profil ve i\u015f birli\u011fi a\u011f\u0131.",
      ),
      icon: Linkedin,
    },
    {
      title: "Instagram",
      href: "https://www.instagram.com/han_atc/",
      subtitle: t(
        "A lighter channel for personal brand presence.",
        "Ki\u015fisel marka g\u00f6r\u00fcn\u00fcrl\u00fc\u011f\u00fc i\u00e7in daha hafif bir kanal.",
      ),
      icon: Instagram,
    },
  ];
}

export function getContactInterests(language: Language) {
  const t = withLanguage(language);

  return [
    t("Backend-focused products and scalable software", "Backend odakl\u0131 \u00fcr\u00fcnler ve \u00f6l\u00e7eklenebilir yaz\u0131l\u0131m"),
    t("Automation tools and workflow systems", "Otomasyon ara\u00e7lar\u0131 ve i\u015f ak\u0131\u015f\u0131 sistemleri"),
    t("Ambitious personal brands and developer-facing experiences", "\u0130ddial\u0131 ki\u015fisel markalar ve geli\u015ftirici odakl\u0131 deneyimler"),
  ];
}

export const activityPattern = [
  [0.14, 0.32, 0.18, 0.54, 0.22, 0.68, 0.34],
  [0.2, 0.48, 0.26, 0.72, 0.38, 0.56, 0.18],
  [0.1, 0.24, 0.52, 0.28, 0.74, 0.44, 0.16],
  [0.3, 0.64, 0.22, 0.46, 0.2, 0.78, 0.4],
  [0.18, 0.42, 0.12, 0.58, 0.3, 0.7, 0.2],
  [0.24, 0.56, 0.2, 0.62, 0.16, 0.74, 0.48],
  [0.14, 0.36, 0.22, 0.52, 0.34, 0.6, 0.18],
  [0.26, 0.44, 0.16, 0.66, 0.28, 0.72, 0.36],
  [0.12, 0.3, 0.54, 0.24, 0.68, 0.4, 0.18],
  [0.32, 0.58, 0.26, 0.76, 0.36, 0.48, 0.2],
  [0.22, 0.4, 0.18, 0.64, 0.3, 0.74, 0.34],
  [0.16, 0.5, 0.24, 0.6, 0.2, 0.78, 0.42],
];

export const contactEmail = "emirhanac12@gmail.com";
export const resumeDownloadPath = "/emirhan-atici-resume.pdf";

export function getResumeSummary(language: Language) {
  const t = withLanguage(language);

  return t(
    "Software developer focused on backend systems, automation, modern frontend work, and project-led growth through real builds.",
    "Backend sistemler, otomasyon, modern frontend \u00e7al\u0131\u015fmalar\u0131 ve ger\u00e7ek projeler \u00fczerinden geli\u015fen yaz\u0131l\u0131m geli\u015ftirme s\u00fcrecine odaklanan bir yaz\u0131l\u0131m geli\u015ftirici.",
  );
}
