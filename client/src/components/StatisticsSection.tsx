import { useEffect, useRef, useState } from "react";
import { Award, Users, Code, Trophy } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

interface Stat {
  icon: typeof Award;
  value: number;
  suffix: string;
  label: string;
  color: string;
}

const stats: Stat[] = [
  { icon: Code, value: 50, suffix: "+", label: "Projects Completed", color: "from-blue-500 to-cyan-500" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients", color: "from-purple-500 to-pink-500" },
  { icon: Award, value: 5, suffix: "+", label: "Years Experience", color: "from-green-500 to-emerald-500" },
  { icon: Trophy, value: 15, suffix: "+", label: "Awards Won", color: "from-orange-500 to-red-500" },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const steps = 60;
          const increment = value / steps;
          let current = 0;

          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-4xl md:text-5xl font-bold">
      {count}
      {suffix}
    </div>
  );
}

export default function StatisticsSection() {
  return (
    <section className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10"></div>
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Achievements in Numbers
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Proven track record of delivering excellence
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="text-center p-6 rounded-xl bg-card hover-elevate group relative overflow-hidden">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  <div className={`inline-flex p-4 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-10 mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
