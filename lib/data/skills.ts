export type SkillCategory = {
  title: string;
  kicker: string;
  skills: { name: string; level: number; note?: string }[];
  gradient: string;
};

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    kicker: "Interface · Motion · DX",
    gradient: "from-cyan-400/30 to-blue-500/30",
    skills: [
      { name: "Next.js", level: 95, note: "App Router, Edge, RSC" },
      { name: "React", level: 95 },
      { name: "TypeScript", level: 92 },
      { name: "Tailwind CSS", level: 96 },
      { name: "Framer Motion", level: 88 },
    ],
  },
  {
    title: "Backend",
    kicker: "API · Data · Auth",
    gradient: "from-blue-500/30 to-violet-500/30",
    skills: [
      { name: "Node.js", level: 88 },
      { name: "PHP", level: 80 },
      { name: "MySQL", level: 84 },
      { name: "REST API", level: 90 },
      { name: "Auth & Sessions", level: 86 },
    ],
  },
  {
    title: "Tools & Infra",
    kicker: "Ship · Host · Iterate",
    gradient: "from-violet-500/30 to-cyan-400/30",
    skills: [
      { name: "Vercel", level: 92 },
      { name: "cPanel", level: 86 },
      { name: "GitHub", level: 95 },
      { name: "Discord.js", level: 90 },
      { name: "Cloudflare", level: 78 },
    ],
  },
];

export const marqueeRow1 = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Node.js",
];
export const marqueeRow2 = [
  "PHP",
  "MySQL",
  "Discord.js",
  "REST API",
  "cPanel",
  "Vercel",
  "GitHub",
];
