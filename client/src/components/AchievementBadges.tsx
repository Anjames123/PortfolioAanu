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
    <section className="py-12 bg-muted/30 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon;
              return (
                <Badge
                  key={idx}
                  variant="secondary"
                  className="px-4 py-2 text-sm hover-elevate group relative overflow-hidden"
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <Icon className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
                  <span className="relative">{achievement.label}</span>
                </Badge>
              );
            })}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
