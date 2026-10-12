import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Heart,
  TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-background to-secondary/30 border-t border-accent/20">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute top-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-accent to-foreground bg-clip-text text-transparent">
                  Big Bull Investment
                </h3>
                <p className="text-sm text-muted-foreground">
                  Wealth & Wellness Partners
                </p>
              </div>
            </div>

            <p className="text-foreground/80 mb-6 leading-relaxed max-w-md">
              Your trusted partner for mutual funds and health insurance solutions across Kolkata and Howrah. With over 22 years of personalized fiduciary guidance, we help you build enduring wealth and health protection.
            </p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Shield className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Mutual Fund Distributor
                </span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full border border-accent/20">
                <Heart className="w-4 h-4 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Mediclaim Advisor
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61592699578094"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Big Bull Investment on Facebook"
                className="w-10 h-10 bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-gold)] group"
              >
                <Facebook className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://twitter.com"
                className="w-10 h-10 bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-gold)] group"
              >
                <Twitter className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              </a>
              <a
                href="https://instagram.com"
                className="w-10 h-10 bg-accent/10 hover:bg-accent/20 border border-accent/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[var(--glow-gold)] group"
              >
                <Instagram className="w-4 h-4 text-accent group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6 flex items-center gap-2">
              Quick Links
              <ArrowRight className="w-4 h-4 text-accent" />
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Gallery", href: "/gallery" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="flex items-center gap-2 text-foreground/70 hover:text-accent transition-all duration-300 hover:translate-x-1 group"
                  >
                    <div className="w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-foreground mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href="tel:9088674067"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Phone className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">9088674067</p>
                  <p className="text-sm text-muted-foreground">
                    Call for consultation
                  </p>
                </div>
              </a>

              <a
                href="mailto:biswasfinancial@gmail.com"
                className="flex items-center gap-3 text-foreground/70 hover:text-accent transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    biswasfinancial@gmail.com
                  </p>
                  <p className="text-sm text-muted-foreground">Email us</p>
                </div>
              </a>

              <div className="flex items-start gap-3 text-foreground/70">
                <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">
                    Office Address
                  </p>
                  <p className="text-sm">
                    105/1 Bidhan Nagar Road, Block A
                    <br />
                    Above ICICI Bank, Kolkata 700067
                    <br />
                    <span className="text-xs text-accent font-medium">Serving Kolkata, Howrah & West Bengal</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button className="w-full mt-6 bg-accent hover:bg-accent/90 text-background font-semibold py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[var(--glow-gold)]">
              <Phone className="w-4 h-4 mr-2" />
              Free Consultation
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-foreground/60 text-sm">
            © 2026 Big Bull Investment. Designed & Developed ❤️ by{" "}
            <a
              href="https://www.teamdeoskolkata.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-red-700 transition-colors duration-300 ml-1"
            >
              Digital Exposure Online Service 
            </a>.
          </p>
          <div className="flex flex-wrap gap-6 text-sm">
            <Link
              to="/privacy-policy"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms-of-service"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              to="/disclaimer"
              className="text-foreground/60 hover:text-accent transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
