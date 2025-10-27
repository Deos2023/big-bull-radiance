import Hero from "@/components/Hero";
import AdvisorProfile from "@/components/AdvisorProfile";
import Partners from "@/components/Partners";
import StatsCounter from "@/components/StatsCounter";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Hero />
      <AdvisorProfile />
      <Partners />
      <StatsCounter />
      <ContactFooter />
    </div>
  );
};

export default Index;
