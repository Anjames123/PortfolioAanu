import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative overflow-hidden border-t py-16 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="mb-14 grid grid-cols-1 gap-12 md:grid-cols-[1.5fr_.75fr_.75fr]">
          <div>
            <p className="section-kicker mb-5">Let’s build what’s next</p>
            <h3 className="display-type max-w-md text-3xl font-bold tracking-[-.045em] md:text-4xl">
              Thoughtful work for <span className="text-primary">ambitious ideas.</span>
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Building digital experiences with passion, precision, and a little bit of curiosity.
            </p>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">Navigate</h3>
            <nav className="space-y-3">
              {["about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-sm capitalize text-muted-foreground transition-all hover:translate-x-1 hover:text-primary"
                  data-testid={`footer-link-${section}`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="mb-4 text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">Connect</h3>
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/Anjames123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open GitHub profile"
                className="rounded-full border border-border/70 p-2 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                data-testid="footer-link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/aanuoluwa-ajibade-744870261"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
                className="rounded-full border border-border/70 p-2 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ajibadejames19@gmail.com"
                aria-label="Send an email"
                className="rounded-full border border-border/70 p-2 text-muted-foreground transition-all hover:scale-110 hover:border-primary/40 hover:text-primary"
                data-testid="footer-link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="flex items-center gap-2 text-xs text-muted-foreground" data-testid="text-copyright">
            © 2026 Ajibade James. Designed & built with <Heart className="h-3.5 w-3.5 fill-primary text-primary" /> and intention
          </p>
          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            className="hover:scale-110 transition-transform group"
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-4 w-4 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
