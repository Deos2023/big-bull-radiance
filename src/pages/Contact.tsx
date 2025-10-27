import Navbar from "@/components/Navbar";
import ContactFooter from "@/components/ContactFooter";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "9088674067",
      action: "tel:9088674067",
    },
    {
      icon: Mail,
      title: "Email",
      content: "biswasfinancial@gmail.com",
      action: "mailto:biswasfinancial@gmail.com",
    },
    {
      icon: MapPin,
      title: "Address",
      content: "105/1 Bidhan Nagar Road, Block A (Above ICICI Bank), Kolkata 700067",
      action: null,
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon - Sat: 10:00 AM - 7:00 PM",
      action: null,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--gradient-primary)]" />
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Get in <span className="text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              Let's discuss how we can help you achieve your financial goals
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="text-3xl font-bold mb-4">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Reach out to us through any of the following channels. We're here to help you.
                </p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="group bg-card border border-border rounded-xl p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-2">{info.title}</h3>
                        {info.action ? (
                          <a
                            href={info.action}
                            className="text-muted-foreground hover:text-primary transition-colors"
                          >
                            {info.content}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-card border border-border rounded-2xl p-8 animate-scale-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input placeholder="Your full name" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input type="email" placeholder="your.email@example.com" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input type="tel" placeholder="Your phone number" className="w-full" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your financial goals or questions..."
                    className="w-full min-h-[150px]"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-[var(--glow-gold)] transition-all duration-300"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Visit Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're conveniently located in Bidhan Nagar, Kolkata. Drop by for a personal consultation.
            </p>
          </div>
          <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden border border-border shadow-2xl animate-fade-in-up">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.0894676458727!2d88.42342731495748!3d22.576414985184583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020000001%3A0x6c5d8f8d0d0d0d0d!2sBidhan%20Nagar%20Rd%2C%20Kolkata%2C%20West%20Bengal%20700067!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Big Bull Investment Office Location"
            />
          </div>
        </div>
      </section>

      <ContactFooter />
    </div>
  );
};

export default Contact;
