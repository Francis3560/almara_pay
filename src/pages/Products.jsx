import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  CreditCard,
  Smartphone,
  Globe,
  Landmark,
  LayoutGrid,
  ArrowRight,
  Shield,
  Wallet,
  SmartphoneIcon,
  Zap,
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const ProductSection = ({
  icon: Icon,
  title,
  tag,
  description,
  features,
  imageUrl,
  imageAlt,
  imageSide = "right",
}) => (
  <section className="py-24 border-b border-border last:border-0">
    <div className="container mx-auto px-4">
      <div
        className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${imageSide === "left" ? "lg:flex-row-reverse" : ""}`}
      >
        <div className={imageSide === "left" ? "order-2" : "order-1"}>
          <div className="text-almara-gold font-bold text-sm tracking-widest uppercase mb-4">
            {tag}
          </div>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold">
              <Icon size={24} />
            </div>
            <h2 className="text-4xl font-display font-extrabold text-foreground">{title}</h2>
          </div>
          <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
            {description}
          </p>
          <ul className="space-y-4 mb-10">
            {features.map((f, i) => (
              <li
                key={i}
                className="flex items-center gap-3 text-foreground/80"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                  <Shield size={12} />
                </div>
                {f}
              </li>
            ))}
          </ul>

        </div>

        <div
          className={`order-3 ${imageSide === "left" ? "lg:order-1" : "lg:order-2"}`}
        >
          <div className="aspect-[4/3] bg-card border border-border rounded-[2rem] relative overflow-hidden group shadow-xl">
            {/* Background Image */}
            <img
              src={imageUrl}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Gradient Overlay - Adaptive */}
            <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-background/20 to-transparent"></div>
            
            {/* Floating UI Elements */}
            <div className="absolute top-1/4 left-1/4 w-48 h-32 bg-background/10 backdrop-blur-sm rounded-xl border border-foreground/10 transform -rotate-6 group-hover:rotate-0 transition-all duration-500"></div>
            <div className="absolute bottom-1/4 right-1/4 w-56 h-40 bg-almara-gold/5 backdrop-blur-sm rounded-2xl border border-almara-gold/20 transform rotate-3 group-hover:rotate-0 transition-all duration-500 delay-100"></div>
            
            {/* Product Icon Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-almara-gold/20 backdrop-blur-md rounded-2xl border border-almara-gold/30 flex items-center justify-center">
              <Icon className="w-10 h-10 text-almara-gold" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description, gradient }) => (
  <motion.div
    whileHover={{ y: -5 }}
    className="bg-card border border-border rounded-2xl p-8 shadow-sm hover:border-almara-gold/40 transition-all duration-300"
  >
    <div className={`w-14 h-14 ${gradient} rounded-xl flex items-center justify-center mb-6`}>
      <Icon className="w-7 h-7 text-foreground" />
    </div>
    <h3 className="text-xl font-display font-bold mb-4 text-foreground">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </motion.div>
);

const Products = () => {
  const navigate = useNavigate();
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-background py-24 relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground"
          >
            Digital Asset Solutions for <br />
            <span className="text-almara-gold">Africa's</span> Economy.
          </motion.h1>
          <p className="max-w-2xl mx-auto text-muted-foreground text-xl">
            AlmaraPay offers Over-The-Counter (OTC) digital asset services that enable 
            seamless conversion between local currency and digital assets.
          </p>
        </div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,_var(--tw-gradient-from)_0%,_transparent_40%)] from-almara-gold/10 pointer-events-none"></div>
      </section>

      {/* Crypto-Fiat Ramp */}
      <ProductSection
        tag="On-Ramp & Off-Ramp"
        icon={RefreshCw}
        title="Crypto ↔ Fiat OTC Solutions"
        description="Enable your customers to buy and sell digital assets like USDT using mobile money, bank transfers, and approved agent channels with guaranteed price certainty."
        features={[
          "Buy USDT with Mobile Money & Bank Transfer",
          "Sell USDT for instant local currency payout",
          "Real-time quoted rates with zero slippage",
          "Approved agent channels for physical cash in/out",
          "Settlement to bank accounts across 20+ markets",
          "Risk-based KYC/KYB integrated flows"
        ]}
        imageUrl="https://images.unsplash.com/photo-1621416894569-0f39ed31d247?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Digital asset exchange"
      />

      {/* Agent Assisted */}
      <ProductSection
        tag="Human-Assisted"
        icon={Users}
        title="Agent-Assisted OTC Transactions"
        imageSide="left"
        description="Building trust in emerging markets through a network of verified agents who facilitate transaction initiation, verification, and user education."
        features={[
          "Assisted transaction initiation and execution",
          "Human-verified KYC and documentation",
          "Face-to-face education for new digital asset users",
          "Support for markets with low self-serve adoption",
          "Rigorous agent vetting and monitoring",
          "Offline-to-online digital finance bridge"
        ]}
        imageUrl="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
        imageAlt="Agent assisted transactions"
      />

      {/* SME & Merchant */}
      <ProductSection
        tag="Enterprise"
        icon={Building}
        title="SME & Merchant OTC Services"
        description="Powerful liquidity management for businesses handling cross-border settlements, imports, and remote work payments."
        features={[
          "Bulk local-to-USDT conversions for imports",
          "Receive international payments and cash out locally",
          "Liquidity management for freelancing platforms",
          "Reduced exposure to public exchange volatility",
          "Detailed corporate reporting and auditing",
          "Preferred rates for high-volume transactions"
        ]}
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1415&q=80"
        imageAlt="Business liquidity management"
      />

      {/* Additional Features Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-almara-gold/10 text-almara-gold font-bold text-sm tracking-widest uppercase px-4 py-2 rounded-full mb-4">
              <Shield size={16} />
              Strategic OTC Value
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
              Regulator-Friendly <span className="text-almara-gold">Settlement</span> Infrastructure
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={Zap}
              title="APM Footprint"
              description="Extending AlmaraPay's mobile money footprint through digital asset rail integration."
              gradient="bg-gradient-to-br from-blue-500/20 to-cyan-500/20"
            />
            
            <FeatureCard
              icon={Globe}
              title="Cross-Border Flows"
              description="Monetizing crypto-linked flows while ensuring compliance and transparency."
              gradient="bg-gradient-to-br from-emerald-500/20 to-green-500/20"
            />
            
            <FeatureCard
              icon={Users}
              title="Financial Inclusion"
              description="Supporting SME growth by providing access to global digital liquidity."
              gradient="bg-gradient-to-br from-purple-500/20 to-pink-500/20"
            />
            
            <FeatureCard
              icon={Shield}
              title="Non-Exchange Positioning"
              description="Built as a settlement solution, not a speculative platform, ensuring regulatory trust."
              gradient="bg-gradient-to-br from-amber-500/20 to-orange-500/20"
            />
          </div>
        </div>
      </section>

      {/* Contact Sales CTA */}
      <section className="py-24 bg-secondary/10 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
              Ready to execute your first transaction?
            </h2>
            <p className="text-muted-foreground mb-10 text-lg">
              Contact our OTC desk to get verified and start convertion local currency to digital assets today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => navigate("/contact")}
                className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-10 h-14 rounded-xl shadow-lg transition-all border-0"
              >
                Get Started with OTC <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

// Custom icons
const RefreshCw = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
);

const Building = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
);

export default Products;