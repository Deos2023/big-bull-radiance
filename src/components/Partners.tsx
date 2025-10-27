import { Card } from "@/components/ui/card";

const partners = [
  { name: "HDFC Mutual Fund", color: "from-red-400 to-red-600" },
  { name: "HSBC Mutual Fund", color: "from-red-500 to-red-700" },
  { name: "TATA Mutual Fund", color: "from-blue-400 to-blue-600" },
  { name: "SBI Mutual Fund", color: "from-blue-500 to-blue-700" },
  { name: "STAR Health Insurance", color: "from-purple-400 to-purple-600" },
];

const Partners = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10" />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Trusted Partnerships
          </h2>
          <p className="text-xl text-muted-foreground">
            Working with India's leading financial institutions
          </p>
          <div className="h-1 w-24 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {partners.map((partner, index) => (
            <Card
              key={partner.name}
              className="group bg-card/40 backdrop-blur-lg border-accent/20 hover:border-accent/50 transition-all duration-500 hover:shadow-[var(--glow-gold)] animate-fade-in hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8 text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${partner.color} flex items-center justify-center group-hover:animate-glow transition-all`}>
                  <span className="text-3xl font-bold text-white">
                    {partner.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                  {partner.name}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
