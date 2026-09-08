import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Clock, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import ScrollReveal from "./ScrollReveal";

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    message: "",
  });

  const contactMutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: async (response) => {
      const result = await response.json();
      toast({
        title: "Message sent!",
        description: result.message || "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    },
    onError: (error: any) => {
      toast({
        title: "Failed to send message",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-muted/30 py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-purple-500/5"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-14 max-w-2xl">
            <p className="section-kicker mb-5">Start a conversation</p>
            <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-6xl" data-testid="text-contact-title">
              Have a good idea?<br /><span className="text-primary">Let’s make it real.</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg" data-testid="text-contact-subtitle">
              Tell me what you’re building, where you’re stuck, or what you want to explore. I’ll get back to you within 24 hours.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-[1.05fr_.95fr]">
          <ScrollReveal delay={100}>
            <Card className="rounded-2xl border-border/70 bg-card/75 shadow-xl shadow-primary/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 tracking-tight">
                  <Send className="h-5 w-5 text-primary" />
                  Send a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      minLength={2}
                      required
                      className="transition-all focus:scale-[1.01]"
                      data-testid="input-name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="transition-all focus:scale-[1.01]"
                      data-testid="input-email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type</Label>
                    <Select
                      value={formData.projectType}
                      onValueChange={(value) => setFormData({ ...formData, projectType: value })}
                    >
                      <SelectTrigger id="projectType" className="transition-all focus:scale-[1.01]" data-testid="select-project-type">
                        <SelectValue placeholder="Select project type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="web-design">Web Design</SelectItem>
                        <SelectItem value="full-stack">Full Stack Project</SelectItem>
                        <SelectItem value="consultation">Consultation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      minLength={10}
                      required
                      className="transition-all focus:scale-[1.01]"
                      data-testid="input-message"
                    />
                    <p className="text-xs text-muted-foreground">
                      Please include at least 10 characters.
                    </p>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full group relative overflow-hidden" 
                    disabled={contactMutation.isPending}
                    data-testid="button-submit"
                  >
                    <span className="relative z-10">
                      {contactMutation.isPending ? "Sending..." : "Send Message"}
                    </span>
                    <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </ScrollReveal>

          <div className="space-y-6">
            <ScrollReveal delay={150}>
              <Card className="rounded-2xl border-border/70 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground" data-testid="text-email">
                        ajibadejames19@gmail.com
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="rounded-2xl border-border/70 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground" data-testid="text-location">
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={250}>
              <Card className="rounded-2xl border-border/70 bg-card/60 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5 group">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Response Time</h3>
                      <p className="text-muted-foreground" data-testid="text-response-time">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
