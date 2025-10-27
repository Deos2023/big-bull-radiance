import { Award, Briefcase, Heart, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

const AdvisorProfile = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
            Meet Your Financial Guide
          </h2>
          <div className="h-1 w-24 bg-accent mx-auto rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto bg-card/40 backdrop-blur-lg border-accent/20 shadow-[var(--shadow-elegant)] hover:shadow-[var(--glow-gold)] transition-all duration-500 animate-scale-in">
          <div className="p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-4xl md:text-5xl font-bold text-accent mb-3">Ujjal Biswas</h3>
              <div className="flex flex-wrap justify-center gap-3 text-muted-foreground">
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <Award className="w-4 h-4 text-accent" />
                  Financial Advisor
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <Briefcase className="w-4 h-4 text-accent" />
                  Mutual Fund Distributor
                </span>
                <span className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                  <Heart className="w-4 h-4 text-accent" />
                  Mediclaim Consultant
                </span>
              </div>
            </div>

            <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-8" />

            <div className="space-y-4 text-center">
              <div className="flex items-center justify-center gap-3 text-lg">
                <MapPin className="w-5 h-5 text-accent" />
                <p className="text-muted-foreground">
                  105/1 Bidhan Nagar Road, Block A (Above ICICI Bank)
                  <br />
                  <span className="text-accent font-semibold">Kolkata 700067</span>
                </p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
              <p className="text-center text-foreground/90 leading-relaxed">
                With over 8 years of expertise in financial planning and wealth management, 
                I help individuals and families secure their financial future through strategic 
                investment planning and comprehensive health insurance solutions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AdvisorProfile;
