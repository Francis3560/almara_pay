import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, ShoppingBag, Globe, Zap, Wallet, Landmark, LineChart } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SMEMerchantOTC = () => {
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
                Business Product
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground leading-tight">
                SME & Merchant <br />
                <span className="text-almara-gold">OTC Services</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Empowering African businesses to manage cross-border settlements, 
                imports, and liquidity using digital assets. Ideal for importers, 
                exporters, freelancers, and remote workers.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Open Business Account
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  SME Solutions
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
                icon: Globe,
                title: "Cross-Border Settlement",
                desc: "Convert local currency to USDT for seamless international supplier payments."
              },
              {
                icon: Wallet,
                title: "Local Cash Out",
                desc: "Receive digital assets from international partners and cash out to local currency effortlessly."
              },
              {
                icon: Zap,
                title: "Liquidity Management",
                desc: "Optimized liquidity for imports, services, and remote work payroll."
              },
              {
                icon: ShoppingBag,
                title: "Merchant Gateway",
                desc: "Accept digital payments and settle in the currency that works best for your business."
              },
              {
                icon: Landmark,
                title: "Treasury Support",
                desc: "Manage your business treasury with stable digital assets to reduce volatility exposure."
              },
              {
                icon: LineChart,
                title: "Growth Scale",
                desc: "Built for scale, supporting everything from small shops to large marketplaces."
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

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-10 rounded-3xl bg-almara-gold/5 border border-almara-gold/10">
              <h4 className="text-xl font-bold mb-2">Importers & Exporters</h4>
              <p className="text-sm text-muted-foreground">Simplify your trade finance and supplier payments across borders.</p>
            </div>
            <div className="p-10 rounded-3xl bg-almara-gold/5 border border-almara-gold/10">
              <h4 className="text-xl font-bold mb-2">Freelancers & Remote Workers</h4>
              <p className="text-sm text-muted-foreground">Receive your global earnings and withdraw in local currency instantly.</p>
            </div>
            <div className="p-10 rounded-3xl bg-almara-gold/5 border border-almara-gold/10">
              <h4 className="text-xl font-bold mb-2">Marketplaces</h4>
              <p className="text-sm text-muted-foreground">Enable digital asset payments for your vendors and customers.</p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default SMEMerchantOTC;
