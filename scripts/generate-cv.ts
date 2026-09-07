import fs from "node:fs";
import path from "node:path";
import { jsPDF } from "jspdf";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  ImageRun,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

const resume = {
  name: "Ajibade James",
  headline: "Full-Stack Python Developer",
  contact: [
    "Ogbomosho, Oyo State, Nigeria",
    "07045642580",
    "ajibadejames19@gmail.com",
    "linkedin.com/in/aanuoluwa-ajibade-744870261",
    "portfolioaanu.onrender.com",
  ],
  summary:
    "Full-Stack Python Developer building web applications, APIs, data-driven interfaces, and AI-enabled products. Experienced with Python web frameworks, modern JavaScript frontends, relational and document databases, and practical deployment tooling.",
  skills: [
    {
      label: "Python Web",
      value:
        "Python, Django, Django REST Framework, Flask, FastAPI, Jinja2, Pydantic, SQLAlchemy, Alembic",
    },
    {
      label: "Frontend",
      value: "HTML, JavaScript, React, TypeScript, Next.js, Vue.js, Tailwind CSS",
    },
    {
      label: "Data and APIs",
      value:
        "REST APIs, GraphQL, PostgreSQL, MongoDB, SQLite, Redis, Celery",
    },
    {
      label: "Quality and Delivery",
      value: "Pytest, Gunicorn, Uvicorn, Git, Docker, AWS, CI/CD, Agile/Scrum",
    },
  ],
  projects: [
    {
      title: "ChatPyBot",
      description:
        "Built a multi-LLM chatbot with a Streamlit interface, support for OpenAI, Anthropic, and Gemini APIs, and SQLite persistence.",
      stack: "Python, Streamlit, SQLAlchemy, multi-AI APIs",
    },
    {
      title: "K-Style AI Beauty",
      description:
        "Developed an AI-powered beauty platform for personalized color analysis and styling recommendations using computer vision.",
      stack: "Python, TensorFlow, React, computer vision",
    },
    {
      title: "E-Commerce Platform",
      description:
        "Designed a full-stack commerce experience with inventory management, payment processing, responsive layouts, and data persistence.",
      stack: "React, Node.js, PostgreSQL, Stripe",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Created a business intelligence dashboard with interactive data visualizations and a responsive interface for exploring insights.",
      stack: "React, D3.js, Tailwind CSS",
    },
    {
      title: "Mobile Banking App",
      description:
        "Designed a secure fintech mobile experience with biometric authentication and analytics-focused user flows.",
      stack: "React Native, Firebase, TypeScript",
    },
    {
      title: "Task Management System",
      description:
        "Built a collaborative project-management tool with real-time updates and organized team workflows.",
      stack: "Vue.js, Express, WebSocket",
    },
    {
      title: "Social Media Platform",
      description:
        "Developed a community platform with content sharing, social features, and a data-driven backend.",
      stack: "React, GraphQL, MongoDB",
    },
    {
      title: "Job Portal",
      description:
        "Created a career platform for discovering opportunities with advanced search and application tracking.",
      stack: "PHP, JavaScript, HTML, MySQL",
    },
    {
      title: "Portfolio Website",
      description:
        "Built a creative portfolio experience for presenting digital work through responsive layouts and smooth animations.",
      stack: "Next.js, Framer Motion, Vercel",
    },
  ],
  education: [
    {
      school: "Federal University of Technology, Akure",
      detail: "Information Systems | 2022 - 2027",
    },
    {
      school: "ALX Software Engineering School",
      detail: "Computer Software Engineering | January 2022 - January 2023",
    },
  ],
};

const outputDir = path.resolve("client/public");
const profilePhotoPath = path.resolve("attached_assets/1769264934968_1788764500233.jpg");
if (!fs.existsSync(profilePhotoPath)) {
  throw new Error(`Profile photo not found: ${profilePhotoPath}`);
}
const profilePhoto = fs.readFileSync(profilePhotoPath);
fs.mkdirSync(outputDir, { recursive: true });

function renderPdf() {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const pageWidth = 612;
  const margin = 36;
  const contentWidth = pageWidth - margin * 2;
  const navy = [15, 23, 42] as const;
  const blue = [56, 189, 248] as const;
  let y = 36;

  doc.setFillColor(...navy);
  doc.rect(0, 0, pageWidth, 112, "F");
  doc.setDrawColor(...blue);
  doc.setLineWidth(1);
  doc.rect(516, 16, 60, 80);
  doc.addImage(profilePhoto.toString("base64"), "JPEG", 518, 18, 56, 76);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text(resume.name, margin, 48);
  doc.setTextColor(...blue);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(resume.headline, margin, 68);
  doc.setTextColor(226, 232, 240);
  doc.setFontSize(8.5);
  doc.text(resume.contact.join("  |  "), margin, 91, {
    maxWidth: 450,
  });

  y = 140;
  const addSection = (title: string) => {
    doc.setTextColor(...navy);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(title.toUpperCase(), margin, y);
    y += 5;
    doc.setDrawColor(...blue);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 16;
  };
  const addWrapped = (
    text: string,
    x: number,
    width: number,
    size = 9.5,
    leading = 12,
    color = [51, 65, 85] as const,
  ) => {
    doc.setTextColor(...color);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(size);
    const lines = doc.splitTextToSize(text, width) as string[];
    doc.text(lines, x, y);
    y += lines.length * leading;
  };

  addSection("Profile");
  addWrapped(resume.summary, margin, contentWidth, 9.5, 12);
  y += 5;

  addSection("Technical Skills");
  for (const skill of resume.skills) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.8);
    doc.setTextColor(...navy);
    doc.text(`${skill.label}:`, margin, y);
    const labelWidth = doc.getTextWidth(`${skill.label}: `);
    addWrapped(skill.value, margin + labelWidth, contentWidth - labelWidth, 8.8, 11);
    y += 1;
  }
  y += 4;

  addSection("Selected Project Experience");
  for (const project of resume.projects) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(...navy);
    doc.text(project.title, margin, y);
    y += 12;
    addWrapped(project.description, margin + 8, contentWidth - 8, 8.8, 11);
    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.2);
    doc.setTextColor(100, 116, 139);
    doc.text(`Stack: ${project.stack}`, margin + 8, y);
    y += 14;
  }

  addSection("Education");
  for (const item of resume.education) {
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.2);
    doc.setTextColor(...navy);
    doc.text(item.school, margin, y);
    y += 11;
    addWrapped(item.detail, margin + 8, contentWidth - 8, 8.8, 11);
    y += 2;
  }

  doc.setFont("helvetica", "normal");
  doc.setFontSize(7.5);
  doc.setTextColor(100, 116, 139);
  doc.text("Project-focused CV | References available on request", margin, 765);
  fs.writeFileSync(
    path.join(outputDir, "Ajibade_James_CV.pdf"),
    Buffer.from(doc.output("arraybuffer")),
  );
}

async function renderDocx() {
  const body = (text: string, options?: { bold?: boolean; italic?: boolean }) =>
    new TextRun({ text, size: 19, ...options });
  const sectionHeading = (text: string) =>
    new Paragraph({
      text,
      heading: HeadingLevel.HEADING_2,
      spacing: { before: 180, after: 80 },
    });

  const children: Paragraph[] = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [
        new ImageRun({
          data: profilePhoto,
          transformation: { width: 72, height: 72 },
        }),
      ],
      spacing: { after: 60 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: resume.name, bold: true, size: 34 })],
      spacing: { after: 40 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [new TextRun({ text: resume.headline, color: "168AAD", size: 22 })],
      spacing: { after: 40 },
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      children: [body(resume.contact.join(" | "))],
      spacing: { after: 160 },
    }),
    sectionHeading("Profile"),
    new Paragraph({ children: [body(resume.summary)] }),
    sectionHeading("Technical Skills"),
    ...resume.skills.map(
      (skill) =>
        new Paragraph({
          children: [body(`${skill.label}: `, { bold: true }), body(skill.value)],
          bullet: { level: 0 },
        }),
    ),
    sectionHeading("Selected Project Experience"),
    ...resume.projects.flatMap((project) => [
      new Paragraph({ children: [body(project.title, { bold: true })] }),
      new Paragraph({
        children: [body(`${project.description} Stack: ${project.stack}`)],
        bullet: { level: 0 },
      }),
    ]),
    sectionHeading("Education"),
    ...resume.education.map(
      (item) =>
        new Paragraph({
          children: [body(`${item.school} - ${item.detail}`)],
          bullet: { level: 0 },
        }),
    ),
  ];

  const document = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: { top: 540, right: 720, bottom: 540, left: 720 },
          },
        },
        children,
      },
    ],
  });
  const buffer = await Packer.toBuffer(document);
  fs.writeFileSync(path.join(outputDir, "Ajibade_James_CV.docx"), buffer);
}

await renderDocx();
renderPdf();
console.log("Generated Ajibade_James_CV.pdf and Ajibade_James_CV.docx");