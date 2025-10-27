import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AdvisorProfile from "@/components/AdvisorProfile";
import Partners from "@/components/Partners";
import StatsCounter from "@/components/StatsCounter";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { useEffect } from "react";

const Index = () => {
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
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
