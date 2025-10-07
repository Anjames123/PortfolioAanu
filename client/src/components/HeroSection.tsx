import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
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
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <ParticleBackground />
      
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium">Available for freelance</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-slide-up" data-testid="text-hero-title">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                  Aibade James
                </span>
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary to-purple-500 animate-gradient">
                  <AnimatedText 
                    texts={["Software Engineer", "Web Designer", "UI/UX Expert", "Full Stack Dev"]} 
                    className=""
                  />
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-slide-up" style={{ animationDelay: "0.1s" }} data-testid="text-hero-description">
                Crafting innovative digital experiences through clean code and stunning design.
                Specialized in full-stack development and modern UI/UX.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Button
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="group relative overflow-hidden"
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
                className="backdrop-blur-sm"
                data-testid="button-contact-hero"
              >
                Contact Me
              </Button>
            </div>
            
            <div className="flex items-center gap-4 animate-slide-up" style={{ animationDelay: "0.25s" }}>
              <Button
                variant="secondary"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/Aibade_James_Resume.pdf';
                  link.download = 'Aibade_James_Resume.pdf';
                  link.click();
                }}
                className="group"
                data-testid="button-download-resume"
              >
                <svg className="h-4 w-4 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download CV
              </Button>
            </div>

            <div className="flex items-center gap-4 pt-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-purple-500/20 rounded-xl animate-pulse-slow"></div>
              <img
                src={heroImage}
                alt="Professional workspace"
                className="relative rounded-xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-[1.02] transition-transform duration-500"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
