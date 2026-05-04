export type ProjectCategory = "Web" | "Bot" | "Panel" | "FiveM";

export type Project = {
  slug: string;
  title: string;
  category: ProjectCategory;
  tagline: string;
  summary: string;
  description: string[];
  tags: string[];
  role: string;
  year: string;
  status: "live" | "shipped" | "in-progress";
  url?: string;
  highlights: string[];
  metrics: { k: string; v: string }[];
  gradient: string;
  accent: string;
};

export const projects: Project[] = [
  {
    slug: "skyzon-development",
    title: "Skyzon Development",
    category: "Web",
    tagline: "Premium kurumsal yazılım stüdyosu kimliği.",
    summary:
      "Yazılım stüdyosunun kurumsal vitrini — premium tasarım, oyunsu animasyon, net dönüşüm hattı.",
    description: [
      "Skyzon Development için sıfırdan kurguladığım, sade ama premium kurumsal bir vitrin sitesi. Markanın değerini doğrudan ana sayfada hissettiren oversized tipografi, glassmorphism ve neon accent'lerle çalıştım.",
      "Hizmetler, süreç ve referanslar; tek bir scroll deneyiminde, tutarlı bir ritimle aktarılıyor. Mobilde 95+ Lighthouse, masaüstünde 100/100 erişilebilirlik skoru aldı.",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    role: "Tasarım + Geliştirme",
    year: "2025",
    status: "live",
    url: "#",
    highlights: [
      "Bespoke design system, tek elden üretim",
      "Scroll-driven animasyonlar ve cinematic geçişler",
      "Edge'de render, sub-1s LCP",
      "Form → CRM bağlantısı (lead funnel)",
    ],
    metrics: [
      { k: "Lighthouse", v: "98" },
      { k: "LCP", v: "0.9s" },
      { k: "Sayfa", v: "8" },
    ],
    gradient: "from-cyan-400/40 via-blue-500/30 to-violet-500/40",
    accent: "cyan",
  },
  {
    slug: "restaurant-pos",
    title: "Restaurant POS / Menu System",
    category: "Web",
    tagline: "Sipariş, masa ve dijital menü için tam stack çözüm.",
    summary:
      "Restoran zinciri için QR menü, sipariş yönetimi, masa takibi ve POS arayüzü içeren end-to-end sistem.",
    description: [
      "Restoran sahibi için QR menüden masaya, masadan POS arayüzüne kadar tüm akışı kapsayan bir uygulama tasarladım. Müşteri tarafı; masa kodunu okutuyor, menüden seçim yapıyor ve sipariş anında mutfağa düşüyor.",
      "Yönetim panelinde masa durumu, günlük ciro, en çok satan ürünler ve stok takibi tek ekranda. Tüm işlemler optimistik UI ile anlık geri bildirim veriyor.",
    ],
    tags: ["Next.js", "Node.js", "MySQL", "Prisma", "Stripe"],
    role: "Full Stack",
    year: "2024",
    status: "shipped",
    highlights: [
      "QR menü, sipariş ve POS tek arayüzde",
      "Real-time order updates (WebSocket)",
      "Rol bazlı yetki: garson / kasiyer / admin",
      "Print-ready fiş çıktısı + Stripe Terminal",
    ],
    metrics: [
      { k: "Tablo", v: "40+" },
      { k: "Aktif", v: "3 şube" },
      { k: "Uptime", v: "99.9%" },
    ],
    gradient: "from-amber-400/40 via-rose-500/30 to-violet-500/40",
    accent: "purple",
  },
  {
    slug: "discord-ticket-bot",
    title: "Discord Ticket Bot",
    category: "Bot",
    tagline: "Modüler destek sistemi, transcript ve admin paneli.",
    summary:
      "Sunucu yöneticileri için modüler ticket altyapısı: kategoriler, transcript, otomasyon ve web paneli.",
    description: [
      "100+ kişilik topluluk sunucuları için sıfırdan yazılmış bir destek sistemi. Kategori tabanlı ticket açma, otomatik atama, kapanışta transcript HTML çıktısı, web paneli üzerinden geçmiş kayıtlara erişim.",
      "Tüm yapı modüler — yeni özellik eklemek bir dosya. Komut yapılandırması ve roller web panelinden yönetilebiliyor.",
    ],
    tags: ["Discord.js", "Node.js", "MongoDB", "Next.js"],
    role: "Backend + Bot + Panel",
    year: "2024",
    status: "live",
    highlights: [
      "Slash command + button & modal interactions",
      "HTML transcript export",
      "Web panel ile rol/yetki yönetimi",
      "Auto-close & inactivity sweep",
    ],
    metrics: [
      { k: "Sunucu", v: "20+" },
      { k: "Ticket", v: "10K+" },
      { k: "Modül", v: "9" },
    ],
    gradient: "from-indigo-400/40 via-purple-500/30 to-cyan-400/40",
    accent: "purple",
  },
  {
    slug: "fivem-roleplay-website",
    title: "FiveM Roleplay Website",
    category: "FiveM",
    tagline: "Sunucu vitrin sitesi: kayıt, kurallar, mağaza.",
    summary:
      "FiveM rolplay sunucusu için kayıt formu, kural sayfası, kullanıcı paneli ve donate mağazasıyla tam vitrin.",
    description: [
      "FiveM sunucusunun dış vitrini olarak çalışan bir site. Discord OAuth ile giriş, başvuru formu, sunucu kuralları, sosyal medya akışı ve donate paketleri için Stripe entegrasyonu.",
      "Admin tarafında başvurular incelenip onaylanabiliyor. Tüm site, sunucunun renk paletine sıkı bağlı bir kimlikle tasarlandı.",
    ],
    tags: ["Next.js", "PHP", "MySQL", "Stripe", "Discord OAuth"],
    role: "Full Stack",
    year: "2024",
    status: "shipped",
    highlights: [
      "Discord OAuth + role sync",
      "Başvuru sistemi + admin moderation",
      "Stripe ile donate paketleri",
      "Server status & live player count",
    ],
    metrics: [
      { k: "Üye", v: "5K+" },
      { k: "Başvuru", v: "1.2K" },
      { k: "Conv.", v: "8.4%" },
    ],
    gradient: "from-emerald-400/40 via-cyan-500/30 to-blue-500/40",
    accent: "cyan",
  },
  {
    slug: "admin-panel-system",
    title: "Admin Panel System",
    category: "Panel",
    tagline: "Yetkilendirme, log ve analitik içeren panel altyapısı.",
    summary:
      "Birden fazla projede yeniden kullanılan, rol/izin tabanlı modern admin panel altyapısı.",
    description: [
      "İçerik yönetimi, kullanıcı yönetimi, log akışı ve analitik dashboard'u içeren bir panel altyapısı. Rol ve izin matrisi runtime'da yapılandırılabiliyor; her tablo için CRUD form'ları otomatik üretiliyor.",
      "Auth, rate limiting, audit log, multi-tenant yapı ve dark/light tema desteği var. Birden fazla projede aynı çekirdek kullanılıyor, sadece UI tema değişiyor.",
    ],
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "shadcn/ui"],
    role: "Architect + Full Stack",
    year: "2025",
    status: "live",
    highlights: [
      "Role/permission matrix runtime'da",
      "Otomatik CRUD form generator",
      "Multi-tenant + audit log",
      "Edge auth + 2FA opsiyonu",
    ],
    metrics: [
      { k: "Modül", v: "12" },
      { k: "Proje", v: "4" },
      { k: "TTI", v: "1.4s" },
    ],
    gradient: "from-fuchsia-400/40 via-purple-500/30 to-blue-500/40",
    accent: "purple",
  },
  {
    slug: "custom-landing-page",
    title: "Custom Landing Page",
    category: "Web",
    tagline: "Dönüşüm odaklı tek sayfa ürün lansmanı.",
    summary:
      "Bir SaaS ürünü lansmanı için tasarlanan, sadece tek bir aksiyona odaklanan premium landing page.",
    description: [
      "Yeni bir SaaS ürünü için lansman landing page'i. Hero — sosyal kanıt — özellik vurguları — fiyatlandırma — SSS — final CTA akışıyla, kullanıcıyı tek bir aksiyona (kayıt) doğru ittiriyor.",
      "A/B test için iki hero varyasyonu, segment bazlı içerik, sub-2s LCP. Lansmanın ilk haftasında %12 conversion oranıyla bekleneni 2× geçti.",
    ],
    tags: ["Next.js", "Tailwind", "Framer Motion", "Vercel Analytics"],
    role: "Tasarım + Geliştirme",
    year: "2025",
    status: "shipped",
    url: "#",
    highlights: [
      "İki hero varyasyonu — A/B test",
      "Sub-2s LCP, 100/100 a11y",
      "Stripe Checkout + Slack notify",
      "Edge analytics + heatmap",
    ],
    metrics: [
      { k: "Conv.", v: "12%" },
      { k: "LCP", v: "1.6s" },
      { k: "CLS", v: "0.01" },
    ],
    gradient: "from-pink-400/40 via-cyan-500/30 to-emerald-400/40",
    accent: "cyan",
  },
];

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug);
}
