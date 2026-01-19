import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Eye, Search, Scale, FileCheck2, Landmark } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ComplianceModel = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-almara-gold/5 to-transparent pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-almara-gold/10 text-almara-gold text-sm font-bold uppercase tracking-wider mb-6">
                Operational Framework
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground leading-tight">
                Compliance-First <br />
                <span className="text-almara-gold">Operating Model</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                AlmaraPay positions itself as a payments and settlement solution, 
                not a speculative trading platform. Our services operate under a 
                robust, risk-based compliance framework aligned with market regulators.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Review Our Standards
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Compliance Inquiries
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             {[
              {
                icon: FileCheck2,
                title: "Risk-Based KYC / KYB",
                desc: "Thorough verification processes for both individual customers and corporate entities to Ensure safety."
              },
              {
                icon: Eye,
                title: "Transaction Monitoring",
                desc: "Real-time surveillance of all transaction flows to detect and prevent suspicious activities."
              },
              {
                icon: Search,
                title: "Sanctions & AML Screening",
                desc: "Rigorous automated checks against international sanctions lists and anti-money laundering protocols."
              },
              {
                icon: Scale,
                title: "Regulatory Alignment",
                desc: "Market-by-market compliance that ensures we operate within the legal frameworks of every region we serve."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-3xl bg-background border border-border flex gap-8 items-start hover:border-almara-gold transition-colors"
              >
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold shrink-0">
                  <feature.icon size={32} />
                </div>
                <div>
                   <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                   <p className="text-muted-foreground leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center border p-12 rounded-[3rem] bg-almara-gold/5 border-almara-gold/20">
             <ShieldCheck className="w-20 h-20 text-almara-gold mx-auto mb-8" />
             <h2 className="text-3xl font-display font-bold mb-6">Our Position</h2>
             <p className="text-lg text-muted-foreground leading-relaxed">
               "AlmaraPay is a payments and settlement company. We use technology 
               to bridge the gap between local currencies and global digital asset liquidity, 
               enabling trade and financial inclusion while adhering to the highest 
               standards of financial integrity."
             </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ComplianceModel;
