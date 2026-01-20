import React from "react";
import { Zap, Smartphone, Building2 } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="p-8 rounded-3xl bg-secondary/20 border border-border hover:border-almara-gold/30 transition-all group">
    <div className="w-14 h-14 rounded-2xl bg-almara-gold/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform text-almara-gold">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl font-bold font-display mb-4">{title}</h3>
    <p className="text-muted-foreground leading-relaxed">{desc}</p>
  </div>
);

const FeaturedBusinesses = () => {
  return (
    <section className="py-12 lg:py-20">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-6">
            Designed for Every Phase of Your Business.
          </h2>
          <p className="text-muted-foreground text-lg">
            From small startups to multinational enterprises, Almara Pay provides
            the tools you need to move money across borders.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <FeatureCard
            icon={Zap}
            title="Online Payments"
            desc="Accept payments via Cards, Mobile Money, and Bank Transfers with a single, seamless checkout experience."
          />
          <FeatureCard
            icon={Smartphone}
            title="C2B / B2C Collections"
            desc="Integrate with major telecom providers for lightning-fast mobile money collections and payouts."
          />
          <FeatureCard
            icon={Building2}
            title="Enterprise Payouts"
            desc="Automate payroll, vendor payments, and customer refunds at scale with real-time settlement tracking."
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
