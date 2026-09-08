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
    <section className="relative overflow-hidden border-y border-border/60 bg-muted/20 py-20 md:py-28">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-4">By the numbers</p>
              <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-5xl">
                Built with purpose.
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground md:pb-1">
              A track record measured in shipped work, happy collaborators, and a lot of care.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border/70 bg-border/70 md:grid-cols-4">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <ScrollReveal key={idx} delay={idx * 100}>
                <div className="group relative overflow-hidden bg-card p-5 text-center transition-colors hover:bg-card/80 md:p-7">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                   <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${stat.color} bg-opacity-10 p-3 transition-transform group-hover:scale-110`}>
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
