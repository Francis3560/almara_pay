import React from "react";
import { motion } from "framer-motion";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Users, ShieldCheck, UserCheck, BookOpen, HeartHandshake, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const AgentAssistedOTC = () => {
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
                Agent-Assisted <br />
                <span className="text-almara-gold">OTC Transactions</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
                Building trust through human-assisted execution. Our network of approved agents 
                and partners provides assisted transaction initiation, verification, and education 
                for first-time digital asset users.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button 
                  size="lg"
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Find an Agent
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-border hover:bg-secondary font-bold px-8 h-14 rounded-xl"
                  onClick={() => navigate("/contact")}
                >
                  Become an Agent
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
                icon: HeartHandshake,
                title: "Assisted Initiation",
                desc: "Get expert help with initiating your first digital asset transaction."
              },
              {
                icon: UserCheck,
                title: "In-Person KYC/KYB",
                desc: "Simplified verification through our trusted agent network."
              },
              {
                icon: BookOpen,
                title: "User Education",
                desc: "Learn about digital assets and security from our trained professionals."
              },
              {
                icon: Users,
                title: "Human Support",
                desc: "Real-time assistance during and after your transaction execution."
              },
              {
                icon: ShieldCheck,
                title: "Trusted Network",
                desc: "All agents are rigorously vetted and monitored for compliance."
              },
              {
                icon: HeartHandshake,
                title: "Market Support",
                desc: "Supporting markets with low self-serve adoption with reliable service."
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
          <div className="max-w-5xl mx-auto rounded-[3rem] p-12 bg-almara-navy text-white relative overflow-hidden">
             <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Extending the <span className="text-almara-gold">Human Touch</span> to Digital Finance
              </h2>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                AlmaraPay's agent-assisted model builds trust and ensures security in markets 
                where digital adoption is still growing. Our model aligns with regulator-friendly, 
                non-exchange positioning.
              </p>
              <Button 
                className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-12 rounded-xl"
                onClick={() => navigate("/contact")}
              >
                Learn More <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AgentAssistedOTC;
