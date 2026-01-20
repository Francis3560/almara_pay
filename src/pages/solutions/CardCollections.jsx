import React from "react";
import { motion } from "framer-motion";
import { CreditCard, Shield, Globe, Zap, ArrowRight, CheckCircle2 } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const CardCollections = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-almara-gold/10 border border-almara-gold/20 text-almara-gold text-xs font-bold uppercase tracking-widest mb-6">
              Global Payment Infrastructure
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Card Collections <br />
              <span className="text-almara-gold">& Payouts.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Pay and move money globally using AlmaraPay's flexible APIs and secure 
              online payment processing solutions for all major card networks.
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
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768814987/pexels-ivan-s-7620627_mgrzlj.jpg" 
                  alt="Card Payment Processing" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-almara-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>

            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-foreground">Accept cards from <span className="text-almara-gold">anywhere</span> in the world.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Accept international and local cards with fast checkout and high success rates.
              </p>

              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Supported Cards</h3>
                <div className="flex flex-wrap gap-3">
                  {["Visa", "Mastercard", "American Express"].map((card) => (
                    <div key={card} className="px-4 py-2 bg-secondary/50 rounded-lg border border-border text-sm font-medium">
                      {card}
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">What You Can Do</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Collect card payments globally",
                    "Reduce failed payments with smart routing",
                    "Monitor transactions and chargebacks",
                    "Settle securely and transparently"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="text-almara-gold shrink-0" size={20} />
                      <span className="text-foreground/80 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 border-t border-border">
                <h3 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">Best For</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Online merchants", 
                    "SaaS platforms", 
                    "Forex & digital services", 
                    "Global businesses selling into Africa"
                  ].map((item, i) => (
                    <span key={i} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-almara-gold/10 text-almara-gold border border-almara-gold/20">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Globe size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Global Acceptance</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Process payments from over 150 countries with optimized routing for maximum success rates.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Shield size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Smart Security</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Our AI-driven fraud engine analyzes every transaction in real-time to protect your revenue.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Unified API</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                One integration to access all card rails and local payment schemes across Africa.
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
              Ready to scale your card payments?
            </h2>
            <Button 
              size="lg"
              className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-12 h-16 rounded-full shadow-xl"
              onClick={() => navigate("/contact")}
            >
              Contact Sales <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default CardCollections;
