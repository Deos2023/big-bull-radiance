import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { 
  ShieldCheck, 
  Lock, 
  Eye, 
  FileText, 
  Database, 
  Users, 
  Share2, 
  Clock, 
  UserCheck, 
  Cookie, 
  PhoneCall, 
  ArrowLeft,
  Mail,
  MapPin,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import SEO from "@/components/SEO";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    { id: "introduction", title: "1. Introduction & Regulatory Framework", icon: ShieldCheck },
    { id: "information-collected", title: "2. Information We Collect", icon: Database },
    { id: "collection-methods", title: "3. Methods of Data Collection", icon: Eye },
    { id: "purpose-processing", title: "4. Purpose & Lawful Processing", icon: FileText },
    { id: "data-sharing", title: "5. Data Sharing & Third Parties", icon: Share2 },
    { id: "security-measures", title: "6. Security & Encryption Safeguards", icon: Lock },
    { id: "retention-policy", title: "7. Data Retention & Disposal", icon: Clock },
    { id: "client-rights", title: "8. Your Statutory Rights", icon: UserCheck },
    { id: "cookies-tracking", title: "9. Cookies & Tracking Technologies", icon: Cookie },
    { id: "grievance-contact", title: "10. Grievance Officer & Contact", icon: PhoneCall },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEO
        title="Privacy Policy | Big Bull Investment (Kolkata & Howrah)"
        description="Read Big Bull Investment's Privacy Policy. Comprehensive data protection framework, SEBI and IRDAI compliance, and sensitive financial data safeguarding."
        keywords="privacy policy, data protection, big bull investment kolkata, sebi compliance data"
        canonicalPath="/privacy-policy"
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
            <Lock className="w-3.5 h-3.5" />
            <span>Legal & Privacy Documentation</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            Privacy Policy
          </h1>

          <p className="text-muted-foreground text-base md:text-lg max-w-3xl leading-relaxed">
            At <span className="text-foreground font-semibold">Big Bull Investment (Big Bull Radiance)</span>, we uphold the highest fiduciary standards. This Privacy Policy details our comprehensive framework for the collection, handling, storage, and security of your sensitive personal and financial data.
          </p>

          <div className="flex flex-wrap gap-4 mt-6 text-xs text-muted-foreground">
            <span className="px-3 py-1 rounded-md bg-card border border-border">Effective Date: October 2026</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">Entity: Big Bull Investment</span>
            <span className="px-3 py-1 rounded-md bg-card border border-border">Jurisdiction: Kolkata, West Bengal, India</span>
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
                  <FileText className="w-4 h-4 text-primary" />
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
                    <p className="font-semibold text-foreground mb-1">Have Privacy Questions?</p>
                    <p className="text-muted-foreground mb-3">Our Principal Financial Advisor is available to clarify any data handling questions.</p>
                    <a 
                      href="tel:9088674067" 
                      className="inline-flex items-center gap-1.5 text-primary hover:text-accent font-semibold"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      Call: 9088674067
                    </a>
                  </div>
                </div>
              </div>
            </aside>

            {/* Detailed Content Body */}
            <main className="lg:col-span-8 order-1 lg:order-2 space-y-12">

              {/* Section 1 */}
              <div id="introduction" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">1. Introduction & Regulatory Framework</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Big Bull Investment (operating also under the trade and brand identity "Big Bull Radiance"), founded and managed by <strong className="text-foreground">Ujjal Biswas</strong> (AMFI-Registered Mutual Fund Distributor and Professional Mediclaim Advisor), operates in strict compliance with the statutory regulations promulgated by the Securities and Exchange Board of India (SEBI), the Association of Mutual Funds in India (AMFI), and the Insurance Regulatory and Development Authority of India (IRDAI).
                  </p>
                  <p>
                    This Privacy Policy is compiled in adherence to Section 43A of the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (SPDI Rules), and the applicable data privacy laws of India. It explains how we gather, utilize, store, disclose, and guard your sensitive personal data and financial records.
                  </p>
                  <div className="p-4 rounded-xl bg-accent/5 border border-accent/20 text-xs">
                    <p className="font-semibold text-foreground mb-1">Our Fiduciary Pledge:</p>
                    <p>We treat your personal and investment confidentiality as sacred. Under no circumstance do we monetize, rent, or sell your confidential data to third-party brokers, marketing aggregators, or unsolicited callers.</p>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div id="information-collected" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Database className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">2. Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    To render tailored financial advisory, execute mutual fund distribution mandates, and facilitate comprehensive health insurance solutions, we may collect the following classifications of data:
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 my-4">
                    <div className="p-4 rounded-xl bg-background/60 border border-border">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Personal Identification Data
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                        <li>Full Legal Name & Parent/Spouse Name</li>
                        <li>Date of Birth & Age Proof</li>
                        <li>Residential & Permanent Address Proof</li>
                        <li>Mobile Number & Verified Email ID</li>
                        <li>Photographs & Signature Specimens</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-background/60 border border-border">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Financial & Statutory KYC Data
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                        <li>Permanent Account Number (PAN Card)</li>
                        <li>Aadhaar Card (Offline e-KYC verification)</li>
                        <li>Bank Account Number, IFSC, & Cheque</li>
                        <li>Annual Income Bracket & Net Worth</li>
                        <li>Investor Tax Residency Status (FATCA/CRS)</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-background/60 border border-border">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                        Health & Underwriting Profiles
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                        <li>Personal Medical History & Pre-existing Illnesses</li>
                        <li>Family Health History & Hereditary Conditions</li>
                        <li>Hospitalization Records & Discharge Summaries</li>
                        <li>Lifestyle habits (Tobacco/Alcohol usage)</li>
                        <li>Health diagnostic and doctor check-up reports</li>
                      </ul>
                    </div>

                    <div className="p-4 rounded-xl bg-background/60 border border-border">
                      <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent" />
                        Digital & Device Footprints
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-xs text-muted-foreground">
                        <li>Internet Protocol (IP) Address</li>
                        <li>Browser specifications & Operating System</li>
                        <li>Referral URL, page visits & session length</li>
                        <li>Form submission timestamps & inquiries</li>
                        <li>Transactional log entries for audit trails</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div id="collection-methods" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Eye className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">3. Methods of Data Collection</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>We aggregate user information through legitimate, transparent, and consensual pathways:</p>
                  <ul className="space-y-2 text-xs">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="text-foreground">In-Person Office Consultations:</strong> Direct submission of authenticated physical documents at our registered Kolkata office (105/1 Bidhan Nagar Road, Block A).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="text-foreground">Digital Onboarding Forms:</strong> Voluntary submission of contact forms, SIP calculators, and consultation requests via this website.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="text-foreground">Authorized Regulatory Repositories:</strong> Fetching verified KYC verification statuses via SEBI-registered KYC Registration Agencies (CVL KRA, NDML KRA, CAMS KRA, Karvy KRA).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                      <span><strong className="text-foreground">Direct Telephonic & WhatsApp Messaging:</strong> Interactive communications for document collection and instant policy service support.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Section 4 */}
              <div id="purpose-processing" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <FileText className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">4. Purpose & Lawful Processing Grounds</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>Your collected information is processed solely for verified fiduciary, operational, and regulatory objectives:</p>
                  <div className="space-y-3">
                    <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50 text-xs">
                      <strong className="text-foreground block mb-1">Mutual Fund Transactions & Folio Management</strong>
                      Enabling seamless creation of mutual fund folios, SIP registrations, STP/SWP instructions, redemption requests, and generating consolidated account statements across AMCs.
                    </div>
                    <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50 text-xs">
                      <strong className="text-foreground block mb-1">Health Insurance Underwriting & Claims Support</strong>
                      Transmitting accurate proposal forms to insurers (e.g., Star Health, Care Health, Niva Bupa), coordinating medical examinations, assisting with cashless hospital approvals, and expediting reimbursement claims.
                    </div>
                    <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50 text-xs">
                      <strong className="text-foreground block mb-1">Anti-Money Laundering (PMLA) & Statutory Compliance</strong>
                      Satisfying mandatory Know Your Customer (KYC), Customer Due Diligence (CDD), and Prevention of Money Laundering Act, 2002 requirements mandated by the Government of India.
                    </div>
                    <div className="p-3.5 rounded-xl bg-secondary/30 border border-border/50 text-xs">
                      <strong className="text-foreground block mb-1">Portfolio Reviews & Client Communication</strong>
                      Providing timely market analysis, portfolio rebalancing notifications, fund house notices, and insurance renewal alerts before policy lapse.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 5 */}
              <div id="data-sharing" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Share2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">5. Data Sharing & Third-Party Disclosures</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    To execute transactions in your name, Big Bull Investment must transmit your data to regulated institutional partners. We do not share your data beyond the following strictly authorized entities:
                  </p>
                  <ul className="space-y-2 text-xs">
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Asset Management Companies (AMCs) & RTAs:</strong> SEBI-registered mutual fund houses (e.g., HDFC, ICICI Prudential, SBI, Nippon India, Axis) and their official Registrar and Transfer Agents (Computer Age Management Services - CAMS, KFin Technologies).
                    </li>
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Stock Exchange & Transaction Platforms:</strong> Regulated transaction infrastructures such as BSE StAR MF, NSE NMF II, or MF Utilities (MFU) acting as execution gateways.
                    </li>
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Regulated Insurance Companies & TPAs:</strong> IRDAI-licensed health insurers and their associated Third Party Administrators (TPAs) solely for policy issuance and claim adjudications.
                    </li>
                    <li className="p-3 rounded-lg bg-background/50 border border-border">
                      <strong className="text-foreground">Statutory & Law Enforcement Bodies:</strong> Disclosures made strictly in response to legal court subpoenas, income tax summons, or explicit directives issued by SEBI, AMFI, IRDAI, or RBI.
                    </li>
                  </ul>
                  <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-destructive text-xs flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 shrink-0" />
                    <span>We maintain a strict non-disclosure agreement with all third-party tech vendors and strictly prohibit cross-selling by external parties.</span>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div id="security-measures" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Lock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">6. Security & Encryption Safeguards</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Big Bull Investment applies comprehensive technical, physical, and managerial security practices conforming with Rule 8 of the Information Technology SPDI Rules, 2011:
                  </p>
                  <div className="grid sm:grid-cols-3 gap-3 text-xs">
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border text-center">
                      <strong className="text-foreground block mb-1">256-Bit SSL/TLS</strong>
                      End-to-end data transmission encryption for all online interactions.
                    </div>
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border text-center">
                      <strong className="text-foreground block mb-1">Role-Based Access</strong>
                      Only authorized advisory personnel possess authenticated access to records.
                    </div>
                    <div className="p-3.5 rounded-xl bg-background/60 border border-border text-center">
                      <strong className="text-foreground block mb-1">Physical Safeguards</strong>
                      Physical document files are kept under locked fireproof custody at our office.
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 7 */}
              <div id="retention-policy" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">7. Data Retention & Digital Shredding</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Under Section 12 of the Prevention of Money Laundering Act (PMLA) and SEBI Master Circulars, intermediaries are mandated to retain client identification records, KYC documents, and transaction logs for a minimum statutory period of <strong className="text-foreground">five (5) to eight (8) years</strong> following the termination of the client-distributor relationship.
                  </p>
                  <p>
                    Upon the expiration of the statutory retention window, data is permanently shredded, sanitized, and deleted from electronic servers and physical records in accordance with recognized industry standards.
                  </p>
                </div>
              </div>

              {/* Section 8 */}
              <div id="client-rights" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <UserCheck className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">8. Your Statutory Rights</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>As an investor and consumer, you are entitled to exercise the following rights regarding your data:</p>
                  <ul className="list-disc list-inside space-y-1.5 text-xs">
                    <li><strong className="text-foreground">Right to Access:</strong> You may request a duplicate copy of all personal records and folio records held by our office.</li>
                    <li><strong className="text-foreground">Right to Rectification:</strong> If any demographic data, nominee details, or bank credentials are erroneous, you have the right to request immediate correction via appropriate AMC/RTA rectification forms.</li>
                    <li><strong className="text-foreground">Right to Opt-Out:</strong> You may opt out of promotional circulars, market updates, or newsletters by submitting an email to biswasfinancial@gmail.com.</li>
                    <li><strong className="text-foreground">Withdrawal of Consent:</strong> You may withdraw consent for data handling, subject to statutory retention guidelines and contractual obligations with active AMCs.</li>
                  </ul>
                </div>
              </div>

              {/* Section 9 */}
              <div id="cookies-tracking" className="p-8 rounded-2xl bg-card/40 border border-border/60 hover:border-primary/30 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/10 text-primary">
                    <Cookie className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">9. Cookies & Tracking Technologies</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Our website utilizes lightweight session and analytical cookies to ensure optimal performance, remember UI preferences (such as gallery filters), and analyze aggregate web traffic. We do NOT use invasive advertising tracking cookies.
                  </p>
                  <p>
                    You can instruct your web browser to refuse all cookies or notify you whenever a cookie is transmitted. Note that certain responsive UI features may have degraded performance if cookies are universally disabled.
                  </p>
                </div>
              </div>

              {/* Section 10 */}
              <div id="grievance-contact" className="p-8 rounded-2xl bg-gradient-to-br from-card/80 to-secondary/40 border border-primary/30 shadow-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-xl bg-primary/20 text-primary">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">10. Grievance Redressal Officer & Contact Channels</h2>
                </div>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    In compliance with the Information Technology Act, 2000 and consumer protection guidelines, the designated Data Grievance and Compliance Officer for Big Bull Investment is:
                  </p>

                  <div className="p-5 rounded-xl bg-background/80 border border-border text-xs space-y-2.5">
                    <p><strong className="text-foreground text-sm">Ujjal Biswas</strong> (Founder & Principal Advisory Lead)</p>
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
                      <span>Telephone / WhatsApp: <a href="tel:9088674067" className="text-primary hover:underline">9088674067</a></span>
                    </p>
                  </div>

                  <p className="text-xs">
                    All formal privacy grievances are acknowledged within <strong className="text-foreground">48 hours</strong> and resolved expeditiously within a maximum period of <strong className="text-foreground">30 calendar days</strong>.
                  </p>
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

export default PrivacyPolicy;
