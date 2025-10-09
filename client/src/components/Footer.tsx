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
    <footer className="border-t py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Aibade James
            </h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              {["about", "skills", "projects", "contact"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block text-sm text-muted-foreground hover:text-primary transition-all hover:translate-x-1 capitalize"
                  data-testid={`footer-link-${section}`}
                >
                  {section}
                </button>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Anjames123"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="footer-link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:ajibadejames19@gmail.com"
                className="text-muted-foreground hover:text-primary transition-all hover:scale-110 transform"
                data-testid="footer-link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground flex items-center gap-2" data-testid="text-copyright">
            © 2025 Aibade James. Designed & Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and passion
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
