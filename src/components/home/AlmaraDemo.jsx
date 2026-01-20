import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const AlmaraDemo = () => {
  const navigate = useNavigate();

  const features = [
    "Collect payments using any payment channel of choice.",
    "Disburse funds across Africa to mobile money, bank, airtime, and more.",
    "Send transactional alerts or regular messages.",
  ];

  return (
    <section className="py-12 bg-background overflow-hidden">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight">
                Develop Seamless <br />
                Payments, <span className="text-foreground">Fast</span>
              </h2>
              {/* Decorative yellow curve match from reference image */}
              <div className="absolute -top-4 -right-8 w-10 h-10 border-t-4 border-r-4 border-almara-gold rounded-tr-full opacity-80"></div>
            </div>

            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                Our platform lets you build a single access point to accept or make payments 
                and connect to our global transactional alert ecosystem.
              </p>
              
              <p className="text-lg font-medium text-foreground">
                You can develop payment solutions for Africa that lets you:
              </p>

              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex items-start gap-3 group"
                  >
                    <div className="mt-1 bg-primary/10 p-1 rounded-full group-hover:bg-primary/20 transition-colors">
                      <CheckCircle2 className="w-5 h-5 text-almara-gold" />
                    </div>
                    <span className="text-muted-foreground leading-relaxed">
                      {feature}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <Button
              size="lg"
              variant="outline"
              onClick={() => navigate("/contact")}
              className="group rounded-full px-8 py-6 border-primary/20 hover:border-primary/50 text-primary font-bold transition-all duration-300"
            >
              <span>Start Building</span>
              <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </motion.div>

          {/* Visual Content - Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 30 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Decorative Element */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-almara-gold/20 to-transparent rounded-[2.5rem] blur-2xl -z-10"></div>
            
            <div className="relative rounded-2xl border border-border bg-card shadow-2xl overflow-hidden group">
              <img
                src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768763097/AlmaraDashboard_v2_w1d6tx.png"
                alt="Almara Pay Dashboard Demo"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
              />
              
              {/* Glassmorphic Overlay for specific sections highlight */}
              <div className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/10 transition-colors rounded-2xl pointer-events-none"></div>
            </div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-background border border-border p-4 rounded-2xl shadow-xl z-20 hidden md:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center">
                  <span className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></span>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">System Status</p>
                  <p className="text-sm font-bold text-foreground">Operational - 99.9%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AlmaraDemo;
