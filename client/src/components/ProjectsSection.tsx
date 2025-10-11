import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

import ecommerceImg from "@assets/generated_images/E-commerce_project_mockup_1dfea28f.png";
import mobileAppImg from "@assets/generated_images/Mobile_app_project_mockup_235b9cef.png";
import dashboardImg from "@assets/generated_images/Analytics_dashboard_project_mockup_2dcfc278.png";
import portfolioImg from "@assets/generated_images/Portfolio_website_project_mockup_d42c0201.png";
import taskManagementImg from "@assets/generated_images/Task_management_app_mockup_736091a1.png";
import socialMediaImg from "@assets/generated_images/Social_media_platform_mockup_8ae26d3c.png";
import jobPortalImg from "@assets/Screenshot 2025-08-08 212006_1760197174128.png";
import aiChatbotImg from "@assets/Screenshot 2025-10-11 164411_1760197483907.png";
import kStyleAiImg from "@assets/Screenshot 2025-07-27 093723_1760197688959.png";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    category: "Full Stack",
    description: "Modern e-commerce solution with real-time inventory and payment processing",
    image: ecommerceImg,
    tags: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: 2,
    title: "Mobile Banking App",
    category: "Mobile",
    description: "Secure fintech application with biometric authentication and analytics",
    image: mobileAppImg,
    tags: ["React Native", "Firebase", "TypeScript"],
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    category: "Web Design",
    description: "Business intelligence dashboard with interactive data visualization",
    image: dashboardImg,
    tags: ["React", "D3.js", "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Portfolio Website",
    category: "Web Design",
    description: "Creative portfolio showcasing artistic work with smooth animations",
    image: portfolioImg,
    tags: ["Next.js", "Framer Motion", "Vercel"],
  },
  {
    id: 5,
    title: "Task Management System",
    category: "Full Stack",
    description: "Collaborative project management tool with real-time updates",
    image: taskManagementImg,
    tags: ["Vue.js", "Express", "WebSocket"],
  },
  {
    id: 6,
    title: "Social Media Platform",
    category: "Full Stack",
    description: "Community-driven platform with content sharing and social features",
    image: socialMediaImg,
    tags: ["React", "GraphQL", "MongoDB"],
  },
  {
    id: 7,
    title: "Job Portal",
    category: "Full Stack",
    description: "Career platform for discovering job opportunities with advanced search and application tracking",
    image: jobPortalImg,
    tags: ["PHP", "JavaScript", "HTML", "MySQL"],
  },
  {
    id: 8,
    title: "AI Chatbot",
    category: "Full Stack",
    description: "Intelligent chatbot with multi-model AI support, conversation history, and context-aware responses",
    image: aiChatbotImg,
    tags: ["Python", "OpenAI", "Anthropic", "Flask"],
  },
  {
    id: 9,
    title: "K-Style AI Beauty",
    category: "Full Stack",
    description: "AI-powered beauty platform for personalized color analysis and K-drama styling recommendations",
    image: kStyleAiImg,
    tags: ["Python", "TensorFlow", "React", "Computer Vision"],
  },
];

const categories = ["All", "Full Stack", "Web Design", "Mobile"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60" data-testid="text-projects-title">
              Featured Projects
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-subtitle">
              A selection of projects showcasing my development and design expertise
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="transition-all hover:scale-105"
                data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100}>
              <Card className="overflow-hidden hover-elevate group relative" data-testid={`card-project-${project.id}`}>
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-card rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                      data-testid={`img-project-${project.id}`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-center pb-6 gap-2">
                      <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm" data-testid={`button-view-project-${project.id}`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View
                      </Button>
                      <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                    </div>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    <div>
                      <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors" data-testid={`text-project-title-${project.id}`}>
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                        {project.description}
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} variant="secondary" className="transition-transform hover:scale-105" data-testid={`badge-tag-${project.id}-${tagIdx}`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </div>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
