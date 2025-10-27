import React from 'react'
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import bgImg from "@/assets/desk.jpeg";
const Testimonials = () => {
  const testimonials = [
    {
      name: "Rohit Sharma",
      role: "Business Owner",
      content: "Ujjal's guidance helped me secure my family's future with the right mutual funds and insurance.",
      rating: 5
    },
    {
      name: "Priya Patel",
      role: "IT Professional",
      content: "Excellent service! My portfolio has grown 40% in 2 years with their expert advice.",
      rating: 5
    },
    {
      name: "Amit Kumar",
      role: "Government Employee",
      content: "The health insurance plan recommended saved us during a medical emergency. Truly grateful!",
      rating: 5
    }
  ];

  return (
    <section className="py-20 relative bg-secondary/10 bg-fixed bg-cover bg-center" style={{backgroundImage:`url(${bgImg})`}}>
        <div className="absolute inset-0 bg-black/70" />
      <div className="container mx-auto px-4 z-10 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client Stories</h2>
          <p className="text-xl text-muted-foreground">What our valued clients say about us</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials
