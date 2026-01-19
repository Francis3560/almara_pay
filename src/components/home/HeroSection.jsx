import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Shield,
  FileCheck,
  Clock,
  Star,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "../theme-provider";

const slides = [
  {
    heading: (
      <>
        Effortless Transactions <br />
        <span className="text-almara-gold italic">in the Digital Era.</span>
      </>
    ),
    subheading:
      "Transforming how you move money with secure OTC digital asset settlement across Africa.",
    bgDark:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768812003/Almara_hvbvr4.png",
    bgLight:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768812450/Almara_Transparent_ny77pp.png",
  },
  {
    heading: (
      <>
        Crypto ↔ Fiat <br />
        <span className="text-almara-gold">On-Ramp & Off-Ramp.</span>
      </>
    ),
    subheading:
      "Regulated OTC settlement via mobile money, bank rails, and verified agent networks.",
    bgDark:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768804322/Paystack_with_no_logo_mslob3.png",
    bgLight:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768812450/Paystack_Transparent_jwo9dc.png",
  },
];

const Hero = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const activeSlide = slides[currentSlide];
  const heroBackground =
    theme === "dark" ? activeSlide.bgDark : activeSlide.bgLight;

  return (
    <section className="relative min-h-screen flex items-start overflow-hidden pt-32 md:pt-40 bg-background text-foreground">
      {/* Background Image Carousel - Hidden on Mobile */}
      <AnimatePresence mode="wait">
        <motion.div
          key={heroBackground}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1.05 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${heroBackground})` }}
        />
      </AnimatePresence>

      {/* Enhanced Gradient Overlay - Theme Aware */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-almara-gold rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-primary/10 rounded-full animate-bounce"></div>
      </div>

      {/* Content - Left Aligned with Carousel Transitions */}
      <div className="relative z-10 w-full pl-4 sm:pl-8 lg:pl-12 flex flex-col">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 bg-secondary/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-border">
              <Star className="w-4 h-4 text-almara-gold fill-current" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Trusted by 12+ Businesses
              </span>
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.6 }}
            >
              {/* Main Heading */}
              <div className="space-y-4 mb-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight tracking-tight">
                  {activeSlide.heading}
                </h1>
              </div>

              {/* Subtitle with Features */}
              <div className="space-y-8 mb-10">
                <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground max-w-xl">
                  {activeSlide.subheading}
                </p>

                {/* Feature Points */}
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                    <ShieldCheck className="w-4 h-4 text-almara-gold" />
                    <span className="text-sm font-medium">
                      Bank-Grade Security
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/20 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                    <Clock className="w-4 h-4 text-almara-gold" />
                    <span className="text-sm font-medium">97.9% Up-time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start">
            <Button
              size="lg"
              className="bg-almara-gold hover:bg-almara-gold/90 text-almara-navy px-8 py-8 text-lg font-semibold rounded-full shadow-2xl transition-all duration-300 hover:scale-105 min-w-[200px] group border-0"
              onClick={() => navigate("/products")}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border bg-secondary/50 hover:bg-secondary text-foreground backdrop-blur-sm px-8 py-8 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 min-w-[200px] group"
              onClick={() => navigate("/contact")}
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Dots */}
      <div className="absolute bottom-12 right-12 z-30 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSlide(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === idx
                ? "bg-almara-gold w-8"
                : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

const PaymentMethods = () => (
  <div className="py-12 border-y border-border bg-secondary/30">
    <div className="container mx-auto px-4 text-center md:text-left">
      <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60 mb-8">
        OTC Settlement & Rail Infrastructure
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
        {[
          "Mobile Money",
          "Bank Transfer",
          "Agent Network",
          "Digital Assets (USDT/USDC)",
          "Treasury Desk",
        ].map((m) => (
          <div
            key={m}
            className="flex items-center gap-2 font-display font-medium text-lg text-foreground"
          >
            <div className="w-2 h-2 rounded-full bg-almara-gold"></div>
            {m}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const HeroSection = () => {
  return (
    <>
      <Hero />
      <PaymentMethods />
    </>
  );
};

export default HeroSection;
