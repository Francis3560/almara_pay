import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Cpu,
  Laptop,
  FileText,
  Blocks,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const CodeSnippet = ({ code, language = "javascript" }) => (
  <div className="bg-[#0d0d1f] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
      </div>
      <span className="text-xs text-almara-lightGrey font-mono ml-4">
        {language}
      </span>
    </div>
    <pre className="p-6 font-mono text-sm overflow-x-auto text-emerald-400">
      <code>{code}</code>
    </pre>
  </div>
);

const Developers = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-almara-gold/10 border border-almara-gold/20 text-almara-gold text-xs font-bold uppercase tracking-widest mb-6">
                Institutional Services
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
                Settlement Rails for <br />
                <span className="text-almara-gold">Digital Assets.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                AlmaraPay provides institutional-grade liquidity and settlement infrastructure, 
                bridging the gap between traditional fiat systems and the digital economy.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl border-0"
                >
                  Contact Our Desk
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-[2.5rem] p-12 relative overflow-hidden shadow-2xl"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <Globe size={32} />
                </div>
                <h3 className="text-3xl font-display font-bold mb-6 text-foreground">Global Liquidity, Local Settlement</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  Access deep liquidity pools through our regulated OTC desk while settling instantly 
                  in local currencies via AlmaraPay's established payment rails.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-background/50 p-4 rounded-xl border border-border">
                    <div className="text-almara-gold font-bold mb-1">99.9%</div>
                    <div className="text-xs uppercase tracking-tighter text-muted-foreground">Price Certainty</div>
                  </div>
                  <div className="bg-background/50 p-4 rounded-xl border border-border">
                    <div className="text-almara-gold font-bold mb-1">20+</div>
                    <div className="text-xs uppercase tracking-tighter text-muted-foreground">Markets Supported</div>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-almara-gold/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features Grids repurposed as Core Pillars */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Settlement",
                desc: "Average transaction completion time in minutes across all supported regions.",
              },
              {
                icon: ShieldCheck,
                title: "Deep Liquidity",
                desc: "Institutional partnerships ensure minimal slippage even for high-value orders.",
              },
              {
                icon: Smartphone,
                title: "APM Integration",
                desc: "Seamlessly move between Mobile Money and Digital Asset rails.",
              },
              {
                icon: Building,
                title: "SME Focused",
                desc: "Optimized for the needs of importers, exporters, and freelancers.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-card border border-border hover:border-almara-gold/20 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-almara-gold/5 flex items-center justify-center text-almara-gold mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 text-foreground">
              Comprehensive <span className="text-almara-gold">OTC Services</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              AlmaraPay provides a suite of services designed for the modern African digital economy, 
              ensuring price certainty, institutional security, and regulatory transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Remittance Settlement",
                desc: "Optimizing cross-border flows for licensed remittance providers with instant digital asset backends.",
                icon: Globe,
              },
              {
                title: "Treasury OTC Desk",
                desc: "High-value execution for corporate entities and institutional partners with dedicated account management.",
                icon: Building,
              },
              {
                title: "Compliance Model",
                desc: "A risk-based framework for KYC, KYB, and AML screening integrated into every settlement flow.",
                icon: ShieldCheck,
              },
              {
                title: "Liquidity Provision",
                desc: "Consistent market liquidity for partners requiring digital asset on-ramp and off-ramp capabilities.",
                icon: Zap,
              },
              {
                title: "Agent Settlement",
                desc: "Physical infrastructure support for cash-to-digital conversions via verified agent terminals.",
                icon: Laptop,
              },
              {
                title: "Merchant APIs",
                desc: "Automated settlements for e-commerce platforms and merchants accepting digital asset payments.",
                icon: Cpu,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-3xl bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 text-center shadow-lg hover:shadow-almara-gold/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Workflow repurposed for Onboarding */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-20 text-foreground">
            Onboarding <span className="text-almara-gold">Process</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative text-foreground">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-border z-0"></div>

            {[
              {
                step: "01",
                title: "KYC/KYB Verification",
                desc: "Submit your institutional or individual documentation for compliance screening.",
              },
              {
                step: "02",
                title: "Liquidity Access",
                desc: "Get access to our live OTC rates and dedicated settlement channels.",
              },
              {
                step: "03",
                title: "Execute & Settle",
                desc: "Initiate your transaction and receive settlement in your preferred local currency.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-background border border-almara-gold flex items-center justify-center mx-auto mb-8 shadow-lg shadow-almara-gold/10">
                  <span className="text-2xl font-display font-bold text-almara-gold">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrity note */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 border border-almara-gold/20 bg-almara-gold/5 flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Institutional Integrity & Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                AlmaraPay operates as a pure settlement rail, not a speculative exchange. 
                We adhere to strict market-by-market regulatory alignment and integrity standards. 
                Your digital asset transactions are handled with the highest level of risk management.
              </p>
              <div className="mt-6 flex items-center gap-4 text-almara-gold font-bold group cursor-pointer" onClick={() => navigate("/contact")}>
                Inquire About Compliance Standards{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const Globe = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20"></path><path d="M2 12h20"></path></svg>
);

const Smartphone = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
);

export default Developers;
