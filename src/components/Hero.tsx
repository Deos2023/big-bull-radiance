import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/heroImg2.jpg";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Dark Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-[var(--gradient-primary)] mix-blend-overlay opacity-80">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
            <div
              className="absolute bottom-20 right-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
          </div>
        </div>
      </div>

      {/* Bull Silhouette */}
      <div className="absolute right-10 top-1/4 opacity-15 animate-pulse-glow">
        <TrendingUp className="w-96 h-96 text-accent" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 mt-10 px-6 py-3 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
            <Shield className="w-5 h-5 text-accent animate-glow" />
            <span className="text-accent font-semibold">
              Trusted Financial Partner
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Big Bull Investment
          </h1>

          <p
            className="text-2xl md:text-3xl text-white/90 mb-8 animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your Gateway to Wealth & Wellness
          </p>

          <div
            className="flex flex-col items-center gap-4 mb-12 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-xl text-accent font-semibold backdrop-blur-sm bg-black/20 px-6 py-3 rounded-full">
              Mutual Funds | Health Insurance | Financial Planning
            </p>
            <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          <div
            className="flex flex-col md:flex-row items-center justify-center gap-6 animate-scale-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="tel:9088674067">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-background font-bold px-8 py-6 text-lg rounded-full shadow-[var(--shadow-elegant)] hover:shadow-[var(--glow-gold-strong)] transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now: 9088674067
              </Button>
            </a>
            <a href="mailto:biswasfinancial@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent/50 text-white hover:bg-accent/10 font-semibold px-8 py-6 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent"
              >
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/80 to-transparent" />
    </section>
  );
};

export default Hero;
