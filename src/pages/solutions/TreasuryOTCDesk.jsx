import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, ShieldCheck, Lock, Landmark, Briefcase, FileText } from "lucide-react";
import { useNavigate } from "react-router-dom";

const TreasuryOTCDesk = () => {
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
                Premium Service
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground leading-tight">
                High-Value & <br />
                <span className="text-almara-gold">Treasury OTC Desk</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Tailored for qualified clients and institutional partners. We support 
                large-volume OTC conversions and liquidity management with enhanced 
                controls, reduced slippage, and private execution.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Contact Treasury Desk
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Institutional Solutions
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              {
                icon: Briefcase,
                title: "Large-Volume Liquidity",
                desc: "Deep liquidity pools for high-value digital asset to fiat conversions."
              },
              {
                icon: BarChart3,
                title: "Institutional Management",
                desc: "Liquidity management tools for partners and fintechs across Africa."
              },
              {
                icon: ShieldCheck,
                title: "Enhanced Controls",
                desc: "Advanced reporting and compliance controls for institutional treasury."
              },
              {
                icon: Lock,
                title: "Private Execution",
                desc: "Reduce exposure to public exchange volatility with private desk transactions."
              },
              {
                icon: FileText,
                title: "Custom Reporting",
                desc: "Detailed transaction logs and accounting support for corporate compliance."
              },
              {
                icon: Landmark,
                title: "Fintech Partnership",
                desc: "Providing the infrastructure for other fintechs to offer digital asset services."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[2.5rem] bg-card border border-border hover:shadow-2xl transition-all"
              >
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-4xl font-display font-bold mb-6">Designed for <span className="text-almara-gold">Institutional Excellence</span></h2>
              <p className="text-lg text-muted-foreground mb-8">
                AlmaraPay's Treasury Desk provides the sophisticated tools and human expertise 
                required for large-scale operations. Our focus on compliance and stability makes 
                us the ideal partner for your high-value transactions.
              </p>
              <ul className="space-y-4 mb-10 text-foreground">
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"><CheckCircle2 size={16} /></div>
                  Dedicated account manager
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"><CheckCircle2 size={16} /></div>
                  Preferred rates for large volumes
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center"><CheckCircle2 size={16} /></div>
                  Priority settlement settlement
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="bg-secondary/50 p-1 rounded-3xl border border-border">
                <div className="bg-card p-8 rounded-[1.4rem]">
                   <h4 className="text-xl font-bold mb-6">Inquire with Treasury Desk</h4>
                   <form className="space-y-4">
                     <input type="text" placeholder="Full Name" className="w-full p-4 rounded-xl bg-background border border-border" />
                     <input type="email" placeholder="Work Email" className="w-full p-4 rounded-xl bg-background border border-border" />
                     <textarea placeholder="Tell us about your volume requirements..." className="w-full p-4 rounded-xl bg-background border border-border h-32"></textarea>
                     <Button className="w-full bg-almara-gold text-almara-navy h-12 rounded-xl font-bold">Submit Inquiry</Button>
                   </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

const CheckCircle2 = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
);

export default TreasuryOTCDesk;
