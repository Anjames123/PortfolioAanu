import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["HTML", "JavaScript", "React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Python", "Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Tools & Other",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
    gradient: "from-orange-500 to-red-500",
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60" data-testid="text-skills-title">
              Skills & Expertise
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-skills-subtitle">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <Card className="hover-elevate group relative overflow-hidden" data-testid={`card-skill-${idx}`}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
                    <CardTitle className="text-xl">{category.title}</CardTitle>
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${category.gradient} bg-opacity-10`}>
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
