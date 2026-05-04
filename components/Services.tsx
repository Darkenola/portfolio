"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Rocket,
  Bot,
  LayoutDashboard,
  UtensilsCrossed,
  Gamepad2,
  Code2,
  ArrowUpRight,
} from "lucide-react";
import Link from "next/link";
import SectionHeading from "./SectionHeading";

const services = [
  {
    Icon: Globe,
    title: "Web Site Tasarımı",
    text: "Marka ve dönüşüm odaklı, modern kurumsal siteler.",
    price: "₺ 9.000",
  },
  {
    Icon: Rocket,
    title: "Landing Page",
    text: "Tek hedef, tek aksiyon: ürün lansmanı için yüksek dönüşüm.",
    price: "₺ 4.500",
  },
  {
    Icon: Bot,
    title: "Discord Bot",
    text: "Modüler, ölçeklenebilir Discord bot ve panel sistemleri.",
    price: "₺ 3.500",
  },
  {
    Icon: LayoutDashboard,
    title: "Admin Panel",
    text: "Kullanıcı, içerik ve analitik yönetimi için panel altyapısı.",
    price: "₺ 12.000",
  },
  {
    Icon: UtensilsCrossed,
    title: "Restaurant Menü / POS",
    text: "QR menü, dijital sipariş ve POS entegrasyonu.",
    price: "₺ 7.500",
  },
  {
    Icon: Gamepad2,
    title: "FiveM Web Sitesi",
    text: "Sunucu için kayıt, mağaza, kurallar ve kullanıcı paneli.",
    price: "₺ 6.000",
  },
  {
    Icon: Code2,
    title: "Özel Yazılım",
    text: "İhtiyaca özel, sıfırdan yazılan modern web uygulamaları.",
    price: "Teklif Al",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-pad container-pad relative">
      <SectionHeading
        number="04"
        label="Hizmetler"
        title="İhtiyacına uygun, net ölçekli premium çözümler."
        subtitle="Her hizmet; tasarım + geliştirme + lansman + 1 ay destek paketiyle gelir."
      />

      <div className="mt-14 md:mt-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s, i) => (
          <motion.article
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            className="group relative rounded-2xl glass-strong p-6 md:p-7 border-grad overflow-hidden"
            data-cursor="hover"
          >
            <div className="absolute -top-24 -right-24 w-56 h-56 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-3xl opacity-30 group-hover:opacity-70 transition-opacity duration-700" />

            <div className="relative flex flex-col gap-5 min-h-[230px]">
              <div className="flex items-start justify-between">
                <span className="inline-flex w-12 h-12 items-center justify-center rounded-xl glass border border-white/10 group-hover:border-neon-cyan/40 transition">
                  <s.Icon className="text-neon-cyan" size={22} />
                </span>
                <span className="text-[10px] uppercase tracking-widest font-mono text-white/40">
                  Başlangıç
                </span>
              </div>

              <div>
                <h3 className="font-display text-2xl font-semibold text-white">{s.title}</h3>
                <p className="text-white/60 text-sm mt-2 leading-relaxed">{s.text}</p>
              </div>

              <div className="mt-auto flex items-center justify-between pt-4 border-t border-white/5">
                <div className="flex flex-col">
                  <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
                    Başlangıç
                  </span>
                  <span className="font-display text-xl text-gradient-static">{s.price}</span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm text-white/80 hover:text-white"
                >
                  Teklif Al
                  <ArrowUpRight
                    size={16}
                    className="text-neon-cyan transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
