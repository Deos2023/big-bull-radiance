import React from 'react'
import { Card } from "@/components/ui/card";
import { TrendingUp, Shield, Target } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Mutual Funds",
      description: "Expert guidance on equity, debt, and hybrid mutual funds for wealth creation",
      features: ["SIP Planning", "Portfolio Management", "Risk Assessment"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Health Insurance",
      description: "Comprehensive health insurance plans for family and individual protection",
      features: ["Family Floater", "Critical Illness", "Senior Citizen"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Financial Planning",
      description: "Personalized financial roadmaps for your short and long-term goals",
      features: ["Goal Planning", "Retirement", "Tax Saving"]
    }
  ];

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive financial solutions tailored to your unique needs and aspirations
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-all">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature, i) => (
                  <li key={i} className="text-sm text-accent">✓ {feature}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services
