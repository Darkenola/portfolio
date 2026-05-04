"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import SectionHeading from "./SectionHeading";
import { Code2, Sparkles, Rocket, LifeBuoy } from "lucide-react";

const values = [
  {
    Icon: Code2,
    title: "Temiz Kod",
    text: "Sürdürülebilir, ölçeklenebilir ve modern mimariler.",
  },
  {
    Icon: Sparkles,
    title: "Premium Tasarım",
    text: "Her detayı düşünülmüş, marka değerini yükselten arayüzler.",
  },
  {
    Icon: Rocket,
    title: "Hızlı Teslim",
    text: "Net süreç, net iletişim, zamanında teslim.",
  },
  {
    Icon: LifeBuoy,
    title: "Uzun Vadeli Destek",
    text: "Lansman sonrası bakım, güncelleme ve büyüme partneri.",
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <section id="about" className="section-pad container-pad relative">
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] rounded-full bg-neon-cyan/5 blur-3xl -z-10" />

      <SectionHeading
        number="01"
        label="Hakkımda"
        title="Ben sadece web sitesi yapmıyorum; markalar için dijital vitrinler tasarlıyorum."
        subtitle="Tasarım ve kodu birlikte düşünen, performans ve estetiği aynı pencerede tutan bir geliştiriciyim."
      />

      <div className="grid lg:grid-cols-12 gap-10 mt-16 md:mt-24" ref={ref}>
        <div className="lg:col-span-7 flex flex-col gap-6 text-white/70 text-base md:text-lg leading-relaxed">
          <FadeP>
            5+ yıldır web teknolojileriyle çalışıyorum. Restoran POS sistemlerinden FiveM
            roleplay sitelerine, Discord botlarından premium kurumsal sitelere kadar çok
            farklı projelerde aynı şeye odaklanıyorum: <span className="text-white">hızlı, estetik ve dönüşüm odaklı</span> ürünler çıkarmak.
          </FadeP>
          <FadeP delay={0.1}>
            Her projede; markanın hikâyesini, kullanıcının yolculuğunu ve teknik
            altyapının uzun vadeli sağlığını birlikte düşünüyorum. Çünkü iyi bir web
            sitesi sadece &quot;güzel görünmek&quot; değil; <span className="text-white">çalışmak</span> ve <span className="text-white">büyütmek</span> içindir.
          </FadeP>
          <FadeP delay={0.2}>
            Felsefem basit:{" "}
            <span className="text-gradient-static font-medium">az ama doğru</span>{" "}
            — gerekenden bir piksel fazlasını koymadan, bir piksel eksiğini bırakmadan.
          </FadeP>
        </div>

        <div className="lg:col-span-5 grid grid-cols-2 gap-4">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group relative glass-strong rounded-2xl p-5 border-grad overflow-hidden"
              data-cursor="hover"
            >
              <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-2xl opacity-0 group-hover:opacity-100 transition" />
              <v.Icon className="text-neon-cyan mb-4" size={22} />
              <h3 className="font-display text-lg font-semibold text-white">{v.title}</h3>
              <p className="text-sm text-white/55 mt-1.5 leading-relaxed">{v.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FadeP({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.p
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.p>
  );
}
