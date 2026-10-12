import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  AlertTriangle, 
  TrendingDown, 
  ShieldAlert, 
  FileSpreadsheet, 
  HelpCircle, 
  Link2, 
  ServerOff, 
  Building2, 
  ArrowLeft,
  PhoneCall,
  MapPin,
  Mail,
  Scale
} from "lucide-react";
import SEO from "@/components/SEO";

const Disclaimer = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "sebi-statutory", title: "1. SEBI Statutory Mutual Fund Disclosure", icon: AlertTriangle },
    { id: "no-guaranteed-returns", title: "2. No Guaranteed Returns or Capital Assurances", icon: TrendingDown },
    { id: "irdai-insurance", title: "3. IRDAI Health Insurance Solicitation Notice", icon: ShieldAlert },
    { id: "distributor-capacity", title: "4. Intermediary / Distributor Legal Capacity", icon: Scale },
    { id: "tax-legal-advice", title: "5. No Bespoke Tax or Legal Counsel", icon: FileSpreadsheet },
    { id: "third-party-links", title: "6. Third-Party Links & Calculator Projections", icon: Link2 },
    { id: "system-downtime", title: "7. Technical Availability & Information Accuracy", icon: ServerOff },
    { id: "regulatory-contact", title: "8. Regulatory Compliance & Inquiries", icon: Building2 },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Regulatory Disclaimers & SEBI Risk Notices | Big Bull Investment"
        description="Statutory SEBI mutual fund market risk disclosures, IRDAI insurance solicitation notices, and regulatory disclaimers for Big Bull Investment."
        keywords="sebi disclaimer, mutual fund risk notice, irdai solicitation notice kolkata"
        canonicalPath="/disclaimer"
      />
      <Navbar />

      {/* Header Banner */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden bg-gradient-to-b from-secondary/40 via-background to-background border-b border-border/50">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-sm text-primary hover:text-accent transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-500 text-xs font-semibold uppercase tracking-wider mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Statutory Risk & Regulatory Disclosures</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Regulatory Disclaimer
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed">
            Statutory disclosures, market volatility warnings, and regulatory notices governing mutual fund investments and health insurance distribution at <span className="text-foreground font-semibold">Big Bull Investment</span>.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-md bg-card border border-border">Mandatory SEBI Disclosure</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">IRDAI Solicitation Notice</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">AMFI Registered Entity</span>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Quick Table of Contents Sidebar */}
            <aside className="lg:col-span-4 order-2 lg:order-1">
              <div className="sticky top-28 p-6 rounded-2xl bg-card/60 backdrop-blur-md border border-border/80 shadow-md">
                <h3 className="text-base font-bold text-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-amber-500" />
                  Table of Contents
                </h3>
                <nav className="space-y-1.5 text-xs">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="flex items-center gap-2 py-1.5 px-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/5 transition-all"
                    >
                      <sec.icon className="w-3.5 h-3.5 text-accent shrink-0" />
                      <span className="truncate">{sec.title}</span>
                    </a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-border/80">
                  <div className="p-4 rounded-xl bg-primary/5 border border-primary/20 text-xs">
                    <p className="font-semibold text-foreground mb-1">Need Clarification?</p>
                    <p className="text-muted-foreground mb-3">Speak with our lead advisor before initiating any investment mandate.</p>
                    <a 
                      href="tel:9088674067" 
                      className="inline-flex items-center gap-1.5 text-primary hover:text-accent font-semibold"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      9088674067
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Detailed Content Body */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">

              {/* Section 1 */}
              <div id="sebi-statutory" className="p-8 rounded-2xl bg-card/40 border border-amber-500/30 hover:border-amber-500/60 transition-all shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-amber-500/10 text-amber-500">
                    <AlertTriangle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. SEBI Statutory Mutual Fund Risk Disclosure</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <div className="p-5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 font-bold text-base text-center tracking-wide uppercase">
                    "Mutual fund investments are subject to market risks, read all scheme related documents carefully."
                  </div>
                  <p>
                    In accordance with regulatory directives from the Securities and Exchange Board of India (SEBI), investors are hereby cautioned that:
                  </p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs">
                    <li><strong className="text-foreground">Net Asset Value (NAV) Volatility:</strong> The NAV of mutual fund units fluctuates daily according to underlying securities, market sentiment, macroeconomic forces, interest rate shifts, and currency valuations.</li>
                    <li><strong className="text-foreground">No Assured Past Returns:</strong> Past performance of any mutual fund scheme, benchmark index, or asset class is solely historical and serves as no indication or guarantee of future returns.</li>
                    <li><strong className="text-foreground">Capital Risk:</strong> Mutual funds are equity, hybrid, or debt market instruments. In unfavorable economic situations, the value of your invested capital may diminish.</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div id="no-guaranteed-returns" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. No Guaranteed Returns or Capital Assurances</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Big Bull Investment and its associates explicitly affirm that we do NOT operate, promote, or distribute any "guaranteed return", "fixed profit", or "capital protected" equity schemes.
                  </p>
                  <p>
                    Investors should beware of fraudulent third parties promising assured doubling of capital or fixed monthly returns in equity markets. Any SIP compounding graphs, financial tables, or retirement projections featured on our website are mathematical illustrations intended strictly for financial education and do not represent contractual commitments.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div id="irdai-insurance" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. IRDAI Health Insurance Solicitation Notice</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border text-foreground font-semibold text-sm">
                    "Insurance is the subject matter of solicitation."
                  </div>
                  <p>
                    Under guidelines of the Insurance Regulatory and Development Authority of India (IRDAI):
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Underwriter Primacy:</strong> Health insurance policies, mediclaim covers, and critical illness plans are underwritten and issued solely by licensed Insurance Companies (e.g., Star Health, Care Health, Niva Bupa). Big Bull Investment serves solely as a distribution advisor.
                    </li>
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Policy Terms Prevail:</strong> All policy benefits, room rent restrictions, waiting periods for specific diseases (e.g., 2 to 4 years for pre-existing ailments), co-payments, and claim approvals are determined exclusively by the insurer's policy bond wording.
                    </li>
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">No Claim Underwriting Authority:</strong> While Big Bull Investment assists clients in claim coordination, we have no legal power to approve, settle, or overrule claim repudiations made by an insurance company or its Third Party Administrator (TPA).
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div id="distributor-capacity" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. Intermediary & Distributor Legal Capacity</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Big Bull Investment acts as an AMFI-Registered Mutual Fund Distributor. Under current SEBI regulatory classifications:
                  </p>
                  <p>
                    Mutual fund distributors are compensated through commissions paid by Asset Management Companies for distribution and onboarding services. If you require fee-only fiduciary financial planning without commission-based product distribution, you may engage a SEBI-Registered Investment Advisor (RIA).
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div id="tax-legal-advice" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <FileSpreadsheet className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. No Bespoke Tax or Legal Counsel</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Information presented on this website relating to tax benefits under Section 80C, Section 80D, Equity Linked Savings Schemes (ELSS), Long-Term Capital Gains (LTCG), or Short-Term Capital Gains (STCG) of the Income Tax Act, 1961 is provided solely for general informational purposes.
                  </p>
                  <p>
                    Tax provisions are subject to legislative amendment, individual investor tax slabs, and specific surcharges. Investors must consult their qualified Chartered Accountant or tax consultant before making investment decisions based on tax implications.
                  </p>
                </div>
              </div>

              {/* Section 6 */}
              <div id="third-party-links" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Link2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Third-Party Links & Calculator Projections</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Our platform may contain links to third-party web portals, including official Mutual Fund AMCs, Registrar and Transfer Agents (CAMS, KFintech), insurance companies, and social media channels (such as our official Facebook page).
                  </p>
                  <p>
                    We do not control, endorse, or verify the operational security, privacy guidelines, or accuracy of third-party platforms. Any reliance placed on third-party links is at the user's sole discretion and risk.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="system-downtime" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ServerOff className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">7. Technical Availability & Information Accuracy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    While we strive to keep all market data, policy summaries, and website functionality accurate and continuous, this website is provided on an "as is" and "as available" basis without express or implied warranties.
                  </p>
                  <p>
                    Big Bull Investment shall not be responsible for operational interruptions, delays in transmission, software bugs, or server downtime resulting from force majeure conditions or Internet infrastructure breakdowns.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="regulatory-contact" className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-secondary/40 border border-primary/30 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                    <Building2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">8. Regulatory Compliance & Inquiries</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    If you have questions regarding this Regulatory Disclaimer or require detailed scheme offer documents (SID, KIM, SAI), please visit or write to our principal office:
                  </p>

                  <div className="p-5 rounded-xl bg-background/80 border border-border text-xs space-y-2">
                    <p><strong className="text-foreground text-sm">Big Bull Investment (Big Bull Radiance)</strong></p>
                    <p><strong className="text-foreground">Principal Advisor:</strong> Ujjal Biswas</p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary shrink-0" />
                      <span>105/1 Bidhan Nagar Road, Block A (Above ICICI Bank), Kolkata 700067, West Bengal, India</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-primary shrink-0" />
                      <span>Email: <a href="mailto:biswasfinancial@gmail.com" className="text-primary hover:underline">biswasfinancial@gmail.com</a></span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="w-4 h-4 text-primary shrink-0" />
                      <span>Direct Contact: <a href="tel:9088674067" className="text-primary hover:underline">9088674067</a></span>
                    </p>
                  </div>
                </div>
              </div>

            </main>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;
