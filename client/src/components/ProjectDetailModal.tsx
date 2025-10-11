import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, X } from "lucide-react";

interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  longDescription?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  liveUrl?: string;
  githubUrl?: string;
}

interface ProjectDetailModalProps {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, isOpen, onClose }: ProjectDetailModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto" data-testid={`modal-project-${project.id}`}>
        <DialogHeader>
          <DialogTitle className="text-2xl md:text-3xl font-bold flex items-start justify-between gap-4" data-testid={`modal-title-${project.id}`}>
            <span>{project.title}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
              data-testid={`button-close-modal-${project.id}`}
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogTitle>
          <DialogDescription className="text-base" data-testid={`modal-category-${project.id}`}>
            {project.category}
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-4">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-auto object-cover"
              data-testid={`modal-img-${project.id}`}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <Badge key={idx} variant="secondary" data-testid={`modal-badge-${project.id}-${idx}`}>
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-lg mb-2">Overview</h3>
              <p className="text-muted-foreground leading-relaxed" data-testid={`modal-description-${project.id}`}>
                {project.longDescription || project.description}
              </p>
            </div>

            {project.challenge && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Challenge</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`modal-challenge-${project.id}`}>
                  {project.challenge}
                </p>
              </div>
            )}

            {project.solution && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Solution</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`modal-solution-${project.id}`}>
                  {project.solution}
                </p>
              </div>
            )}

            {project.outcome && (
              <div>
                <h3 className="font-semibold text-lg mb-2">Outcome</h3>
                <p className="text-muted-foreground leading-relaxed" data-testid={`modal-outcome-${project.id}`}>
                  {project.outcome}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 pt-4 border-t">
            {project.liveUrl && (
              <Button asChild data-testid={`modal-button-live-${project.id}`}>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" asChild data-testid={`modal-button-github-${project.id}`}>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  View Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
