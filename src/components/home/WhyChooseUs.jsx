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
      "Your transactions are safeguarded with top-tier security at every step.",
  },
  {
    icon: Handshake,
    title: "Trusted Network",
    description:
      "Partner with a growing network of businesses that rely on AlmaraPay for efficient payment solutions.",
  },
  {
    icon: ShieldCheck,
    title: "Advanced Protection",
    description:
      "Benefit from cutting-edge fraud detection and secure transaction processing.",
  },
  {
    icon: Code2,
    title: "Reliable API",
    description:
      "AlmaraPay provides a secure and robust API, supporting diverse payment methods and multiple regions to cater to your needs.",
  },
  {
    icon: Zap,
    title: "Swift and User-Friendly",
    description:
      "Our platform ensures ultra-fast transaction times under 10 seconds with a user-friendly interface for effortless tracking and reconciliation.",
  },
  {
    icon: Headset,
    title: "Round-the-Clock Support",
    description:
      "Our dedicated support team is available 24/7 via Slack, Skype, chat, email, or phone to address your concerns promptly within minutes.",
  },
  {
    icon: Globe,
    title: "High Availability",
    description:
      "With optimized systems and robust gateways, AlmaraPay guarantees a reliable and highly accessible platform for uninterrupted service.",
  },
  {
    icon: Puzzle,
    title: "Tailored Solutions",
    description:
      "Customize our payment gateway to fit your business needs with flexible APIs and integration options for a seamless experience.",
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
            Experience seamless digital transactions with AlmaraPay — secure,
            dependable, and tailored for businesses of every scale.
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
