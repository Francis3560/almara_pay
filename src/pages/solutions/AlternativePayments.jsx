import React from "react";
import { motion } from "framer-motion";
import { LayoutGrid, Shield, Zap, ArrowRight, CheckCircle2, Cpu } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AlternativePayments = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-almara-gold/10 border border-almara-gold/20 text-almara-gold text-xs font-bold uppercase tracking-widest mb-6">
              Custom-Built Fintech
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Alternative <br />
              <span className="text-almara-gold">Payments.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Tailor-made payment infrastructure for businesses with unique requirements. 
              Whatever your flow, we build the bridge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-border">
                <img 
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768820559/pexels-energepic-com-27411-2988232_mhgjcw.jpg" 
                  alt="Custom Payment Tech" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-almara-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-foreground">Beyond <span className="text-almara-gold">Standard</span> solutions.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Some businesses don't fit into a box. We provide consulting and technical 
                engineering to build payment rails that fit your specific business model.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Custom Gateway Dev",
                  "White-label Solutions",
                  "Enterprise Integrations",
                  "Blockchain Payouts",
                  "Escrow Services",
                  "Specialized Compliance"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-almara-gold shrink-0" size={20} />
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Cpu size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Advanced Engineering</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our team works directly with yours to engineer custom settlement logic and reconciliation engines.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <LayoutGrid size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Modular Architecture</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Pick and choose the components you need, from KYC to Treasury management.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Regulatory Sandbox</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Leverage our licenses and compliance frameworks to launch new products faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-foreground">
              Have a unique payment project?
            </h2>
            <Button 
              size="lg"
              className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-12 h-16 rounded-full shadow-xl"
              onClick={() => navigate("/contact")}
            >
              Consult with Us <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AlternativePayments;
