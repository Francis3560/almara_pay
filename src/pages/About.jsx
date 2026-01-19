import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  ShieldCheck,
  Globe2,
  Building,
  Zap,
  Lock,
  Handshake,
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-display font-extrabold text-almara-gold mb-2">
      {value}
    </div>
    <div className="text-muted-foreground text-sm uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const About = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1] text-foreground">
                About <span className="text-almara-gold">AlmaraPay</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                AlmaraPay is a pioneering <span className="text-almara-gold font-semibold">OTC Digital Asset Exchange & Settlement</span> platform, 
                revolutionizing how African businesses and individuals interact with the global digital economy.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-almara-gold/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Services Overview Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-12 shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
                Bridging Fiat & Digital Assets
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center max-w-4xl mx-auto">
                AlmaraPay offers agent-assisted Over-The-Counter (OTC) digital asset services that enable 
                seamless conversion between local currency and digital assets, using trusted payment rails 
                across the continent.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <RefreshCw size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">On-Ramp & Off-Ramp</h3>
                      <p className="text-muted-foreground">
                        Buy and sell digital assets (USDT) using mobile money, bank transfers, and approved agent channels.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Agent-Assisted OTC</h3>
                      <p className="text-muted-foreground">
                        Human-assisted execution building trust in markets with low self-serve adoption.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Building size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">SME Settlement</h3>
                      <p className="text-muted-foreground">
                        Powerful tools for importers, exporters, and freelancers to manage international liquidity.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <ShieldCheck size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Compliance First</h3>
                      <p className="text-muted-foreground">
                        Risk-based KYC/KYB and AML screening integrated into every transaction flow.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Context Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Globe2 size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                Regulated Payment Rails for Digital Finance
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  AlmaraPay positions itself as a payments and settlement solution, not a speculative trading platform. 
                  We leverage regulated payment rails to ensure price certainty and reduced market slippage.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Our model extends AlmaraPay's APM and mobile money footprint while monetizing cross-border 
                  and crypto-linked flows for businesses of all sizes.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group border border-border shadow-2xl">
              <img
                src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768819874/AboutAlmara_Latest_p7uqr4.png"
                alt="Global Compliance and Security Standards"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background/90 via-background/40 to-transparent backdrop-blur-[2px]">
                <div className="flex items-center gap-4 text-foreground">
                  <div className="w-12 h-12 rounded-xl bg-almara-gold/20 flex items-center justify-center text-almara-gold border border-almara-gold/30">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold">Institutional Integrity</h3>
                    <p className="text-xs uppercase tracking-wider text-muted-foreground">KYC | KYB | AML | SANCTIONS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-display font-bold mb-12 text-foreground">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { icon: Zap, title: "Innovation", description: "Continuously evolving our rail infrastructure to support the next generation of digital finance." },
              { icon: Lock, title: "Trust", description: "Building human-assisted execution models to ensure security and peace of mind." },
              { icon: Handshake, title: "Excellence", description: "Delivering institutional-grade treasury and settlement services to our partners." },
              { icon: Scale, title: "Compliance", description: "Strict adherence to market-by-market regulatory alignment and integrity standards." }
            ].map((value, idx) => (
              <div key={idx} className="bg-card border border-border rounded-2xl p-8 hover:border-almara-gold/40 transition-all text-left">
                <div className="w-14 h-14 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="bg-card border border-border rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">Mission</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  To provide the most secure and efficient bridge between local currencies and 
                  global digital asset liquidity for businesses across Africa.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <Globe2 size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6">Vision</h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Becoming the primary settlement infrastructure for the next billion users 
                  entering the digital asset ecosystem.
                </p>
              </div>
            </div>

            <div className="bg-almara-navy border border-border rounded-[3rem] p-12 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden">
               <div className="relative z-10 text-white">
                <div className="w-32 h-32 mx-auto mb-8 bg-almara-gold/20 rounded-full flex items-center justify-center">
                  <Building size={80} className="text-almara-gold" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Building the Future of Settlements</h3>
                <p className="text-gray-400">Join us in revolutionizing cross-border flows using digital asset technology.</p>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-almara-gold/10 to-transparent pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <Stat label="Active Markets" value="15+" />
            <Stat label="Agent Network" value="500+" />
            <Stat label="Transactions Processed" value="$1B+" />
            <Stat label="Compliance Score" value="99.9%" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background text-foreground">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8">
              Ready to Bridge Local Fiat to Digital Liquidity?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Partner with AlmaraPay for secure, compliant, and efficient OTC settlement services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/products")}
                className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-10 h-14 text-lg"
              >
                Explore Products
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/contact")}
                className="border-almara-gold/50 text-almara-gold hover:bg-almara-gold/10 font-bold px-10 h-14 text-lg"
              >
                Contact OTC Desk
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Custom icons
const RefreshCw = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
);

const Scale = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"></path><path d="M7 21h10"></path><path d="M12 3v18"></path><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"></path></svg>
);

export default About;