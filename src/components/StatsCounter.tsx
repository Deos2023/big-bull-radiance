import { useEffect, useRef, useState } from "react";
import { Users, Calendar, TrendingUp, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

interface Stat {
  icon: any;
  value: number;
  label: string;
  suffix: string;
}

const stats: Stat[] = [
  { icon: Users, value: 250, label: "Satisfied Clients", suffix: "+" },
  { icon: Calendar, value: 8, label: "Years of Experience", suffix: "+" },
  { icon: TrendingUp, value: 50, label: "Investment Plans Managed", suffix: "+" },
  { icon: Heart, value: 100, label: "Health Policies Secured", suffix: "+" },
];

const CountUpAnimation = ({ end, duration = 2000, suffix }: { end: number; duration?: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let startTime: number | null = null;
          const animate = (currentTime: number) => {
            if (!startTime) startTime = currentTime;
            const progress = Math.min((currentTime - startTime) / duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * end));

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(end);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration, hasAnimated]);

  return (
    <div ref={elementRef} className="text-5xl md:text-6xl font-bold text-accent tabular-nums">
      {count}{suffix}
    </div>
  );
};

const StatsCounter = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.05),transparent_50%)]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
            Our Track Record
          </h2>
          <p className="text-xl text-muted-foreground">
            Numbers that speak for themselves
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.label}
                className="group bg-card/40 backdrop-blur-lg border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-[var(--glow-gold)] animate-fade-in-up hover:scale-105"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="p-8 text-center space-y-4">
                  <div className="inline-flex p-4 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors">
                    <Icon className="w-10 h-10 text-accent group-hover:animate-pulse" />
                  </div>
                  <CountUpAnimation end={stat.value} suffix={stat.suffix} />
                  <p className="text-lg text-muted-foreground font-medium group-hover:text-foreground transition-colors">
                    {stat.label}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
