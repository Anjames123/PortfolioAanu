import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles, MoveDown } from "lucide-react";
import heroImage from "@assets/generated_images/Professional_developer_workspace_hero_image_06defeaf.png";
import AnimatedText from "./AnimatedText";
import ParticleBackground from "./ParticleBackground";

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-grid relative flex min-h-screen items-center overflow-hidden pt-24">
      <ParticleBackground />
      
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_28%,hsl(var(--primary)/.16),transparent_32%),radial-gradient(circle_at_12%_75%,hsl(280_70%_65%/.08),transparent_28%)]"></div>
      <div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full border border-primary/10"></div>
      <div className="pointer-events-none absolute -right-12 top-36 h-48 w-48 rounded-full border border-primary/10"></div>
      <span className="pointer-events-none absolute -right-5 bottom-16 hidden select-none text-[18rem] font-black leading-none text-foreground/[0.025] lg:block">
        AJ
      </span>
      
      <div className="container relative z-10 mx-auto max-w-7xl px-5 py-20 md:px-8 lg:py-28">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.05fr_.95fr] lg:gap-20">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <div className="section-kicker animate-fade-in">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_4px_hsl(160_70%_45%/.12)]"></span>
                Available for select freelance work
              </div>
              
              <h1 className="display-type text-5xl font-bold leading-[.98] tracking-[-.055em] animate-slide-up md:text-7xl lg:text-[5.6rem]" data-testid="text-hero-title">
                <span className="block text-foreground">
                  Digital products
                </span>
                <span className="block text-primary">
                  with a pulse.
                </span>
                <span className="mt-3 block text-base font-mono font-medium tracking-[.18em] text-muted-foreground md:text-lg">
                  <Sparkles className="mr-2 inline-block h-4 w-4 text-primary" />
                  <AnimatedText 
                    texts={["Software Engineer", "Web Designer", "UI/UX Expert", "Full Stack Dev"]} 
                    className=""
                  />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }} data-testid="text-hero-description">
                I’m Ajibade James — a software engineer and designer turning complex ideas into clear, expressive web experiences that people enjoy using.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group relative h-12 overflow-hidden rounded-full px-6"
                data-testid="button-view-work"
              >
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="h-12 rounded-full px-6 backdrop-blur-sm"
                data-testid="button-contact-hero"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <Button
                variant="secondary"
                className="group"
                asChild
                data-testid="button-download-resume"
              >
                <a
                  href="/Ajibade_James_CV.pdf"
                  download="Ajibade_James_CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <svg className="h-4 w-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
                </a>
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-2 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://github.com/Anjames123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aanuoluwa-ajibade-744870261"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ajibadejames19@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <button
              onClick={() => scrollToSection("projects")}
              className="group mt-8 hidden items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary md:flex"
            >
              <MoveDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              Scroll to explore
            </button>
          </div>

          <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative mx-auto w-full max-w-xl group">
              <div className="absolute -inset-4 rounded-[2rem] bg-primary/10 blur-2xl transition duration-500 group-hover:bg-primary/20"></div>
              <div className="absolute -right-5 -top-5 z-20 rounded-2xl border border-border/70 bg-background/80 px-4 py-3 shadow-xl backdrop-blur-md">
                <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">Based in</span>
                <span className="mt-1 block text-sm font-semibold">Lagos, Nigeria</span>
              </div>
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-card p-2 shadow-2xl">
                <div className="absolute inset-2 z-10 rounded-[1.25rem] bg-gradient-to-t from-background/55 via-transparent to-transparent"></div>
              <img
                src={heroImage}
                alt="Professional workspace"
                className="relative aspect-[4/4.7] w-full rounded-[1.25rem] object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
                data-testid="img-hero"
              />
                <div className="absolute bottom-7 left-7 z-20 text-white">
                  <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/70">Currently crafting</p>
                  <p className="mt-1 text-lg font-semibold">Thoughtful digital experiences</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
