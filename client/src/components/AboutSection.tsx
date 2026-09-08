import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import aboutImage from "@assets/aj_image_enhanced.jpg";
import ScrollReveal from "./ScrollReveal";
import { Award, Code, Rocket } from "lucide-react";

const highlights = [
  { icon: Code, label: "5+ Years Experience", color: "text-primary" },
  { icon: Award, label: "50+ Projects Completed", color: "text-purple-500" },
  { icon: Rocket, label: "Clean Code Advocate", color: "text-blue-500" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <p className="section-kicker mb-5">A little context</p>
            <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-6xl" data-testid="text-about-title">
              The person behind<br /><span className="text-primary">the pixels.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-about-subtitle">
              Passionate about building digital products that make a difference — and making the process feel clear, collaborative, and human.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.1fr_.9fr] lg:gap-24">
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <p className="text-xl font-medium leading-relaxed tracking-tight text-foreground md:text-2xl" data-testid="text-about-bio-1">
                With over 5 years of experience in software development and web design, I specialize in
                creating seamless digital experiences that blend functionality with beautiful aesthetics.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-about-bio-2">
                My approach combines technical expertise in modern frameworks like React, Node.js, and
                TypeScript with a keen eye for design principles and user experience. I believe in writing
                clean, maintainable code and creating interfaces that users love.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-about-bio-3">
                When I'm not coding or designing, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-1 gap-3 pt-5 sm:grid-cols-3">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="group rounded-2xl border border-border/70 bg-card/60 p-4 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5">
                      <Icon className={`mb-3 h-5 w-5 ${item.color} transition-transform group-hover:scale-110`} />
                      <span className="block text-xs font-medium leading-relaxed">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex justify-center lg:justify-end">
              <Card className="group relative inline-block rounded-[2rem] border-border/70 bg-card/80 p-3 shadow-2xl shadow-primary/5">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <Avatar className="relative h-72 w-64 rounded-[1.5rem] ring-1 ring-white/10 md:h-80 md:w-72">
                  <AvatarImage src={aboutImage} alt="Ajibade James - Professional headshot" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
                <div className="absolute bottom-7 left-7 right-7 rounded-xl border border-white/10 bg-background/75 px-4 py-3 backdrop-blur-md">
                  <p className="text-[10px] font-mono uppercase tracking-[0.18em] text-primary">Outside the screen</p>
                  <p className="mt-1 text-sm font-medium">Curious, collaborative, always learning.</p>
                </div>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
