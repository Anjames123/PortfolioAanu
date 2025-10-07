import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "border-b bg-background/95 backdrop-blur-lg shadow-sm" 
          : "border-b border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold tracking-tight hover-elevate active-elevate-2 px-2 py-1 rounded-md bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent transition-all hover:scale-105"
            data-testid="button-logo"
          >
            Portfolio
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-sm text-muted-foreground hover:text-foreground transition-all hover:scale-105 capitalize relative group"
                data-testid={`link-${section}`}
              >
                {section}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              size="icon"
              variant="ghost"
              onClick={toggleTheme}
              className="hover:scale-110 transition-transform"
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
              className="md:hidden hover:scale-110 transition-transform"
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
              className="hidden md:flex group relative overflow-hidden"
              data-testid="button-contact-cta"
            >
              <span className="relative z-10">Get in Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav 
            className="flex flex-col gap-4 mt-6 md:hidden animate-slide-up" 
            data-testid="mobile-menu"
          >
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="text-left text-sm text-muted-foreground hover:text-foreground transition-colors py-2 capitalize hover-elevate rounded px-2"
                data-testid={`mobile-link-${section}`}
              >
                {section}
              </button>
            ))}
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
