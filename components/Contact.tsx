"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle, Globe, ArrowUpRight, Send } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Web Site",
  "Landing Page",
  "Discord Bot",
  "Admin Panel",
  "FiveM",
  "Restaurant",
  "Özel",
];
const budgets = ["< 5K", "5K – 10K", "10K – 25K", "25K+"];

export default function Contact() {
  const [pType, setPType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[1]);
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad container-pad relative">
      <SectionHeading
        number="06"
        label="İletişim"
        title="Bir sonraki projeni konuşalım."
        subtitle="Aklındaki fikri yaz, 24 saat içinde dönüş yapayım."
      />

      <div className="mt-14 md:mt-20 grid lg:grid-cols-12 gap-6">
        {/* form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="lg:col-span-8 relative rounded-3xl glass-strong p-6 md:p-10 border-grad"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <Field label="İsim" name="name" placeholder="Adın Soyadın" required />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="ornek@mail.com"
              required
            />
          </div>

          <div className="mt-6">
            <Label>Proje Türü</Label>
            <div className="flex flex-wrap gap-2">
              {projectTypes.map((t) => (
                <Chip key={t} active={pType === t} onClick={() => setPType(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Label>Bütçe</Label>
            <div className="flex flex-wrap gap-2">
              {budgets.map((b) => (
                <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
                  {b} ₺
                </Chip>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Label>Mesaj</Label>
            <textarea
              required
              rows={5}
              placeholder="Projeni kısaca anlat..."
              className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan/60 focus:bg-white/[0.07] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition resize-none"
            />
          </div>

          <div className="mt-8 flex items-center justify-between gap-4 flex-wrap">
            <p className="text-xs text-white/40 font-mono">
              Form gönderiminiz şifrelenir. ~24 saat içinde dönüş.
            </p>
            <button
              type="submit"
              disabled={sent}
              data-cursor="hover"
              className={cn(
                "group inline-flex items-center gap-2 px-7 py-4 rounded-full font-medium text-sm md:text-base min-h-[48px] transition",
                sent
                  ? "bg-emerald-400/20 text-emerald-300 border border-emerald-400/30"
                  : "text-ink-950 bg-gradient-to-r from-neon-cyan via-white to-neon-purple bg-[length:200%_100%] hover:bg-[position:100%_0] glow-ring",
              )}
            >
              {sent ? "Gönderildi ✓" : "Mesajı Gönder"}
              {!sent && <Send size={16} className="transition-transform group-hover:translate-x-0.5" />}
            </button>
          </div>
        </motion.form>

        {/* contact cards */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <ContactCard
            Icon={Mail}
            label="Email"
            value="emirhanac12@gmail.com"
            href="mailto:emirhanac12@gmail.com"
          />
          <ContactCard
            Icon={MessageCircle}
            label="Discord"
            value="@emirhanatici"
            href="#"
          />
          <ContactCard
            Icon={Globe}
            label="Website"
            value="emirhanatici.xyz"
            href="https://emirhanatici.xyz"
          />

          <div className="mt-2 rounded-2xl glass-strong p-5 border-grad">
            <div className="text-xs font-mono uppercase tracking-widest text-white/40 mb-2">
              Müsaitlik
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex w-2.5 h-2.5">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-pulse-soft" />
                <span className="absolute inset-0 rounded-full bg-emerald-400 blur-md" />
              </span>
              <span className="text-white">Yeni projelere açık</span>
            </div>
            <p className="mt-2 text-sm text-white/55">
              Önümüzdeki dönem için 2 proje kontenjanı kaldı.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-xs font-mono uppercase tracking-widest text-white/50 mb-2">
      {children}
    </label>
  );
}

function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <Label>{label}</Label>
      <input
        {...props}
        className="w-full bg-white/5 border border-white/10 focus:border-neon-cyan/60 focus:bg-white/[0.07] rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 outline-none transition"
      />
    </div>
  );
}

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      data-cursor="hover"
      className={cn(
        "px-4 py-2 rounded-full text-sm font-mono border transition min-h-[44px]",
        active
          ? "bg-white text-ink-950 border-white"
          : "bg-white/5 text-white/70 border-white/10 hover:border-white/30 hover:text-white",
      )}
    >
      {children}
    </button>
  );
}

function ContactCard({
  Icon,
  label,
  value,
  href,
}: {
  Icon: React.ComponentType<{ size?: number; className?: string }>;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <a
      href={href}
      className="group relative rounded-2xl glass-strong p-5 border-grad flex items-center gap-4 hover:border-white/20 transition overflow-hidden"
      data-cursor="hover"
    >
      <div className="absolute -top-16 -right-16 w-40 h-40 rounded-full bg-gradient-to-br from-neon-cyan/30 to-neon-purple/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <span className="relative inline-flex w-11 h-11 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-neon-cyan">
        <Icon size={18} />
      </span>
      <div className="relative flex-1 min-w-0">
        <div className="text-[10px] font-mono uppercase tracking-widest text-white/40">
          {label}
        </div>
        <div className="text-sm md:text-base text-white truncate">{value}</div>
      </div>
      <ArrowUpRight
        size={18}
        className="relative text-white/40 group-hover:text-neon-cyan transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}
