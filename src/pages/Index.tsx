import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdvisorProfile from "@/components/AdvisorProfile";
import Partners from "@/components/Partners";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />
      <Hero />
      <AdvisorProfile />
      <StatsCounter />
      <Partners />
      <Services />
      
      {/* Homepage Gallery Preview */}
      <div className="relative">
        <Gallery limit={8} />
        <div className="pb-16 text-center bg-gradient-to-b from-transparent to-background">
          <Button 
            onClick={() => navigate("/gallery")}
            size="lg"
            className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-gold)] text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Explore Full Gallery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>

      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
