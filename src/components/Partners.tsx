import { Card } from "@/components/ui/card";
import partnerImg from "@/assets/partner1.jpeg";
import bgImg from "@/assets/heroImg1.jpg";
import { Shield, Award, Users, CheckCircle } from "lucide-react";

const Partners = () => {
  return (
    <section 
      className="py-20 px-6 relative overflow-hidden bg-center bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Enhanced Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/75 via-background/90 to-accent/20" />
      
      {/* Additional Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] bg-[length:40px_40px]" />

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm">
            <Award className="w-5 h-5 text-accent" />
            <span className="text-accent font-semibold">Authorized Partner</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Collaborating with India's premier financial institutions to bring you the best investment and insurance solutions
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Main Partner Card with Enhanced Styling */}
        <Card className="max-w-5xl mx-auto bg-background/80 backdrop-blur-xl border-accent/30 shadow-2xl hover:shadow-[var(--glow-gold-strong)] transition-all duration-500 animate-scale-in overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Header Section */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Official Partner Network
              </h3>
              <p className="text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Certified distributor and advisor for top mutual fund companies
                and insurance providers in India
              </p>
            </div>

            {/* Partner Image with Enhanced Container */}
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 bg-black/30 p-4 mb-12 shadow-2xl pb-12">
              <div className="absolute inset-0 bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl" />
              
              <img
                src={partnerImg}
                alt="Official Partners - HDFC Mutual Fund, HSBC Mutual Fund, TATA Mutual Fund, SBI Mutual Fund, STAR Health Insurance"
                className="relative w-full h-auto rounded-xl shadow-2xl object-contain max-h-[500px] mx-auto"
                loading="lazy"
                decoding="async"
                style={{
                  imageRendering: '-webkit-optimize-contrast',
                  transform: 'translateZ(0)'
                }}
              />

              {/* Enhanced Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-background/80 to-transparent" />
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-background/60 to-transparent" />
                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-background/60 to-transparent" />
              </div>

              {/* Floating Stats */}
              <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 flex gap-4 ">
                <div className="bg-accent text-white px-4 py-2 rounded-full shadow-lg flex items-center gap-2">
                  <Users className="w-4 h-2" />
                  <span className="text-sm font-semibold">500+ Clients Served</span>
                </div>
              </div>
            </div>

            {/* Enhanced Partner Grid */}
            <div className="mb-12">
              <h4 className="text-2xl font-bold text-white text-center mb-8">
                Our Premier Partners
              </h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {[
                  { name: "HDFC Mutual Fund", initial: "H", color: "from-red-500 to-red-700" },
                  { name: "HSBC Mutual Fund", initial: "H", color: "from-red-600 to-red-800" },
                  { name: "TATA Mutual Fund", initial: "T", color: "from-blue-500 to-blue-700" },
                  { name: "SBI Mutual Fund", initial: "S", color: "from-blue-600 to-blue-800" },
                  { name: "STAR Health Insurance", initial: "S", color: "from-purple-500 to-purple-700" },
                ].map((partner, index) => (
                  <div
                    key={partner.name}
                    className="group text-center p-6 bg-white/5 rounded-2xl border border-white/10 hover:border-accent/50 transition-all duration-500 hover:scale-105 hover:bg-white/10 backdrop-blur-sm"
                  >
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${partner.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <span className="text-xl font-bold text-white">
                        {partner.initial}
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white group-hover:text-accent transition-colors leading-tight">
                      {partner.name}
                    </h4>
                    <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <CheckCircle className="w-4 h-4 text-accent mx-auto" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Certification Section */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 px-8 py-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-2xl border border-accent/30 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Award className="w-6 h-6 text-accent" />
                  <span className="text-lg font-bold text-white">
                    Certified Financial Partner
                  </span>
                </div>
                <div className="h-4 w-px bg-accent/50 hidden sm:block" />
                <span className="text-white/80 text-sm">
                  AMFI Registered | IRDAI Certified
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Enhanced Additional Information */}
        <div className="max-w-4xl mx-auto mt-16 text-center animate-fade-in-up">
          <Card className="bg-background/80 backdrop-blur-xl border-accent/20 p-8 shadow-2xl">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
            </div>
            <p className="text-white/90 leading-relaxed text-lg">
              As an authorized mutual fund distributor and insurance advisor with 
              <span className="text-accent font-semibold"> 8+ years of experience</span>, 
              we provide direct access to India's most trusted financial products 
              with complete transparency, personalized guidance, and dedicated 
              customer support.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Partners;