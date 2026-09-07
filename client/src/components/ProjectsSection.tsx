import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProjectDetailModal from "./ProjectDetailModal";

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
    longDescription: "A comprehensive e-commerce platform built with modern technologies to deliver seamless shopping experiences. Features include real-time inventory management, secure payment processing, and responsive design.",
    challenge: "Building a scalable e-commerce solution that handles high traffic, processes secure payments, and manages complex inventory in real-time.",
    solution: "Implemented a microservices architecture using React for the frontend and Node.js for the backend. Integrated Stripe for secure payment processing and PostgreSQL for robust data management.",
    outcome: "Successfully launched platform serving 10,000+ users with 99.9% uptime. Reduced page load time by 40% and increased conversion rate by 25%.",
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
    title: "K-Style AI Beauty",
    category: "Full Stack",
    description: "AI-powered beauty platform for personalized color analysis and K-drama styling recommendations",
    image: kStyleAiImg,
    tags: ["Python", "TensorFlow", "React", "Computer Vision"],
  },
  {
    id: 10,
    title: "ChatPyBot",
    category: "Full Stack",
    description: "Multi-LLM chatbot with Streamlit UI supporting OpenAI, Anthropic, and Gemini APIs with SQLite storage",
    image: aiChatbotImg,
    tags: ["Python", "Streamlit", "SQLAlchemy", "Multi-AI"],
  },
];

const categories = ["All", "Full Stack", "Web Design", "Mobile"];

export default function ProjectsSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handleProjectClick = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="projects" className="relative overflow-hidden py-24 md:py-36">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent"></div>
        
        <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-5">Selected work / 01—09</p>
              <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-6xl" data-testid="text-projects-title">
                Work that moves<br /><span className="text-primary">ideas forward.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-1" data-testid="text-projects-subtitle">
              A selection of products and interfaces designed to be useful, memorable, and beautifully engineered.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="mb-12 flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full px-4 text-xs uppercase tracking-[0.12em] transition-all hover:-translate-y-0.5"
                data-testid={`button-filter-${category.toLowerCase().replace(" ", "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} delay={idx * 100} className={idx === 0 ? "lg:col-span-2" : ""}>
              <Card 
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border-border/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/10 ${idx === 0 ? "lg:grid lg:grid-cols-[1.35fr_1fr]" : ""}`}
                onClick={() => handleProjectClick(project)}
                data-testid={`card-project-${project.id}`}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-purple-600 rounded-xl blur opacity-0 group-hover:opacity-20 transition duration-500"></div>
                <div className="relative bg-card rounded-xl overflow-hidden">
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className={`w-full object-cover transition-all duration-700 group-hover:scale-105 ${idx === 0 ? "h-64 lg:h-full lg:min-h-[22rem]" : "h-56"}`}
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
                  <CardContent className={`space-y-4 p-6 md:p-7 ${idx === 0 ? "lg:flex lg:flex-col lg:justify-center" : ""}`}>
                    <div>
                      <div className="mb-4 flex items-center justify-between gap-4">
                        <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-primary">{project.category}</span>
                        <span className="text-xs font-mono text-muted-foreground">0{idx + 1}</span>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold tracking-tight transition-colors group-hover:text-primary" data-testid={`text-project-title-${project.id}`}>
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
    
    <ProjectDetailModal
      project={selectedProject}
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
    />
    </>
  );
}
