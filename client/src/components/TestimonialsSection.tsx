import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO at TechStart",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    rating: 5,
    text: "Outstanding work! The website exceeded our expectations. Professional, responsive, and delivered on time. Highly recommended for any web development project.",
  },
  {
    name: "Michael Chen",
    role: "Product Manager at InnovateCo",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    rating: 5,
    text: "Incredible attention to detail and design aesthetics. The final product was not only beautiful but also highly functional. A true professional!",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder of DesignHub",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    rating: 5,
    text: "Working with this developer was a game-changer for our business. They understood our vision and brought it to life with exceptional skill and creativity.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container relative mx-auto max-w-7xl px-5 md:px-8">
        <ScrollReveal>
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="section-kicker mb-5">Good company</p>
              <h2 className="display-type text-4xl font-bold tracking-[-.045em] md:text-6xl">
                Kind words from<br /><span className="text-primary">the other side.</span>
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground md:pb-1">
              The best projects are built together. Here’s what that collaboration can feel like.
            </p>
          </div>
        </ScrollReveal>

        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <Card className="group relative h-full overflow-hidden rounded-2xl border-border/70 bg-card/70 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="relative flex h-full flex-col space-y-4 p-6 md:p-7">
                  <div className="mb-2 flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="flex-1 text-base leading-relaxed text-muted-foreground">
                    "{testimonial.text}"
                  </p>
                  
                  <div className="flex items-center gap-3 pt-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
