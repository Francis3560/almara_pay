import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Handshake,
  Lock,
  Code2,
  Zap,
  Headset,
  Globe,
  Puzzle,
} from "lucide-react";

const features = [
  {
    icon: Lock,
    title: "Secure Payments",
    description:
      "Every transaction is protected with industry-standard security to keep your funds and customers safe.",
  },
  {
    icon: Handshake,
    title: "Trusted Network",
    description:
      "Work with a payment partner trusted by merchants operating across multiple African markets.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Protection",
    description:
      "Built-in controls help reduce failed payments and protect your business from fraud.",
  },
  {
    icon: Code2,
    title: "Reliable API",
    description:
      "A simple, reliable API that lets you collect payments and pay out funds across multiple countries.",
  },
  {
    icon: Zap,
    title: "Swift and User-Friendly",
    description:
      "Fast transactions and an easy-to-use dashboard for tracking payments and payouts.",
  },
  {
    icon: Headset,
    title: "Round-the-Clock Support",
    description:
      "Dedicated support available whenever your business needs help.",
  },
  {
    icon: Globe,
    title: "High Availability",
    description:
      "A highly available platform built to handle business-critical payment flows.",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "Flexible payment solutions that adapt to how your business operates.",
  },
];

const WhyChooseUs = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-12 bg-background overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-almara-gold/5 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold mb-6"
          >
            Why choose <span className="text-almara-gold">AlmaraPay?</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
           AlmaraPay helps merchants collect and pay out money across Africa — reliably, securely, and at scale.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="p-8 rounded-2xl bg-secondary/5 border border-border/50 hover:border-almara-gold/30 hover:bg-secondary/10 transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-almara-gold/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
