import Navbar from "@/components/Navbar";
// import ContactFooter from "@/components/ContactFooter";
import {
  Award,
  Users,
  Target,
  Heart,
  TrendingUp,
  Shield,
  Phone,
  Mail,
} from "lucide-react";
import Footer from "@/components/Footer";
import aboutImg from "@/assets/about1.jpeg";
import heroImg from "@/assets/heroImg.jpg";
import aboutImg2 from "@/assets/about2.jpeg";
import { useEffect } from "react";
import SEO from "@/components/SEO";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const values = [
    {
      icon: Shield,
      title: "Trust & Integrity",
      description:
        "We prioritize your financial security with transparent and honest guidance.",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Every investment strategy is tailored to help you achieve your unique financial goals.",
    },
    {
      icon: Heart,
      title: "Client-First Approach",
      description:
        "Your success is our success. We're dedicated to building lasting relationships.",
    },
  ];

  const achievements = [
    { icon: Users, count: "250+", label: "Satisfied Clients" },
    { icon: Award, count: "22+", label: "Years of Excellence" },
    { icon: TrendingUp, count: "50+", label: "Investment Plans" },
    { icon: Shield, count: "100+", label: "Health Policies" },
  ];

  return (
    <div className="min-h-screen">
      <SEO
        title="About Ujjal Biswas | Big Bull Investment Advisor in Kolkata & Howrah"
        description="Learn about Ujjal Biswas, lead advisor at Big Bull Investment with 22+ years of expertise. AMFI Registered Mutual Fund Distributor & Mediclaim Consultant in Kolkata & Howrah."
        keywords="about ujjal biswas, financial advisor kolkata, mutual fund distributor howrah, mediclaim consultant bidhan nagar, wealth advisor west bengal"
        canonicalPath="/about"
      />
      <Navbar />

      {/* Hero Section */}
      <section
        className="pt-32 pb-20 px-4 relative min-h-screen flex items-center justify-center overflow-hidden bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        {/* Enhanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-accent/20" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          />
          <div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "0.5s" }}
          />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-accent/10 rounded-full border border-accent/20 backdrop-blur-sm animate-fade-in">
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Trusted Since 2016
              </span>
              <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            </div>

            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in bg-gradient-to-r from-white via-accent to-white bg-clip-text text-transparent">
              About <span className="text-primary">Big Bull</span>
            </h1>

            {/* Subtitle */}
            <p
              className="text-2xl md:text-3xl lg:text-4xl font-light text-white mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.1s" }}
            >
              Your Gateway to{" "}
              <span className="text-accent font-semibold">
                Wealth & Wellness
              </span>
            </p>

            {/* Divider */}
            <div
              className="flex justify-center mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-accent to-transparent rounded-full" />
            </div>

            {/* Professional Description */}
            <p
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-3xl mx-auto animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              Empowering financial futures through expert guidance and
              personalized investment strategies. We bridge the gap between your
              financial goals and reality.
            </p>

            {/* Services Highlight */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.4s" }}
            >
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <div className="text-2xl font-bold text-accent mb-2">22+</div>
                <div className="text-white/80 text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <div className="text-2xl font-bold text-accent mb-2">500+</div>
                <div className="text-white/80 text-sm">Happy Clients</div>
              </div>
              <div className="text-center p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:border-accent/30 transition-all duration-300">
                <div className="text-2xl font-bold text-accent mb-2">10+</div>
                <div className="text-white/80 text-sm">Financial Partners</div>
              </div>
            </div>

            {/* Core Values */}
            {/* <div
              className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              <span className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-accent text-glow text-sm font-medium">
                ✓ Mutual Funds Expert
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-accent text-glow text-sm font-medium">
                ✓ Health Insurance Advisor
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-accent text-glow text-sm font-medium">
                ✓ Financial Planning
              </span>
              <span className="px-4 py-2 bg-accent/10 rounded-full border border-accent/20 text-amber-500 text-glow text-sm font-medium">
                ✓ Wealth Management
              </span>
            </div> */}

            {/* CTA Section */}
            {/* <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <p className="text-white/80 mb-6 text-lg">
                Ready to secure your financial future?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:9088674067"
                  className="inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent/90 text-background font-bold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-gold)]"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </a>
                <a
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-full transition-all duration-300 hover:scale-105"
                >
                  Explore Services
                </a>
              </div>
            </div> */}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
            <div className="w-1 h-3 bg-accent rounded-full mt-2" />
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
                  Founded with a vision to make quality financial planning
                  accessible to everyone, Big Bull Investment has been serving
                  the community for over 8 years. Led by Ujjal Biswas, our team
                  combines expertise in mutual funds and health insurance to
                  provide comprehensive financial solutions.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  We believe that everyone deserves a secure financial future.
                  Through personalized guidance and strategic planning, we've
                  helped hundreds of families achieve their financial goals and
                  protect what matters most.
                </p>
              </div>
              <div
                className="relative animate-scale-in overflow-hidden group"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="aspect-square rounded-2xl relative overflow-hidden shadow-2xl">
                  {/* Main Profile Image */}
                  <img
                    src={aboutImg}
                    alt="Ujjal Biswas - Lead Financial Advisor & Mutual Fund Distributor Kolkata and Howrah"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Bottom Info Bar */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-12">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="text-white font-bold text-xl">
                          Ujjal Biswas
                        </h3>
                        <p className="text-accent font-semibold">
                          Financial Advisor
                        </p>
                      </div>
                      <TrendingUp className="w-8 h-8 text-accent animate-glow" />
                    </div>
                  </div>

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Expert
                  </div>
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
              The principles that guide every decision we make and every
              relationship we build
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
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
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
              Numbers that reflect our commitment to excellence and client
              satisfaction
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
                <div className="text-4xl font-bold text-primary mb-2">
                  {achievement.count}
                </div>
                <div className="text-sm text-muted-foreground">
                  {achievement.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
              Meet Our Advisor
            </h2>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 animate-fade-in overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                {/* Image Section */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-64 h-64 relative">
                      <img
                        src={aboutImg2}
                        alt="Ujjal Biswas - Over 22 Years of Investment & Mediclaim Advisory in Kolkata and Howrah"
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover rounded-2xl border-4 border-accent/20 shadow-2xl"
                      />
                      {/* Experience Badge */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-accent text-white px-4 py-2 rounded-full font-semibold shadow-lg">
                        22+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="lg:col-span-2 text-center lg:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 text-foreground">
                    Ujjal Biswas
                  </h3>
                  <p className="text-primary font-medium mb-4 text-lg">
                    Financial Advisor | Mutual Fund Distributor | Mediclaim
                    Consultant
                  </p>

                  {/* Professional Tags */}
                  <div className="flex flex-wrap gap-2 mb-6 justify-center lg:justify-start">
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                      Mutual Funds Expert
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                      Insurance Advisor
                    </span>
                    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium border border-accent/20">
                      Financial Planning
                    </span>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                    With over 8 years of experience in financial planning and
                    investment management, Ujjal brings deep expertise in mutual
                    funds and health insurance. His client-first approach and
                    personalized strategies have helped countless families
                    secure their financial futures.
                  </p>

                  {/* Contact Links */}
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="tel:9088674067"
                      className="inline-flex items-center justify-center px-5 py-2 bg-accent hover:bg-accent/90 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      9088674067
                    </a>
                    <a
                      href="mailto:biswasfinancial@gmail.com"
                      className="inline-flex items-center justify-center px-5 py-2 border border-accent/50 text-accent hover:bg-accent/10 font-semibold rounded-full transition-all duration-300 hover:scale-105 text-sm"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
