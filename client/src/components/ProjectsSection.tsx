import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

import ecommerceImg from "@assets/generated_images/E-commerce_project_mockup_1dfea28f.png";
import mobileAppImg from "@assets/generated_images/Mobile_app_project_mockup_235b9cef.png";
import dashboardImg from "@assets/generated_images/Analytics_dashboard_project_mockup_2dcfc278.png";
import portfolioImg from "@assets/generated_images/Portfolio_website_project_mockup_d42c0201.png";
import taskManagementImg from "@assets/generated_images/Task_management_app_mockup_736091a1.png";
import socialMediaImg from "@assets/generated_images/Social_media_platform_mockup_8ae26d3c.png";

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
];

const categories = ["All", "Full Stack", "Web Design", "Mobile"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-projects-subtitle">
            A selection of projects showcasing my development and design expertise
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover-elevate group" data-testid={`card-project-${project.id}`}>
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  data-testid={`img-project-${project.id}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <Button size="sm" variant="secondary" data-testid={`button-view-project-${project.id}`}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="font-bold text-lg mb-2" data-testid={`text-project-title-${project.id}`}>
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground" data-testid={`text-project-description-${project.id}`}>
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" data-testid={`badge-tag-${project.id}-${idx}`}>
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
