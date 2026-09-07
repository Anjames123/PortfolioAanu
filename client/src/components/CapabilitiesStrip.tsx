import { ArrowUpRight, Sparkles } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const capabilities = ["Strategy", "Interface", "Engineering", "Refinement"];

export default function CapabilitiesStrip() {
  return (
    <section className="relative overflow-hidden border-y border-border/70 bg-card/45">
      <div className="container relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-12">
        <ScrollReveal>
          <div className="grid items-center gap-8 lg:grid-cols-[1.1fr_.9fr]">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <p className="section-kicker mb-3">The AJ standard</p>
                <p className="max-w-2xl text-2xl font-semibold leading-tight tracking-[-.03em] md:text-3xl">
                  Make it useful. Make it <span className="text-primary">feel inevitable.</span>
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-8 gap-y-3 border-l border-border/70 pl-6 md:grid-cols-4 lg:border-l-0 lg:pl-0">
              {capabilities.map((capability, index) => (
                <div
                  key={capability}
                  className="group flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="font-mono text-[10px] text-primary/70">0{index + 1}</span>
                  <span>{capability}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}