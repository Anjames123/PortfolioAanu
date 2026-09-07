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
      <div className="container mx-auto max-w-7xl px-5 py-4 md:px-8">
        <div className="flex items-center justify-between gap-4">
          <button
            onClick={() => scrollToSection("hero")}
            className="group flex items-center gap-3 rounded-md px-1 py-1 text-left transition-transform hover:scale-[1.02]"
            data-testid="button-logo"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm font-black text-primary-foreground shadow-lg shadow-primary/20 transition-transform group-hover:rotate-6">
              AJ
            </span>
            <span className="hidden text-sm font-semibold tracking-tight sm:block">
              Ajibade James
              <span className="mt-0.5 block text-[10px] font-mono uppercase tracking-[0.22em] text-muted-foreground">
                Engineer / Designer
              </span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-7">
            {["about", "skills", "projects", "contact"].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className="group relative text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-foreground"
                data-testid={`link-${section}`}
              >
                {section}
                <span className="absolute -bottom-2 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
