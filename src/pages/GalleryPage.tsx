import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import heroImg from "@/assets/heroImg2.jpg";
import { Phone, ArrowRight, Camera } from "lucide-react";

const GalleryPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Hero Section */}
      <section 
        className="pt-36 pb-20 px-4 relative overflow-hidden bg-fixed bg-center bg-cover" 
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold uppercase tracking-wider mb-6">
            <Camera className="w-4 h-4" />
            <span>Big Bull Radiance Highlights</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in text-white">
            Our Photo <span className="text-primary bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Gallery</span>
          </h1>

          <p className="text-xl text-slate-300 animate-fade-in-up max-w-2xl mx-auto leading-relaxed">
            Witness our commitment, client seminars, community engagement, and team milestones celebrating trust and financial excellence.
          </p>
        </div>
      </section>

      {/* Main Gallery Component */}
      <Gallery />

      {/* Call To Action Banner */}
      <section className="py-16 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-5xl">
          <div className="relative rounded-3xl p-10 md:p-14 overflow-hidden border border-primary/30 bg-gradient-to-r from-card via-secondary/40 to-card shadow-[var(--shadow-elegant)]">
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10" />
            
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-center md:text-left max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Ready to Start Your Wealth Journey?
                </h2>
                <p className="text-muted-foreground text-base leading-relaxed">
                  Join hundreds of satisfied investors and families who trust Big Bull Radiance for expert mutual fund distribution and health insurance.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
                <Button 
                  size="lg" 
                  onClick={() => navigate("/contact")}
                  className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-gold)] text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.location.href = "tel:9088674067"}
                  className="border-primary/40 text-foreground hover:bg-primary/10 font-semibold px-8 py-6 rounded-xl transition-all duration-300"
                >
                  <Phone className="w-5 h-5 mr-2 text-primary" />
                  9088674067
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default GalleryPage;
