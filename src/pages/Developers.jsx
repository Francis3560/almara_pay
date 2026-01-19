import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Terminal,
  Code2,
  Cpu,
  Laptop,
  FileText,
  Blocks,
  Zap,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const CodeSnippet = ({ code, language = "javascript" }) => (
  <div className="bg-[#0d0d1f] rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
    <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border-b border-white/10">
      <div className="flex gap-1.5">
        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
      </div>
      <span className="text-xs text-almara-lightGrey font-mono ml-4">
        {language}
      </span>
    </div>
    <pre className="p-6 font-mono text-sm overflow-x-auto text-emerald-400">
      <code>{code}</code>
    </pre>
  </div>
);

const Developers = () => {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-almara-gold/10 border border-almara-gold/20 text-almara-gold text-xs font-bold uppercase tracking-widest mb-6">
              OTC Digital Asset Exchange & Settlement
            </div>
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Institutional-Grade <br />
              <span className="text-almara-gold">Settlement Services.</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              AlmaraPay offers agent-assisted Over-The-Counter (OTC) digital asset services that enable 
              individuals and businesses to seamlessly convert local currency to digital assets and back, 
              using trusted payment rails across Africa.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 1. Crypto Fiat Ramp */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <RefreshCw size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">1. Crypto ↔ Fiat OTC</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Buy USDT with mobile money, bank filters, or agent channels. Sell for instant local currency payout with price certainty.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Mobile money & Bank transfer
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Approved agent channels
                </li>
                <li className="flex items-center gap-2 text-almara-gold font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Zero market slippage
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/crypto-fiat-ramp")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>

            {/* 2. Agent-Assisted */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <Users size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">2. Agent-Assisted OTC</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Trust-based execution through verified partners for markets with low self-serve adoption.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Assisted initiation & execution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Human-verified KYC/KYB
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  User education & orientation
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/agent-assisted-otc")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>

            {/* 3. SME & Merchant */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <Building size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">3. SME & Merchant OTC</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Liquidity management for cross-border settlements, imports, and remote work payments.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Importers & Exporters
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Freelancers & Remote workers
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Marketplaces & Digital merchants
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/sme-merchant-otc")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>

            {/* 4. Remittance OTC */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <Globe size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">4. Remittance Settlement</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Crypto-powered remittances with local currency payout via mobile money or bank.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Faster, low-cost settlement
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Mobile money/Bank distribution
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Assisted agent payouts
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/remittance-settlement")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>

            {/* 5. Treasury Desk */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <Wallet size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">5. Treasury OTC Desk</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Large-volume conversions and liquidity management for partners and fintechs.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  High-volume execution
                </li>
                <li className="flex items-center gap-2 text-almara-gold font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Reduced volatility exposure
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Enhanced controls & reporting
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/treasury-otc-desk")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>

            {/* 6. Compliance */}
            <div className="p-10 rounded-[2.5rem] bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 shadow-xl group">
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8 group-hover:scale-110 transition-transform">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">6. Compliance-First</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Risk-based operating model ensuring regulatory alignment in every market we serve.
              </p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Risk-based KYC / KYB
                </li>
                <li className="flex items-center gap-2 text-emerald-500 font-semibold">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  Sanctions & AML screening
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-almara-gold" />
                  Transaction monitoring
                </li>
              </ul>
              <Button 
                variant="link" 
                className="mt-6 text-almara-gold p-0 font-bold hover:gap-3 transition-all group-hover:translate-x-1"
                onClick={() => navigate("/services/compliance-model")}
              >
                Learn More <ArrowRight size={18} className="ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-[3rem] p-12 bg-almara-navy text-white relative overflow-hidden shadow-2xl">
            <div className="relative z-10">
              <h2 className="text-3xl font-display font-bold mb-8 text-almara-gold">Strategic Value</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-almara-gold" size={20} />
                    <span>Extends APM and mobile money footprint</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-almara-gold" size={20} />
                    <span>Monetizes cross-border and crypto-linked flows</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Zap className="text-almara-gold" size={20} />
                    <span>Supports financial inclusion and SME growth</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="text-almara-gold" size={20} />
                    <span>Regulator-friendly positioning</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-almara-gold/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-display font-bold mb-8 text-foreground">Ready to Bridge Your Finance?</h2>
          <Button 
            size="lg"
            className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-12 h-16 rounded-full"
            onClick={() => navigate("/contact")}
          >
            Contact OTC Desk
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

const RefreshCw = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"></path><path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path><path d="M3 22v-6h6"></path><path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path></svg>
);

const Wallet = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
);

const Globe = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20"></path><path d="M2 12h20"></path></svg>
);

const Users = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
);

const Building = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg>
);

export default Developers;

const Smartphone = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>
);

