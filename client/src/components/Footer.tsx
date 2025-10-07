import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
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
    <footer className="border-t py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Portfolio</h3>
            <p className="text-muted-foreground text-sm">
              Building digital experiences with passion and precision.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection("about")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-about"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-skills"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-projects"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-contact"
              >
                Contact
              </button>
            </nav>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-github"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="footer-link-email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © 2024 Portfolio. Designed & Built with passion
          </p>
          <Button
            size="icon"
            variant="outline"
            onClick={scrollToTop}
            data-testid="button-scroll-top"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
