import {
  Globe,
  Rocket,
  Bot,
  LayoutDashboard,
  UtensilsCrossed,
  Gamepad2,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  Icon: LucideIcon;
  title: string;
  text: string;
  price: string;
  delivery: string;
  features: string[];
};

export const services: Service[] = [
  {
    slug: "web-site-tasarimi",
    Icon: Globe,
    title: "Web Site Tasarımı",
    text: "Marka ve dönüşüm odaklı, modern kurumsal siteler.",
    price: "₺ 9.000",
    delivery: "10 gün",
    features: [
      "5–10 sayfa, tam responsive",
      "Premium animasyonlar",
      "SEO temel optimizasyonu",
      "1 ay ücretsiz destek",
    ],
  },
  {
    slug: "landing-page",
    Icon: Rocket,
    title: "Landing Page",
    text: "Tek hedef, tek aksiyon: ürün lansmanı için yüksek dönüşüm.",
    price: "₺ 4.500",
    delivery: "5 gün",
    features: [
      "Tek sayfa, dönüşüm odaklı",
      "A/B test ready",
      "CTA optimizasyonu",
      "Vercel deploy",
    ],
  },
  {
    slug: "discord-bot",
    Icon: Bot,
    title: "Discord Bot",
    text: "Modüler, ölçeklenebilir Discord bot ve panel sistemleri.",
    price: "₺ 3.500",
    delivery: "7 gün",
    features: [
      "Slash komutlar + butonlar",
      "Veritabanı entegrasyonu",
      "Web panel opsiyonu",
      "7/24 self-host yardımı",
    ],
  },
  {
    slug: "admin-panel",
    Icon: LayoutDashboard,
    title: "Admin Panel",
    text: "Kullanıcı, içerik ve analitik yönetimi için panel altyapısı.",
    price: "₺ 12.000",
    delivery: "14 gün",
    features: [
      "Rol/izin sistemi",
      "CRUD modülleri",
      "Audit log + analytics",
      "Dark / light tema",
    ],
  },
  {
    slug: "restaurant-pos",
    Icon: UtensilsCrossed,
    title: "Restaurant Menü / POS",
    text: "QR menü, dijital sipariş ve POS entegrasyonu.",
    price: "₺ 7.500",
    delivery: "10 gün",
    features: [
      "QR + dijital menü",
      "Sipariş + masa yönetimi",
      "Print fiş çıktısı",
      "Stripe Terminal opsiyonu",
    ],
  },
  {
    slug: "fivem-website",
    Icon: Gamepad2,
    title: "FiveM Web Sitesi",
    text: "Sunucu için kayıt, mağaza, kurallar ve kullanıcı paneli.",
    price: "₺ 6.000",
    delivery: "8 gün",
    features: [
      "Discord OAuth",
      "Başvuru sistemi",
      "Stripe donate",
      "Server status widget",
    ],
  },
  {
    slug: "ozel-yazilim",
    Icon: Code2,
    title: "Özel Yazılım",
    text: "İhtiyaca özel, sıfırdan yazılan modern web uygulamaları.",
    price: "Teklif Al",
    delivery: "Esnek",
    features: [
      "Mimari + UI/UX",
      "API + entegrasyon",
      "Süresiz destek seçeneği",
      "NDA imzalı süreç",
    ],
  },
];
