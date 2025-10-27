import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactFooter = () => {
  return (
    <footer className="relative py-16 px-6 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[var(--gradient-primary)]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 w-72 h-72 bg-accent/30 rounded-full blur-3xl animate-float" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-accent animate-fade-in-up">
            Ready to Secure Your Financial Future?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Get in touch today for a personalized consultation
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12 animate-scale-in" style={{ animationDelay: '0.4s' }}>
            <a
              href="tel:9088674067"
              className="group flex flex-col items-center gap-3 p-6 bg-card/40 backdrop-blur-lg rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--glow-gold)] hover:scale-105"
            >
              <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Call Us</p>
                <p className="text-lg font-bold text-foreground">9088674067</p>
              </div>
            </a>

            <a
              href="mailto:biswasfinancial@gmail.com"
              className="group flex flex-col items-center gap-3 p-6 bg-card/40 backdrop-blur-lg rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--glow-gold)] hover:scale-105"
            >
              <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email Us</p>
                <p className="text-sm font-bold text-foreground break-all">biswasfinancial@gmail.com</p>
              </div>
            </a>

            <div className="group flex flex-col items-center gap-3 p-6 bg-card/40 backdrop-blur-lg rounded-2xl border border-accent/20 hover:border-accent/50 transition-all duration-300 hover:shadow-[var(--glow-gold)]">
              <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Visit Us</p>
                <p className="text-sm font-bold text-foreground">105/1 Bidhan Nagar Road, Block A</p>
                <p className="text-xs text-muted-foreground">(Above ICICI Bank), Kolkata 700067</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-accent/20">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Big Bull Investment. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground/70 mt-2">
              Professional Financial Advisory Services | Mutual Funds | Health Insurance
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
