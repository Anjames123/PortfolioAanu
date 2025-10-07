import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md"
            data-testid="button-logo"
          >
            Portfolio
          </button>

          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              data-testid="link-contact"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              data-testid="button-theme-toggle"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </Button>

            <Button
              size="icon"
              variant="ghost"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>

            <Button
              onClick={() => scrollToSection("contact")}
              className="hidden md:flex"
              data-testid="button-contact-cta"
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="flex flex-col gap-4 mt-6 md:hidden" data-testid="mobile-menu">
            <button
              onClick={() => scrollToSection("about")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-link-contact"
            >
              Contact
            </button>
            <Button
              onClick={() => scrollToSection("contact")}
              className="mt-2"
              data-testid="mobile-button-contact"
            >
              Get in Touch
            </Button>
          </nav>
        )}
      </div>
    </header>
  );
}
