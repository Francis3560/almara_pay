import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Landmark, Smartphone, Zap, Shield, Clock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const RemittanceSettlement = () => {
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
                OTC Service
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground leading-tight">
                Remittance-Linked <br />
                <span className="text-almara-gold">OTC Settlement</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Crypto-powered remittances providing faster settlement and lower costs 
                compared to traditional channels. Beneficiaries receive local currency 
                via mobile money or bank, facilitated by assisted payout where required.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Start Remittance Flow
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Partner With Us
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Send,
                title: "Digital Send",
                desc: "Send funds digitally using stable assets for near-instant transit."
              },
              {
                icon: Smartphone,
                title: "Mobile Payout",
                desc: "Beneficiaries receive funds directly into their mobile money wallets."
              },
              {
                icon: Landmark,
                title: "Bank Payout",
                desc: "Direct-to-bank settlements for high-value remittances."
              },
              {
                icon: Zap,
                title: "Fast Settlement",
                desc: "Minutes, not days. Bypass traditional banking delays."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-border hover:border-almara-gold/40 transition-all group text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6 group-hover:scale-110 transition-transform mx-auto">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
           <h2 className="text-3xl font-display font-bold mb-12">Why AlmaraPay Remittance?</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
             <div className="space-y-4">
               <div className="w-12 h-12 bg-green-500/10 text-green-500 rounded-full flex items-center justify-center mx-auto">
                 <Shield size={24} />
               </div>
               <h4 className="text-lg font-bold">Secure & Tracked</h4>
               <p className="text-muted-foreground">End-to-end encryption and compliance monitoring.</p>
             </div>
             <div className="space-y-4">
               <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-full flex items-center justify-center mx-auto">
                 <Clock size={24} />
               </div>
               <h4 className="text-lg font-bold">Lower Costs</h4>
               <p className="text-muted-foreground">Up to 70% cheaper than traditional remittance services.</p>
             </div>
             <div className="space-y-4">
               <div className="w-12 h-12 bg-purple-500/10 text-purple-500 rounded-full flex items-center justify-center mx-auto">
                 <Zap size={24} />
               </div>
               <h4 className="text-lg font-bold">Instant Payout</h4>
               <p className="text-muted-foreground">Funds are available to the beneficiary immediately upon confirmation.</p>
             </div>
           </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default RemittanceSettlement;
