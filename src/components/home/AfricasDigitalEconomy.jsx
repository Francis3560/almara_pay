import React from "react";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AfricasDigitalEconomy = () => {
  const navigate = useNavigate();
  return (
    <>
      {/* Infrastructure Section */}
      <section className="py-24 bg-background relative overflow-hidden border-y border-border">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-almara-gold/20 to-transparent"></div>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="aspect-square bg-secondary/30 border border-border rounded-full flex items-center justify-center relative">
                <div className="absolute inset-4 border border-almara-gold/10 rounded-full animate-pulse-slow"></div>
                <img
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768761961/Africa-removebg-preview_lukjni.png"
                  alt="Africa Map"
                  className="absolute w-2/3 h-2/3 object-contain opacity-20 filter dark:invert-0 invert"
                />
                <div className="absolute p-6 bg-card rounded-2xl border border-border shadow-2xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 max-w-xs text-center">
                  <ShieldCheck
                    className="mx-auto text-emerald-500 mb-4"
                    size={40}
                  />
                  <h4 className="font-bold mb-2 text-foreground">PCIDSS Compliant</h4>
                  <p className="text-sm text-muted-foreground">
                    Enterprise-grade security protecting every transaction.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-12 text-foreground">
                The Infrastructure Africa’s Digital Economy Deserves.
              </h2>
              <div className="space-y-8">
                {[
                  {
                    title: "Unrivaled Up-time",
                    desc: "Our redundant infrastructure ensures your business never stops, even during peak loads.",
                  },
                  {
                    title: "Direct Integrations",
                    desc: "We connect directly with banks and telcos to minimize failure points and maximize speed.",
                  },
                  {
                    title: "Dedicated Support",
                    desc: "Get priority technical support from engineers who understand the African market landscape.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-6">
                    <div className="shrink-0 w-8 h-8 rounded-full border border-almara-gold flex items-center justify-center text-almara-gold">
                      <ArrowRight size={16} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-foreground">{item.title}</h4>
                      <p className="text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section - Full Width */}
      <section className="relative py-32 overflow-hidden w-full">
        <div className="text-center relative overflow-hidden h-full min-h-[500px] flex items-center justify-center">
          {/* Background Image with No Opacity Filter */}
          <div className="absolute inset-0 z-0">
            <img 
              src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768815248/bottom-1-webp_gjbktx.webp" 
              alt="CTA Background" 
              className="w-full h-full object-cover"
            />
            {/* Subtle overlay for text legibility without heavy opacity */}
            <div className="absolute inset-0 bg-black/30"></div>
          </div>

          <div className="absolute -top-10 -right-10 w-64 h-64 border border-almara-gold/20 rounded-full z-10"></div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-20 max-w-5xl mx-auto px-4"
          >
            <h2 className="text-4xl md:text-7xl font-display font-extrabold mb-8 text-white drop-shadow-lg">
              Ready to scale across Africa?
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-2xl mx-auto drop-shadow-md">
              Join thousands of businesses that trust Almara Pay for their
              complex payment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button 
                onClick={() => navigate("/contact")}
                className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-12 h-16 text-lg rounded-2xl transition-transform hover:scale-105 shadow-2xl border-0"
              >
                Contact Our Sales Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AfricasDigitalEconomy;
