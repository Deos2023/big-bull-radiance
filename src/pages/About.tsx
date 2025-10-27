import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { Award, Users, Target, Heart, TrendingUp, Shield } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description: "We prioritize your financial security with transparent and honest guidance.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description: "Every investment strategy is tailored to help you achieve your unique financial goals.",
    },
    {
      icon: Heart,
      title: "Client-First Approach",
      description: "Your success is our success. We're dedicated to building lasting relationships.",
    },
  ];

  const achievements = [
    { icon: Users, count: "250+", label: "Satisfied Clients" },
    { icon: Award, count: "8+", label: "Years of Excellence" },
    { icon: TrendingUp, count: "50+", label: "Investment Plans" },
    { icon: Shield, count: "100+", label: "Health Policies" },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-primary)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              About <span className="text-primary">Big Bull Investment</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Empowering financial futures through expert guidance and personalized investment strategies
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  Founded with a vision to make quality financial planning accessible to everyone, Big Bull Investment has been serving the community for over 8 years. Led by Ujjal Biswas, our team combines expertise in mutual funds and health insurance to provide comprehensive financial solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that everyone deserves a secure financial future. Through personalized guidance and strategic planning, we've helped hundreds of families achieve their financial goals and protect what matters most.
                </p>
              </div>
              <div className="relative animate-scale-in" style={{ animationDelay: "0.2s" }}>
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 p-8 flex items-center justify-center">
                  <TrendingUp className="w-32 h-32 text-primary animate-glow" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Achievements</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="text-center group animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-20 h-20 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center mb-4 group-hover:shadow-[var(--glow-gold)] transition-all duration-300">
                  <achievement.icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{achievement.count}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Meet Our Advisor</h2>
            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in">
              <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-6">
                <Users className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Ujjal Biswas</h3>
              <p className="text-primary font-medium mb-4">
                Financial Advisor | Mutual Fund Distributor | Mediclaim Consultant
              </p>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                With over 8 years of experience in financial planning and investment management, Ujjal brings deep expertise in mutual funds and health insurance. His client-first approach and personalized strategies have helped countless families secure their financial futures.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default About;
