import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import ProjectDetailModal from "./ProjectDetailModal";

import mobileAppImg from "@assets/generated_images/Mobile_app_project_mockup_235b9cef.png";
import portfolioImg from "@assets/generated_images/Portfolio_website_project_mockup_d42c0201.png";
import aiChatbotImg from "@assets/Screenshot 2025-10-11 164411_1760197483907.png";
import kStyleAiImg from "@assets/Screenshot 2025-07-27 093723_1760197688959.png";

const projects = [
  {
    id: 1,
    title: "Campus SafeWalk",
    category: "Full Stack",
    description: "A student safety platform for campus communities with live updates, secure accounts, and a React interface.",
    image: mobileAppImg,
    tags: ["React", "FastAPI", "PostgreSQL", "Socket.IO"],
    repoUrl: "https://github.com/Anjames123/Campus-SafeWalk",
    longDescription: "Campus SafeWalk pairs a React and TypeScript frontend with a Python FastAPI backend to help students move through campus with more confidence.",
    challenge: "Designing a safety product that feels calm and approachable while handling identity, live communication, and location-sensitive workflows.",
    solution: "Built a standalone frontend/backend architecture with JWT authentication, PostgreSQL persistence, and Socket.IO-powered real-time updates.",
    outcome: "A full-stack safety experience with a clear path from sign-in to live campus support.",
  },
  {
    id: 2,
    title: "K-Style AI Beauty",
    category: "AI Product",
    description: "AI beauty companion for personal color analysis, styling, recommendations, and multilingual guidance.",
    image: kStyleAiImg,
    tags: ["React", "TypeScript", "Gemini", "PostgreSQL"],
    repoUrl: "https://github.com/Anjames123/KoreanBeautyTrends",
    longDescription: "K-Style AI Beauty brings personal color analysis, style recommendations, hair and lipstick guidance, and an AI beauty consultant into one responsive product.",
    challenge: "Making AI recommendations feel personal, culturally aware, and useful across different languages and beauty goals.",
    solution: "Combined a typed React experience with PostgreSQL-backed user data, role-based access, multilingual content, and cost-aware Gemini/Hugging Face integrations.",
    outcome: "A rich AI product concept with localization, analytics, tutorials, and a strong consumer-facing experience.",
  },
  {
    id: 3,
    title: "ChatPyBot",
    category: "AI Product",
    description: "A Streamlit chatbot that brings OpenAI, Anthropic, and Gemini models into one focused workspace.",
    image: aiChatbotImg,
    tags: ["Python", "Streamlit", "Multi-LLM", "SQLAlchemy"],
    repoUrl: "https://github.com/Anjames123/ChatPyBot",
    longDescription: "ChatPyBot is a multi-provider AI chatbot that lets users work with OpenAI, Anthropic, and Google Gemini from a single Streamlit interface.",
    challenge: "Creating a simple chat experience while keeping provider selection, configuration, and conversation persistence understandable.",
    solution: "Built a Python application with provider-specific clients, environment-based configuration, and SQLAlchemy-backed storage.",
    outcome: "A practical multi-model playground that keeps the interface simple while leaving room for different AI providers.",
  },
  {
    id: 4,
    title: "Greater Seeds Academy",
    category: "Web Design",
    description: "A warm, responsive school website for Greater Seeds Richmaris Academy in Kuje, Abuja.",
    image: portfolioImg,
    tags: ["PHP", "JavaScript", "CSS", "Responsive UI"],
    repoUrl: "https://github.com/Anjames123/SchoolPortal",
    longDescription: "A school website designed to introduce Greater Seeds Richmaris Academy, its programs, events, gallery, and contact information to families.",
    challenge: "Turning a lot of school information into an approachable experience that works equally well for parents and prospective students.",
    solution: "Created a responsive PHP site with a hero slider, section-based navigation, program content, events, gallery, and contact touchpoints.",
    outcome: "A clear digital front door for the school with an inviting, family-friendly presentation.",
  },
];

const categories = ["All", "Full Stack", "AI Product", "Web Design"];

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
              <p className="section-kicker mb-5">Selected work / 01—04</p>
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
                      <div className="absolute inset-0 flex items-end justify-center gap-2 bg-gradient-to-t from-background via-background/50 to-transparent pb-6 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <Button size="sm" variant="secondary" className="shadow-lg backdrop-blur-sm" data-testid={`button-view-project-${project.id}`}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                          Details
                      </Button>
                        {project.repoUrl && (
                          <Button
                            size="sm"
                            variant="secondary"
                            className="shadow-lg backdrop-blur-sm"
                            asChild
                            onClick={(event) => event.stopPropagation()}
                          >
                            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                              <Github className="mr-2 h-4 w-4" />
                              GitHub
                            </a>
                          </Button>
                        )}
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
