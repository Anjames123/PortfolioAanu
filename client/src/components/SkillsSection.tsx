import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Palette, Database, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Vue.js"],
  },
  {
    icon: Database,
    title: "Backend Development",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "GraphQL"],
  },
  {
    icon: Palette,
    title: "Design & UI/UX",
    skills: ["Figma", "Adobe XD", "Responsive Design", "User Research", "Prototyping"],
  },
  {
    icon: Wrench,
    title: "Tools & Other",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Agile/Scrum"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
            Skills & Expertise
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-skills-subtitle">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <Card key={idx} className="hover-elevate" data-testid={`card-skill-${idx}`}>
                <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                  <Icon className="h-5 w-5 text-primary" />
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIdx) => (
                      <Badge
                        key={skillIdx}
                        variant="secondary"
                        data-testid={`badge-skill-${idx}-${skillIdx}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
