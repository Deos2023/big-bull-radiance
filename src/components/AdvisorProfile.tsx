import { Award, Briefcase, Heart, MapPin, Star, Users, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import heroImg from "@/assets/about4.jpeg";

const AdvisorProfile = () => {
  return (
    <section className="py-12 md:py-20 px-4 sm:px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-8 md:mb-16 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
            Meet Your Financial Guide
          </h2>
          <div className="h-1 w-16 md:w-24 bg-accent mx-auto rounded-full" />
        </div>

        <Card className="max-w-6xl mx-auto bg-card/40 backdrop-blur-lg border-accent/20 shadow-[var(--shadow-elegant)] hover:shadow-[var(--glow-gold)] transition-all duration-500 animate-scale-in overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Image Section */}
            <div className="relative lg:h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[500px] xl:min-h-[600px] bg-gradient-to-br from-accent/10 to-primary/10">
              <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImg})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20" />
              
              {/* Professional Badge */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6">
                <div className="bg-background/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-accent/20">
                  <div className="flex items-center justify-between gap-2 sm:gap-4">
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground text-xs sm:text-sm">8+ Years</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                      <span className="font-semibold text-foreground text-xs sm:text-sm">500+ Clients</span>
                    </div>
                    <div className="flex items-center gap-1 sm:gap-2">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                      <span className="font-semibold text-foreground text-xs sm:text-sm">Available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12 flex flex-col justify-center">
              <div className="text-left mb-6 md:mb-8">
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-accent mb-3 md:mb-4">Ujjal Biswas</h3>
                
                {/* Professional Tags */}
                <div className="flex flex-wrap gap-2 md:gap-3 mb-4 md:mb-6">
                  <span className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20 text-xs md:text-sm font-medium">
                    <Award className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    Financial Advisor
                  </span>
                  <span className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20 text-xs md:text-sm font-medium">
                    <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    Mutual Fund Distributor
                  </span>
                  <span className="flex items-center gap-1 md:gap-2 px-3 py-1 md:px-4 md:py-2 bg-accent/10 rounded-full border border-accent/20 text-xs md:text-sm font-medium">
                    <Heart className="w-3 h-3 md:w-4 md:h-4 text-accent" />
                    Mediclaim Consultant
                  </span>
                </div>

                {/* Location */}
                <div className="flex items-start gap-2 md:gap-3 text-sm md:text-lg mb-4 md:mb-6 p-3 md:p-4 bg-accent/5 rounded-lg md:rounded-xl border border-accent/10">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-accent mt-0.5 md:mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    <span className="font-semibold text-foreground">Office Address:</span><br />
                    105/1 Bidhan Nagar Road, Block A (Above ICICI Bank)
                    <br />
                    <span className="text-accent font-semibold">Kolkata 700067</span>
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent my-4 md:my-6" />

              {/* Professional Summary */}
              <div className="space-y-4 md:space-y-6">
                <div className="p-4 md:p-6 bg-accent/5 rounded-xl md:rounded-2xl border border-accent/20">
                  <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">Professional Expertise</h4>
                  <p className="text-foreground/90 leading-relaxed text-sm md:text-base">
                    With over 8 years of expertise in financial planning and wealth management, 
                    I help individuals and families secure their financial future through strategic 
                    investment planning and comprehensive health insurance solutions.
                  </p>
                </div>

                {/* Services Highlights */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center p-3 md:p-4 bg-background/50 rounded-lg md:rounded-xl border border-accent/10">
                    <div className="text-xl md:text-2xl font-bold text-accent mb-1">500+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center p-3 md:p-4 bg-background/50 rounded-lg md:rounded-xl border border-accent/10">
                    <div className="text-xl md:text-2xl font-bold text-accent mb-1">8+</div>
                    <div className="text-xs md:text-sm text-muted-foreground">Years Experience</div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-3 md:pt-4">
                  <a 
                    href="tel:9088674067" 
                    className="flex-1 bg-accent hover:bg-accent/90 text-background font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl text-center transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm md:text-base"
                  >
                    Call Now: 9088674067
                  </a>
                  <a 
                    href="mailto:biswasfinancial@gmail.com" 
                    className="flex-1 border-2 border-accent/50 text-accent hover:bg-accent/10 font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg md:rounded-xl text-center transition-all duration-300 hover:scale-105 text-sm md:text-base"
                  >
                    Email Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AdvisorProfile;