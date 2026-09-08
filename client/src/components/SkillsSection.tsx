import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Interfaces that feel fast, clear, and considered.",
    skills: ["HTML", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    description: "Reliable systems behind the experience.",
    skills: [
      "Python",
      "Django",
      "Django REST Framework",
      "Flask",
      "FastAPI",
      "Jinja2",
      "Pydantic",
      "SQLAlchemy",
      "Alembic",
      "REST APIs",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Celery",
      "Pytest",
      "Gunicorn",
      "Uvicorn",
      "PHP",
      "Node.js",
      "Express",
    ],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    description: "Visual language grounded in how people think.",
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Tools & Other",
    description: "The habits and tools that keep work moving.",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
    gradient: "from-orange-500 to-red-500",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="relative overflow-hidden bg-muted/30 py-24 md:py-36">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-5">The toolkit</p>
              <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-6xl" data-testid="text-skills-title">
                Many hats.<br /><span className="text-primary">One point of view.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-1" data-testid="text-skills-subtitle">
              Technologies and tools are only useful when they help turn a good idea into a better experience.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-2">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Card className="group relative overflow-hidden rounded-2xl border-border/70 bg-card/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5" data-testid={`card-skill-${idx}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <CardHeader className="flex flex-row items-start justify-between gap-4 space-y-0 pb-4">
                    <div>
                      <span className="mb-3 block text-[10px] font-mono uppercase tracking-[0.2em] text-primary/80">0{idx + 1}</span>
                      <CardTitle className="text-xl tracking-tight">{category.title}</CardTitle>
                      <p className="mt-2 text-sm text-muted-foreground">{category.description}</p>
                    </div>
                    <div className={`rounded-xl bg-gradient-to-br ${category.gradient} bg-opacity-10 p-3`}>
                      <Icon className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIdx) => (
                        <Badge
                          key={skillIdx}
                          variant="secondary"
                          className="hover-elevate transition-all hover:scale-105"
                          data-testid={`badge-skill-${idx}-${skillIdx}`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
