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
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/60">
              Client Testimonials
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              What clients say about working with me
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {testimonials.map((testimonial, idx) => (
            <ScrollReveal key={idx} delay={idx * 100}>
              <Card className="hover-elevate group relative overflow-hidden h-full">
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="pt-6 space-y-4 relative">
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground italic leading-relaxed">
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
