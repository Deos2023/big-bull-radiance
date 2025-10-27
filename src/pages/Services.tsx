import Navbar from "@/components/Navbar";
// import ContactFooter from "@/components/ContactFooter";
import { TrendingUp, Shield, PiggyBank, FileText, Heart, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/heroImg2.jpg";
import bgImg from "@/assets/advisor.jpg";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Services = () => {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  const services = [
    {
      icon: TrendingUp,
      title: "Mutual Fund Investment",
      description: "Build wealth systematically with expertly curated mutual fund portfolios tailored to your risk profile and financial goals.",
      features: [
        "Equity & Debt Funds",
        "SIP Planning",
        "Portfolio Diversification",
        "Risk Assessment",
      ],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: Shield,
      title: "Health Insurance",
      description: "Protect yourself and your loved ones with comprehensive health insurance coverage designed for peace of mind.",
      features: [
        "Individual & Family Plans",
        "Critical Illness Cover",
        "Senior Citizen Plans",
        "Claim Assistance",
      ],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: PiggyBank,
      title: "Retirement Planning",
      description: "Secure your golden years with strategic retirement planning that ensures financial independence and comfort.",
      features: [
        "Pension Plans",
        "Retirement Corpus Building",
        "Tax-Efficient Strategies",
        "Income Planning",
      ],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: LineChart,
      title: "Wealth Management",
      description: "Comprehensive wealth management services to grow and protect your assets across market cycles.",
      features: [
        "Portfolio Management",
        "Asset Allocation",
        "Market Analysis",
        "Regular Monitoring",
      ],
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      icon: FileText,
      title: "Tax Planning",
      description: "Optimize your tax liabilities with smart investment strategies and maximize your savings legally.",
      features: [
        "Tax-Saving Investments",
        "ELSS Funds",
        "80C Optimization",
        "Capital Gains Planning",
      ],
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      icon: Heart,
      title: "Life Insurance",
      description: "Ensure your family's financial security with appropriate life insurance coverage and protection plans.",
      features: [
        "Term Insurance",
        "Endowment Plans",
        "ULIP Plans",
        "Coverage Assessment",
      ],
      color: "from-indigo-500/20 to-purple-500/20",
    },
  ];

  const partners = [
    "HDFC Mutual Fund",
    "HSBC Mutual Fund",
    "TATA Mutual Fund",
    "SBI Mutual Fund",
    "STAR Health Insurance",
  ];
  const navigate = useNavigate();
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden bg-fixed bg-center bg-cover" style={{ backgroundImage: `url(${heroImg})` }}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Our <span className="text-primary">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Comprehensive financial solutions tailored to secure your financial future
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-2xl p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors" onClick={()=>{navigate("/contact") }}>
                  Learn More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 bg-card/50 relative bg-fixed bg-center bg-cover" style={{backgroundImage:`url(${bgImg})`}}>
        <div className="absolute inset-0 bg-black/80" />
        <div className="container mx-auto z-10 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Trusted Partners</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We collaborate with industry-leading institutions to bring you the best financial products
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-xl px-8 py-4 hover:shadow-[var(--glow-gold)] hover:border-primary/50 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="font-semibold text-lg">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-12 border border-primary/20">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss your financial goals and create a personalized plan for your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-gold)] transition-all duration-300">
                Schedule Consultation
              </Button>
              <Button size="lg" variant="outline">
                Call Now: 9088674067
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
