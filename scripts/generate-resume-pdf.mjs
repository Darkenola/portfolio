import fs from "node:fs";
import path from "node:path";

import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

const outputPath = path.join(process.cwd(), "public", "emirhan-atici-resume.pdf");

const pageWidth = 595.28;
const pageHeight = 841.89;
const marginX = 52;
const topMargin = 64;
const bottomMargin = 56;
const contentWidth = pageWidth - marginX * 2;

const palette = {
  background: rgb(0.047, 0.055, 0.08),
  panel: rgb(0.078, 0.094, 0.133),
  line: rgb(0.18, 0.22, 0.31),
  text: rgb(0.93, 0.95, 0.98),
  muted: rgb(0.63, 0.68, 0.75),
  accent: rgb(0.56, 0.84, 0.99),
  accentSoft: rgb(0.18, 0.28, 0.38),
};

function wrapText(text, font, size, maxWidth) {
  const words = text.split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const nextLine = line ? `${line} ${word}` : word;
    const width = font.widthOfTextAtSize(nextLine, size);

    if (width <= maxWidth || !line) {
      line = nextLine;
      continue;
    }

    lines.push(line);
    line = word;
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

function drawParagraph(page, text, x, y, options) {
  const { font, size, color, lineHeight, maxWidth } = options;
  const lines = wrapText(text, font, size, maxWidth);
  let cursorY = y;

  for (const line of lines) {
    page.drawText(line, { x, y: cursorY, size, font, color });
    cursorY -= lineHeight;
  }

  return cursorY;
}

function drawBulletList(page, items, x, y, options) {
  const { font, size, color, lineHeight, maxWidth, bulletColor } = options;
  let cursorY = y;

  for (const item of items) {
    page.drawCircle({
      x: x + 4,
      y: cursorY + 4,
      size: 2.5,
      color: bulletColor,
    });

    const lines = wrapText(item, font, size, maxWidth - 18);
    let lineY = cursorY;

    for (const line of lines) {
      page.drawText(line, {
        x: x + 16,
        y: lineY,
        size,
        font,
        color,
      });
      lineY -= lineHeight;
    }

    cursorY = lineY - 4;
  }

  return cursorY;
}

function drawSectionHeading(page, label, x, y, fonts) {
  page.drawText(label.toUpperCase(), {
    x,
    y,
    size: 10,
    font: fonts.medium,
    color: palette.accent,
  });
  page.drawLine({
    start: { x, y: y - 7 },
    end: { x: x + 86, y: y - 7 },
    thickness: 1,
    color: palette.line,
  });

  return y - 24;
}

async function buildResumePdf() {
  const pdf = await PDFDocument.create();
  pdf.setTitle("Emirhan Atici Resume");
  pdf.setAuthor("Emirhan / Darkenola");
  pdf.setSubject("Software developer resume");
  pdf.setKeywords([
    "Emirhan",
    "Darkenola",
    "Software Developer",
    "Next.js",
    "Backend Systems",
    "Automation",
  ]);

  const regular = await pdf.embedFont(StandardFonts.Helvetica);
  const medium = await pdf.embedFont(StandardFonts.HelveticaBold);
  const italic = await pdf.embedFont(StandardFonts.HelveticaOblique);

  const page = pdf.addPage([pageWidth, pageHeight]);
  page.drawRectangle({
    x: 0,
    y: 0,
    width: pageWidth,
    height: pageHeight,
    color: palette.background,
  });

  page.drawRectangle({
    x: marginX - 18,
    y: pageHeight - 174,
    width: contentWidth + 36,
    height: 124,
    color: palette.panel,
    opacity: 0.92,
    borderColor: palette.line,
    borderWidth: 1,
    borderOpacity: 0.65,
  });

  page.drawCircle({
    x: pageWidth - 110,
    y: pageHeight - 112,
    size: 44,
    color: palette.accentSoft,
    opacity: 0.55,
  });

  let y = pageHeight - topMargin;

  page.drawText("EMIRHAN", {
    x: marginX,
    y,
    size: 26,
    font: medium,
    color: palette.text,
  });
  y -= 30;

  page.drawText("Darkenola  |  Software Developer", {
    x: marginX,
    y,
    size: 12,
    font: medium,
    color: palette.accent,
  });

  const contactItems = [
    "Email: emirhanac12@gmail.com",
    "Portfolio: emirhanatici.xyz",
    "GitHub: github.com/Darkenola",
    "LinkedIn: linkedin.com/in/darkenola",
  ];

  let contactY = pageHeight - topMargin - 2;
  for (const item of contactItems) {
    const width = regular.widthOfTextAtSize(item, 10);
    page.drawText(item, {
      x: pageWidth - marginX - width,
      y: contactY,
      size: 10,
      font: regular,
      color: palette.muted,
    });
    contactY -= 16;
  }

  y -= 34;
  y = drawParagraph(
    page,
    "Software developer focused on backend systems, automation, modern frontend engineering, and project-led growth through real builds. I enjoy turning ideas into practical software with strong structure, polished interfaces, and maintainable implementation detail.",
    marginX,
    y,
    {
      font: regular,
      size: 11,
      color: palette.text,
      lineHeight: 16,
      maxWidth: contentWidth - 130,
    },
  );

  y -= 16;
  y = drawSectionHeading(page, "Core Focus", marginX, y, { medium });

  y = drawBulletList(
    page,
    [
      "Backend workflows, service logic, data flow, and system reliability.",
      "Automation-oriented tooling that reduces repeated work and sharpens operational clarity.",
      "Responsive interfaces with strong hierarchy, clean spacing, and premium presentation.",
      "Continuous learning through documentation, iteration, refactoring, and real project delivery.",
    ],
    marginX,
    y,
    {
      font: regular,
      size: 10.5,
      color: palette.text,
      lineHeight: 14,
      maxWidth: contentWidth,
      bulletColor: palette.accent,
    },
  );

  y -= 6;
  y = drawSectionHeading(page, "Selected Projects", marginX, y, { medium });

  const projectBlocks = [
    {
      title: "Darkenola Portfolio",
      stack: "Next.js, TypeScript, Tailwind CSS, Framer Motion",
      text: "A premium personal brand portfolio built with App Router, localized EN/TR routing, structured case studies, polished motion, and a refined dark visual system.",
    },
    {
      title: "FocusFlow Productivity",
      stack: "Next.js, Node.js, JavaScript",
      text: "A productivity-focused workspace concept designed around daily planning, attention management, and cleaner task execution with a serious product feel.",
    },
    {
      title: "Automation Control Dashboard",
      stack: "Node.js, JavaScript, GitHub, Linux",
      text: "A dashboard concept for monitoring automation jobs, workflow health, and system-level signals with an emphasis on visibility and operational flow.",
    },
  ];

  for (const block of projectBlocks) {
    page.drawText(block.title, {
      x: marginX,
      y,
      size: 11.5,
      font: medium,
      color: palette.text,
    });
    y -= 15;

    page.drawText(block.stack, {
      x: marginX,
      y,
      size: 9.5,
      font: italic,
      color: palette.muted,
    });
    y -= 15;

    y = drawParagraph(page, block.text, marginX, y, {
      font: regular,
      size: 10.2,
      color: palette.text,
      lineHeight: 14,
      maxWidth: contentWidth,
    });
    y -= 10;
  }

  y -= 2;
  y = drawSectionHeading(page, "Technology", marginX, y, { medium });

  const leftColumnX = marginX;
  const rightColumnX = marginX + contentWidth / 2 + 8;
  const columnWidth = contentWidth / 2 - 12;
  let leftY = y;
  let rightY = y;

  const leftGroups = [
    "Languages: Python, Java, C, C++, C#, JavaScript",
    "Frontend: HTML5, CSS3, Next.js",
  ];
  const rightGroups = [
    "Backend / Runtime: Node.js",
    "Tools: Git, GitHub, Linux, VS Code",
  ];

  for (const group of leftGroups) {
    leftY = drawParagraph(page, group, leftColumnX, leftY, {
      font: regular,
      size: 10.5,
      color: palette.text,
      lineHeight: 15,
      maxWidth: columnWidth,
    });
    leftY -= 10;
  }

  for (const group of rightGroups) {
    rightY = drawParagraph(page, group, rightColumnX, rightY, {
      font: regular,
      size: 10.5,
      color: palette.text,
      lineHeight: 15,
      maxWidth: columnWidth,
    });
    rightY -= 10;
  }

  y = Math.min(leftY, rightY) - 4;
  y = drawSectionHeading(page, "Development Approach", marginX, y, { medium });

  y = drawBulletList(
    page,
    [
      "Build around real use cases, not decorative demos.",
      "Prefer maintainable structure, readable code, and clear technical tradeoffs.",
      "Use iteration to improve both product quality and engineering discipline.",
    ],
    marginX,
    y,
    {
      font: regular,
      size: 10.5,
      color: palette.text,
      lineHeight: 14,
      maxWidth: contentWidth,
      bulletColor: palette.accent,
    },
  );

  page.drawLine({
    start: { x: marginX, y: bottomMargin + 18 },
    end: { x: pageWidth - marginX, y: bottomMargin + 18 },
    thickness: 1,
    color: palette.line,
  });

  page.drawText("emirhanatici.xyz", {
    x: marginX,
    y: bottomMargin,
    size: 10,
    font: medium,
    color: palette.accent,
  });

  const footerText = "Code. Build. Learn. Repeat.";
  const footerWidth = regular.widthOfTextAtSize(footerText, 10);
  page.drawText(footerText, {
    x: pageWidth - marginX - footerWidth,
    y: bottomMargin,
    size: 10,
    font: regular,
    color: palette.muted,
  });

  const pdfBytes = await pdf.save();
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, pdfBytes);
}

buildResumePdf().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
