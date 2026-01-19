import React from "react";
import { motion } from "framer-motion";
import { Smartphone, Shield, Zap, ArrowRight, CheckCircle2, MessageSquare } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const MobileMoney = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-almara-gold/10 border border-almara-gold/20 text-almara-gold text-xs font-bold uppercase tracking-widest mb-6">
              Africa's Preferred Payment Rail
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Mobile Money <br />
              <span className="text-almara-gold">Collections.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Accept payments across Africa’s most popular mobile money networks. 
              Reliable collections and instant disbursements for your business.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <div className="space-y-8">
              <h2 className="text-4xl font-display font-bold text-foreground">Reach <span className="text-almara-gold">Millions</span> of mobile users instantly.</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Mobile money is the heartbeat of African commerce. With AlmaraPay, you get a 
                single integration to all major telcos, ensuring your customers can pay with ease.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "M-Pesa, MTN, Airtel",
                  "Instant C2B Push",
                  "Bulk B2C Payouts",
                  "Real-time Settlement",
                  "Automated Reconciliations",
                  "High Success Rates"
                ].map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-almara-gold shrink-0" size={20} />
                    <span className="text-foreground/80 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-[3rem] overflow-hidden border border-border">
                <img 
                  src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768814788/pexels-viktoria-slowikowska-5332483_puifez.jpg" 
                  alt="Mobile Money Interaction" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-almara-gold/10 rounded-full blur-3xl pointer-events-none"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Zap size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">Instant Fulfillment</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Receive instant webhooks for every payment, allowing you to provide services to your customers immediately.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Smartphone size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">B2C Disbursements</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Paying out to thousands of people? Our bulk transfer tools handle massive volumes gracefully.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-card border border-border">
              <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-xl font-bold mb-3 text-foreground">USSD Integration</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Support for customers without internet access through our optimized USSD payment flows.
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
              Level up your mobile payments.
            </h2>
            <Button 
              size="lg"
              className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-12 h-16 rounded-full shadow-xl"
              onClick={() => navigate("/contact")}
            >
              Start Collecting <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default MobileMoney;
