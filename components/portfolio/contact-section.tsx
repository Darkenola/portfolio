"use client";

import { type ChangeEvent, type FormEvent, useState } from "react";

import { ArrowUpRight, Download, FileText, Send } from "lucide-react";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionShell } from "@/components/ui/section-shell";
import {
  contactEmail,
  getContactInterests,
  getSocialLinks,
  resumeDownloadPath,
} from "@/lib/portfolio-data";
import type { Language } from "@/lib/i18n";

type ContactFormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialState: ContactFormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

export function ContactSection({ lang }: { lang: Language }) {
  const [form, setForm] = useState<ContactFormState>(initialState);
  const [feedback, setFeedback] = useState<string>("");
  const contactInterests = getContactInterests(lang);
  const socialLinks = getSocialLinks(lang);

  function updateField(
    field: keyof ContactFormState,
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setForm((current) => ({
      ...current,
      [field]: event.target.value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback(
        lang === "tr"
          ? "Lütfen önce isim, e-posta ve mesaj alanlarını doldur."
          : "Please complete name, email, and message first.",
      );
      return;
    }

    const subject = encodeURIComponent(
      lang === "tr"
        ? `${form.name.trim()} tarafından portfolyo iletişimi`
        : `Portfolio inquiry from ${form.name.trim()}`,
    );
    const body = encodeURIComponent(
      [
        `${lang === "tr" ? "İsim" : "Name"}: ${form.name.trim()}`,
        `Email: ${form.email.trim()}`,
        `${lang === "tr" ? "Şirket / Bağlam" : "Company / Context"}: ${
          form.company.trim() || (lang === "tr" ? "Belirtilmedi" : "Not provided")
        }`,
        "",
        form.message.trim(),
      ].join("\n"),
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setFeedback(
      lang === "tr"
        ? "E-posta taslağı mail uygulamanda hazırlandı."
        : "Your email draft has been prepared in your mail app.",
    );
  }

  return (
    <SectionShell id="contact" className="pb-20 sm:pb-24">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 shadow-[0_34px_120px_-58px_rgba(0,0,0,0.95)] backdrop-blur-2xl sm:p-8 lg:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(141,216,255,0.16),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.06),transparent_34%)]" />

            <div className="relative grid gap-10 xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] xl:items-start">
              <div className="min-w-0">
                <span className="inline-flex rounded-full border border-white/10 bg-black/30 px-4 py-2 font-mono text-[0.68rem] uppercase tracking-[0.32em] text-zinc-400">
                  {lang === "tr" ? "İletişim" : "Contact"}
                </span>
                <h2 className="text-balance mt-6 font-display text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-[3.8rem] lg:leading-[1.02]">
                  {lang === "tr"
                    ? "Birlikte net, kullanışlı ve gerçek bir şeyler üretelim."
                    : "Lets turn ideas into something sharp, useful, and real."}
                </h2>
                <p className="text-balance mt-5 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
                  {lang === "tr"
                    ? "İş birliği, ürün odaklı çalışmalar ve backend sistemler, otomasyon veya modern yazılım mühendisliği etrafındaki konuşmalar için açığım."
                    : "I am open to collaboration, thoughtful product work, and conversations around backend systems, automation, and modern software engineering."}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={resumeDownloadPath}
                    download
                    className="group inline-flex items-center justify-center gap-2 rounded-full border border-white/12 bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                  >
                    <Download className="size-4" />
                    <span>{lang === "tr" ? "CV İndir" : "Download CV"}</span>
                  </a>
                  <ButtonLink
                    href={`/resume${lang === "tr" ? "?lang=tr" : ""}`}
                    variant="secondary"
                    showArrow={false}
                  >
                    {lang === "tr" ? "CV Sayfas\u0131" : "Resume Page"}
                  </ButtonLink>
                </div>

                <div className="mt-8 rounded-[28px] border border-white/10 bg-black/30 p-5 sm:p-6">
                  <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                    {lang === "tr" ? "İlgi Alanları" : "Interested In"}
                  </p>
                  <ul className="mt-4 space-y-3">
                    {contactInterests.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-7 text-zinc-300"
                      >
                        <span className="mt-2 size-2 rounded-full bg-cyan-300" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 grid gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;

                    return (
                      <a
                        key={link.title}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open ${link.title} profile`}
                        className="group flex items-center justify-between gap-4 rounded-[24px] border border-white/10 bg-black/30 p-4 transition duration-300 hover:-translate-y-1 hover:border-white/[0.18] hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04]">
                            <Icon className="size-5 text-cyan-300" />
                          </div>
                          <div className="min-w-0">
                            <h3 className="text-lg font-semibold tracking-[-0.03em] text-white">
                              {link.title}
                            </h3>
                            <p className="mt-1 text-sm leading-6 text-zinc-400">
                              {link.subtitle}
                            </p>
                          </div>
                        </div>
                        <ArrowUpRight className="size-5 shrink-0 text-zinc-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" />
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-black/30 p-6 shadow-[0_28px_100px_-54px_rgba(0,0,0,0.95)] sm:p-7">
                <div className="flex items-center gap-3">
                  <div className="flex size-12 items-center justify-center rounded-[18px] border border-white/10 bg-white/[0.04]">
                    <Send className="size-5 text-cyan-300" />
                  </div>
                  <div>
                    <p className="font-mono text-[0.66rem] uppercase tracking-[0.3em] text-zinc-500">
                      {lang === "tr" ? "İletişim formu" : "Contact form"}
                    </p>
                    <p className="mt-1 text-sm text-zinc-400">
                      {lang === "tr"
                        ? `${contactEmail} adresine mail taslağı oluşturur`
                        : `Sends through your mail app to ${contactEmail}`}
                    </p>
                  </div>
                </div>

                <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
                  <Field
                    id="name"
                    label={lang === "tr" ? "İsim" : "Name"}
                    value={form.name}
                    onChange={(event) => updateField("name", event)}
                    placeholder={lang === "tr" ? "İsmin" : "Your name"}
                  />
                  <Field
                    id="email"
                    label="Email"
                    type="email"
                    value={form.email}
                    onChange={(event) => updateField("email", event)}
                    placeholder="you@example.com"
                  />
                  <Field
                    id="company"
                    label={lang === "tr" ? "Şirket / Bağlam" : "Company / Context"}
                    value={form.company}
                    onChange={(event) => updateField("company", event)}
                    placeholder={
                      lang === "tr"
                        ? "Şirket, proje veya rol"
                        : "Company, project, or role"
                    }
                  />
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-zinc-300"
                    >
                      {lang === "tr" ? "Mesaj" : "Message"}
                    </label>
                    <textarea
                      id="message"
                      value={form.message}
                      onChange={(event) => updateField("message", event)}
                      placeholder={
                        lang === "tr"
                          ? "Ne ürettiğini veya nasıl bir iş birliği düşündüğünü anlat."
                          : "Tell me what you are building or what kind of collaboration you have in mind."
                      }
                      rows={6}
                      className="w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-4 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-400/60"
                    />
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition duration-300 hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                    >
                      <Send className="size-4" />
                      <span>
                        {lang === "tr" ? "Mail Taslağı Aç" : "Open Email Draft"}
                      </span>
                    </button>
                    <a
                      href={`/resume${lang === "tr" ? "?lang=tr" : ""}`}
                      className="inline-flex items-center gap-2 text-sm text-zinc-400 transition hover:text-white"
                    >
                      <FileText className="size-4" />
                      <span>{lang === "tr" ? "CV sayfasını gör" : "View resume page"}</span>
                    </a>
                  </div>

                  {feedback ? (
                    <p className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                      {feedback}
                    </p>
                  ) : null}
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </SectionShell>
  );
}

function Field({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-300">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full rounded-[24px] border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-zinc-500 focus:border-cyan-400/60"
      />
    </div>
  );
}
