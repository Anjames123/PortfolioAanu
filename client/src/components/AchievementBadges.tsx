import { Badge } from "@/components/ui/badge";
import { Award, CheckCircle, Star, Zap } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const achievements = [
  { icon: Award, label: "AWS Certified", color: "from-orange-500 to-yellow-500" },
  { icon: CheckCircle, label: "React Expert", color: "from-blue-500 to-cyan-500" },
  { icon: Star, label: "Top Rated", color: "from-purple-500 to-pink-500" },
  { icon: Zap, label: "Fast Delivery", color: "from-green-500 to-emerald-500" },
  { icon: Award, label: "UI/UX Master", color: "from-indigo-500 to-purple-500" },
  { icon: CheckCircle, label: "Node.js Pro", color: "from-emerald-500 to-teal-500" },
];

export default function AchievementBadges() {
  return (
    <section className="relative overflow-hidden bg-muted/20 py-10">
      <div className="container mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <p className="shrink-0 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              Trusted tools & signals
            </p>
            <div className="flex flex-wrap gap-2 md:justify-end">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="group relative overflow-hidden rounded-full border-border/60 px-3 py-1.5 text-xs hover-elevate"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <Icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="relative">{achievement.label}</span>
                </Badge>
              );
            })}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
