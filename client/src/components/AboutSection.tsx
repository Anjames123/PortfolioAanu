import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import aboutImage from "@assets/generated_images/Professional_headshot_for_about_section_c7a1cec0.png";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            About Me
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-about-subtitle">
            Passionate about building digital products that make a difference
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground" data-testid="text-about-bio-1">
              With over 5 years of experience in software development and web design, I specialize in
              creating seamless digital experiences that blend functionality with beautiful aesthetics.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-about-bio-2">
              My approach combines technical expertise in modern frameworks like React, Node.js, and
              TypeScript with a keen eye for design principles and user experience. I believe in writing
              clean, maintainable code and creating interfaces that users love.
            </p>
            <p className="text-lg text-muted-foreground" data-testid="text-about-bio-3">
              When I'm not coding or designing, you'll find me exploring new technologies, contributing
              to open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          <div className="flex justify-center lg:justify-end">
            <Card className="p-8 inline-block">
              <Avatar className="h-64 w-64">
                <AvatarImage src={aboutImage} alt="Professional headshot" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
