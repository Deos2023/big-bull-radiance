import { Button } from "@/components/ui/button";
import { TrendingUp, Shield, Phone, Mail } from "lucide-react";
import heroImg from "@/assets/heroImg2.jpg";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background with Mobile Optimization */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroImg})`,
          // Mobile-first background approach
          backgroundAttachment: 'scroll', // Remove fixed on mobile for better performance
          backgroundSize: 'cover',
          backgroundPosition: 'center center'

        }}
      >
        {/* Enhanced Overlay for Better Readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-accent/20" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-[var(--gradient-primary)] mix-blend-overlay opacity-80">
          <div className="absolute inset-0 opacity-20 md:opacity-30">
            {/* Smaller animated elements for mobile */}
            <div className="absolute top-10 left-4 w-48 h-48 md:top-20 md:left-10 md:w-72 md:h-72 bg-accent/30 rounded-full blur-2xl md:blur-3xl animate-float" />
            <div
              className="absolute bottom-10 right-4 w-56 h-56 md:bottom-20 md:right-10 md:w-96 md:h-96 bg-primary/20 rounded-full blur-2xl md:blur-3xl animate-float"
              style={{ animationDelay: "1s" }}
            />
            {/* Additional mobile-only element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-primary/10 rounded-full blur-xl md:hidden animate-float" style={{ animationDelay: "0.5s" }} />
          </div>
        </div>
      </div>

      {/* Bull Silhouette - Responsive Sizing */}
      <div className="absolute right-2 top-1/4 opacity-10 md:opacity-15 animate-pulse-glow md:right-10">
        <TrendingUp className="w-48 h-48 md:w-96 md:h-96 text-accent" strokeWidth={0.5} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <div className="animate-fade-in-up">
          {/* Trust Badge - Mobile Optimized */}
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 mt-4 md:mt-10 px-4 py-2 md:px-6 md:py-3 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
            <Shield className="w-4 h-4 md:w-5 md:h-5 text-accent animate-glow" />
            <span className="text-accent font-semibold text-sm md:text-base">
              Trusted Financial Partner
            </span>
          </div>

          {/* Main Heading - Mobile Responsive */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent animate-shimmer bg-[length:200%_auto]">
            Big Bull <span className="block sm:inline">Investment</span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8 animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Your Gateway to Wealth & Wellness
          </p>

          {/* Services */}
          <div
            className="flex flex-col items-center gap-3 md:gap-4 mb-8 md:mb-12 animate-fade-in px-2"
            style={{ animationDelay: "0.4s" }}
          >
            <p className="text-sm sm:text-base md:text-xl text-accent font-semibold backdrop-blur-sm bg-black/20 px-4 py-2 md:px-6 md:py-3 rounded-full text-center">
              Mutual Funds | Health Insurance <span className="block sm:inline">| Financial Planning</span>
            </p>
            <div className="h-1 w-24 md:w-32 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
          </div>

          {/* CTA Buttons - Mobile Optimized */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-scale-in px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <a href="tel:9088674067" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-background font-bold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full shadow-[var(--shadow-elegant)] hover:shadow-[var(--glow-gold-strong)] transition-all duration-300 hover:scale-105"
              >
                <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Call: 9088674067
              </Button>
            </a>
            <a href="mailto:biswasfinancial@gmail.com" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-accent/50 text-white hover:bg-accent/10 font-semibold px-6 py-5 md:px-8 md:py-6 text-base md:text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-accent"
              >
                <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Email Us
              </Button>
            </a>
          </div>

          {/* Additional Mobile-Only Info */}
          <div className="mt-8 md:hidden animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
              <div className="text-center p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="text-accent font-bold text-sm">8+ Years</div>
                <div className="text-white/70 text-xs">Experience</div>
              </div>
              <div className="text-center p-2 bg-white/5 rounded-lg border border-white/10">
                <div className="text-accent font-bold text-sm">500+</div>
                <div className="text-white/70 text-xs">Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Overlay - Enhanced for Mobile */}
      <div className="absolute bottom-0 left-0 right-0 h-24 md:h-32 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

      {/* Scroll Indicator for Desktop */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
};

export default Hero;