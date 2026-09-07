import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import aboutImage from "@assets/1769264934968_1788764500233.jpg";
import ScrollReveal from "./ScrollReveal";
import { Award, Code, Rocket } from "lucide-react";

const highlights = [
  { icon: Code, label: "5+ Years Experience", color: "text-primary" },
  { icon: Award, label: "50+ Projects Completed", color: "text-purple-500" },
  { icon: Rocket, label: "Clean Code Advocate", color: "text-blue-500" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60" data-testid="text-about-title">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-about-subtitle">
              Passionate about building digital products that make a difference
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <ScrollReveal delay={100}>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-bio-1">
                With over 5 years of experience in software development and web design, I specialize in
                creating seamless digital experiences that blend functionality with beautiful aesthetics.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-bio-2">
                My approach combines technical expertise in modern frameworks like React, Node.js, and
                TypeScript with a keen eye for design principles and user experience. I believe in writing
                clean, maintainable code and creating interfaces that users love.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-about-bio-3">
                When I'm not coding or designing, you'll find me exploring new technologies, contributing
                to open-source projects, or sharing knowledge with the developer community.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
                {highlights.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div key={idx} className="flex flex-col items-center text-center p-4 rounded-lg bg-muted/30 hover-elevate">
                      <Icon className={`h-8 w-8 mb-2 ${item.color}`} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="flex justify-center lg:justify-end">
              <Card className="p-8 inline-block hover-elevate relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <Avatar className="h-64 w-64 relative ring-4 ring-primary/10">
                  <AvatarImage src={aboutImage} alt="Ajibade James - Professional headshot" />
                  <AvatarFallback>AJ</AvatarFallback>
                </Avatar>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
