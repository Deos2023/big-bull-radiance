import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  FileCheck, 
  Scale, 
  ShieldAlert, 
  TrendingUp, 
  HeartHandshake, 
  Coins, 
  AlertOctagon, 
  Copyright, 
  Ban, 
  HelpCircle, 
  Gavel, 
  ArrowLeft,
  PhoneCall,
  MapPin,
  Mail,
  CheckCircle2
} from "lucide-react";
import SEO from "@/components/SEO";

const TermsOfService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "acceptance", title: "1. Acceptance of Terms", icon: FileCheck },
    { id: "regulatory-status", title: "2. Regulatory Status & Role", icon: Scale },
    { id: "user-eligibility", title: "3. User Eligibility & KYC", icon: HeartHandshake },
    { id: "mutual-funds-terms", title: "4. Mutual Fund Distribution", icon: TrendingUp },
    { id: "insurance-terms", title: "5. Health Insurance Advisory", icon: ShieldAlert },
    { id: "commissions-remuneration", title: "6. Commissions & Disclosures", icon: Coins },
    { id: "no-guarantees", title: "7. Non-Depository & No Guarantees", icon: AlertOctagon },
    { id: "intellectual-property", title: "8. Intellectual Property Rights", icon: Copyright },
    { id: "prohibited-activities", title: "9. Prohibited Activities", icon: Ban },
    { id: "limitation-liability", title: "10. Limitation of Liability", icon: HelpCircle },
    { id: "indemnification", title: "11. Client Indemnification", icon: ShieldAlert },
    { id: "governing-law", title: "12. Governing Law & Jurisdiction", icon: Gavel },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Terms of Service | Big Bull Investment (Kolkata & Howrah)"
        description="Terms of Service and legal advisory agreement for Big Bull Investment. Rules governing mutual fund distribution, health insurance consulting, and Kolkata jurisdiction."
        keywords="terms of service, legal advisory terms, mutual fund agreement kolkata"
        canonicalPath="/terms-of-service"
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

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider mb-4">
            <Scale className="w-3.5 h-3.5" />
            <span>Fiduciary Contract & Terms</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Terms of Service
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed">
            Please read these terms carefully before accessing the services of <span className="text-foreground font-semibold">Big Bull Investment (Big Bull Radiance)</span>. By accessing our platform or engaging our advisory services, you agree to be legally bound by these terms.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-md bg-card border border-border">Effective Date: October 2026</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">AMFI Registered Mutual Fund Distributor</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">Mediclaim Advisor (Kolkata)</span>
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
                  <Scale className="w-4 h-4 text-primary" />
                  Table of Contents
                </h3>
                <nav className="space-y-1.5 text-xs max-h-[60vh] overflow-y-auto pr-1">
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
                    <p className="font-semibold text-foreground mb-1">Advisory Consultation</p>
                    <p className="text-muted-foreground mb-3">Questions on service agreements or distribution terms? Call us directly.</p>
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
              <div id="acceptance" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    These Terms of Service constitute a legally enforceable agreement entered into by and between the client or visitor ("User", "Investor", "You") and <strong className="text-foreground">Big Bull Investment</strong> (operating also as "Big Bull Radiance"), having its registered principal office at 105/1 Bidhan Nagar Road, Block A (Above ICICI Bank), Kolkata 700067, West Bengal, India.
                  </p>
                  <p>
                    By navigating this website, initiating financial consultations, registering for Systematic Investment Plans (SIP), or applying for mediclaim coverage, you unconditionally acknowledge and agree to comply with all provisions of these Terms of Service, together with our Privacy Policy and Regulatory Disclaimer.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div id="regulatory-status" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Scale className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Regulatory Status & Role</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>It is vital that investors clearly understand the legal nature of our operations:</p>
                  <div className="p-4 rounded-xl bg-background/60 border border-border space-y-2 text-xs">
                    <p><strong className="text-foreground">1. Mutual Fund Distributor:</strong> Big Bull Investment acts as an AMFI-Registered Mutual Fund Distributor (ARN Holder). In this capacity, we facilitate the distribution and transaction processing of schemes managed by SEBI-registered Asset Management Companies (AMCs).</p>
                    <p><strong className="text-foreground">2. Health Insurance & Mediclaim Advisor:</strong> We act as an independent insurance consultant offering advisory assistance for health and general insurance policies underwritten by IRDAI-registered insurance companies.</p>
                    <p><strong className="text-foreground">3. What We Are NOT:</strong> Big Bull Investment is NOT a banking institution, NOT a Non-Banking Financial Company (NBFC), NOT a Portfolio Management Service (PMS) provider, and does NOT hold client money in trust or accept public cash deposits.</p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="user-eligibility" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. User Eligibility & KYC Obligations</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    To engage our services, you must be a competent individual under the Indian Contract Act, 1872 (at least 18 years of age or represented by an authorized natural/legal guardian in case of minor folios).
                  </p>
                  <p>
                    You agree that all information, Permanent Account Number (PAN), identity proofs, contact details, and bank account credentials furnished to Big Bull Investment are genuine, accurate, and current. You are obligated under PMLA rules to report any modification in address or tax status within thirty (30) days.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div id="mutual-funds-terms" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. Mutual Fund Distribution Guidelines</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Direct Fund Remittance:</strong> All investment checks, auto-debit NACH mandates, and UPI payments are issued directly in favor of the designated Mutual Fund Scheme (e.g., "HDFC Flexi Cap Fund - Collection Account") and NEVER to Big Bull Investment.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Official Cut-Off Timings:</strong> All unit allotment NAVs are governed strictly by the SEBI cut-off timings and fund realization rules. Transactions received after cut-off are allocated the subsequent business day's NAV.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span><strong className="text-foreground">Statutory Market Risk:</strong> Mutual fund units fluctuate according to underlying market movements, economic trends, interest rates, and inflation. Big Bull Investment does not guarantee any capital preservation.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div id="insurance-terms" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Health Insurance Advisory & Utmost Good Faith</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    All health insurance and mediclaim policies are governed by the ancient legal principle of <strong className="text-foreground">Uberrima Fides (Utmost Good Faith)</strong>:
                  </p>
                  <div className="p-4 rounded-xl bg-secondary/30 border border-border text-xs space-y-2">
                    <p><strong className="text-foreground">Mandatory Pre-Existing Disease Disclosure:</strong> The applicant must disclose all pre-existing illnesses, past surgeries, chronic conditions, and lifestyle habits honestly. Concealment of facts permits the insurer to repudiate claims and forfeit premium payments without recourse.</p>
                    <p><strong className="text-foreground">Insurer Authority Over Claims:</strong> Big Bull Investment assists clients in claim coordination, documentation, and hospital cashless intimation. However, final claim admissibility, deduction of co-pay, room rent capping, and medical expense approvals reside exclusively with the Insurance Company and its Third Party Administrator (TPA).</p>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div id="commissions-remuneration" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Coins className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Commissions & Remuneration Disclosures</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    In accordance with SEBI Circular SEBI/IMD/CIR No. 4/168230/09 and AMFI guidelines, we make full disclosure of our remuneration structure:
                  </p>
                  <p>
                    Big Bull Investment receives trail commissions directly from Asset Management Companies (AMCs) for mutual fund schemes distributed through our ARN code. We do not levy separate consultation fees from retail investors for regular mutual fund distribution. Insurance remuneration is governed strictly by the statutory commission schedule established by IRDAI.
                  </p>
                </div>
              </div>

              {/* Section 7 */}
              <div id="no-guarantees" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <AlertOctagon className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">7. Non-Depository & No Guaranteed Returns</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Big Bull Investment explicitly rejects any representation of guaranteed, fixed, or risk-free returns on market-linked securities.
                  </p>
                  <p>
                    Any historical performance tables, CAGR estimates, or SIP growth illustrations presented on this website or in promotional material are purely mathematical extrapolations for investor awareness. Past returns provide no guarantee of future profits.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="intellectual-property" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Copyright className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">8. Intellectual Property Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    All content on this website—including but not limited to brand logos ("Big Bull", "Big Bull Radiance"), visual designs, photographic gallery items, educational video material, written articles, layout architectures, and computer code—are the intellectual property of Big Bull Investment and Ujjal Biswas.
                  </p>
                  <p>
                    No portion of this platform may be copied, reproduced, deep-linked, scraped, or republished for commercial ventures without express prior written consent.
                  </p>
                </div>
              </div>

              {/* Section 9 */}
              <div id="prohibited-activities" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Ban className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">9. Prohibited User Activities</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>Users are expressly prohibited from engaging in:</p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Submitting fraudulent, forged, or stolen identity credentials or PAN cards.</li>
                    <li>Attempting unauthorized penetration testing, scraping, or automated querying of this website.</li>
                    <li>Disseminating defamatory, malicious, or misleading information about our services.</li>
                    <li>Circumventing regulatory transaction protocols established by AMCs, RTAs, or IRDAI.</li>
                  </ul>
                </div>
              </div>

              {/* Section 10 */}
              <div id="limitation-liability" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">10. Limitation of Liability</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    To the maximum extent permitted by Indian Law, Big Bull Investment, its founder Ujjal Biswas, and staff members shall not be held liable for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-xs">
                    <li>Depreciation in asset portfolio values caused by market corrections, macroeconomic factors, or geopolitical turmoil.</li>
                    <li>Delays or transaction failures originating from banking server downtimes, payment gateway errors, or RTA system maintenance.</li>
                    <li>Rejection, reduction, or repudiation of health insurance claims executed by the insurance company based on policy wording.</li>
                    <li>Consequential, indirect, punitive, or speculative damages arising from the use of this website.</li>
                  </ul>
                </div>
              </div>

              {/* Section 11 */}
              <div id="indemnification" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldAlert className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">11. Client Indemnification</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    You agree to indemnify, defend, and hold harmless Big Bull Investment and its associates from and against any claims, losses, fines, legal fees, or liabilities resulting from your breach of these Terms, willful misrepresentation on KYC or insurance forms, or violation of third-party rights.
                  </p>
                </div>
              </div>

              {/* Section 12 */}
              <div id="governing-law" className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-secondary/40 border border-primary/30 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                    <Gavel className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">12. Governing Law & Kolkata Jurisdiction</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    These Terms of Service are construed, interpreted, and governed in accordance with the substantive laws of the Republic of India.
                  </p>
                  <p>
                    Any disputes, controversies, or claims arising out of or related to these Terms, financial transactions, or advisory consultations shall be subject to the exclusive jurisdiction of the competent courts having territorial jurisdiction in <strong className="text-foreground">Kolkata, West Bengal, India</strong>.
                  </p>

                  <div className="p-4 rounded-xl bg-background/80 border border-border text-xs space-y-1.5 mt-4">
                    <p className="font-semibold text-foreground">Registered Office Details:</p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>105/1 Bidhan Nagar Road, Block A (Above ICICI Bank), Kolkata 700067</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>biswasfinancial@gmail.com</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <PhoneCall className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>9088674067</span>
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

export default TermsOfService;
