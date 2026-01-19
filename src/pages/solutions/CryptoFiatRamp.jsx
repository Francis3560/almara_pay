import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Coins, RefreshCw, Smartphone, Building2, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CryptoFiatRamp = () => {
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
                OTC Product
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground leading-tight">
                Crypto ↔ Fiat <br />
                <span className="text-almara-gold">On-Ramp & Off-Ramp</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                AlmaraPay enables customers to buy digital assets like USDT using mobile money, 
                bank transfers, and approved agent channels, or sell them to receive instant 
                local currency settlement.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Start Transacting Now
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  View Live Rates
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Smartphone,
                title: "Buy with Mobile Money",
                desc: "Use M-Pesa, Airtel Money, and other local wallets to purchase digital assets instantly."
              },
              {
                icon: Building2,
                title: "Bank Transfer",
                desc: "Seamlessly integrate with your local bank for larger volume transactions."
              },
              {
                icon: Coins,
                title: "Approved Agent Channels",
                desc: "Transact through our network of trusted agents across the region."
              },
              {
                icon: RefreshCw,
                title: "Instant Off-Ramp",
                desc: "Sell your USDT and receive cash in your mobile money or bank account within minutes."
              },
              {
                icon: CheckCircle2,
                title: "Price Certainty",
                desc: "Rates are quoted and confirmed at transaction time, ensuring no slippage."
              },
              {
                icon: Building2,
                title: "Bank Settlement",
                desc: "Direct settlement to corporate or individual bank accounts across Africa."
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-background border border-border hover:border-almara-gold/40 transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon size={28} />
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

      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto rounded-[3rem] p-12 bg-gradient-to-br from-almara-navy to-black text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-almara-gold/10 blur-[100px]" />
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-display font-bold mb-6">
                  Ready to bridge the <span className="text-almara-gold">gap?</span>
                </h2>
                <p className="text-gray-400 text-lg mb-8">
                  Get started with AlmaraPay's OTC services today and experience 
                  seamless digital asset transactions.
                </p>
                <Button 
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-12 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Contact Our OTC Desk <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-almara-gold/20 flex items-center justify-center text-almara-gold">1</div>
                  <p className="font-medium text-gray-200">KCY/KYB Verification</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-almara-gold/20 flex items-center justify-center text-almara-gold">2</div>
                  <p className="font-medium text-gray-200">Request Quote</p>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-full bg-almara-gold/20 flex items-center justify-center text-almara-gold">3</div>
                  <p className="font-medium text-gray-200">Execute & Settle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CryptoFiatRamp;
