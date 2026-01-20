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
import ReactCountryFlag from "react-country-flag";

const slides = [
  {
    heading: (
      <>
        Mobile Money <br />
        <span className="text-almara-gold">Collections.</span>
      </>
    ),
    subheading:
      "Accept payments across Africa’s most popular mobile money networks. Reliable collections and instant disbursements for your business.",
    bgDark:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768812003/Almara_hvbvr4.png",
    bgLight:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768812450/Almara_Transparent_ny77pp.png",
  },
  {
    heading: (
      <>
        Card Collections <br />
        <span className="text-almara-gold">& Payouts.</span>
      </>
    ),
    subheading:
      "Global payment infrastructure supporting Visa, Mastercard, and Verve. Pay and move money globally using secure online payment processing solutions.",
    bgDark:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768906125/Carousel_wesfiz.png",
    bgLight:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768906125/Carousel_wesfiz.png",
  },
  {
    heading: (
      <>
        Crypto ↔ Fiat <br />
        <span className="text-almara-gold">On-Ramp & Off-Ramp.</span>
      </>
    ),
    subheading:
      "Regulated OTC settlement via mobile money, bank rails, and verified agent networks. Buy and sell digital assets with instant settlement.",
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
    <section className="relative min-h-screen flex items-start overflow-hidden pt-32 md:pt-40 bg-background text-foreground px-4">
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
      <div className="relative z-10 w-full flex flex-col">
        <div className="max-w-3xl">
          {/* Trust Badge */}
          <div className="flex items-center gap-2 mb-6">
            <div className="flex items-center gap-2 bg-secondary/30 backdrop-blur-md px-4 py-1.5 rounded-full border border-border">
              <Star className="w-4 h-4 text-almara-gold fill-current" />
              <span className="text-xs font-semibold tracking-wide uppercase">
                Trusted by 12+ Countries
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
                    <span className="text-sm font-medium">99.9% Up-time</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-wrap gap-4 items-start pb-8 mx-auto w-full">
            <Button
              size="lg"
              className="bg-almara-gold w-full sm:max-w-[200px] rounded-lg"
              onClick={() => navigate("/products")}
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border border-almara-gold w-full sm:max-w-[200px] rounded-lg"
              onClick={() => navigate("/contact")}
            >
              <span>Contact Sales</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Dots
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
      </div> */}

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1.5 h-3 bg-white/70 rounded-full animate-pulse"></div>
        </div>
      </div> */}
    </section>
  );
};

const PaymentMethods = () => (
  <div className="py-12 border-y border-border bg-secondary/30">
    <div className="w-full px-4 sm:px-8 lg:px-12 text-center md:text-left">
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
      <CountryCarousel />
      <PaymentMethods />
    </>
  );
};

export default HeroSection;

const CountryCarousel = () => {
  const countries = [
    { name: "Tanzania", code: "TZ" },
    { name: "Kenya", code: "KE" },
    { name: "Uganda", code: "UG" },
    { name: "Zambia", code: "ZM" },
    { name: "Ivory Coast", code: "CI" },
    { name: "Senegal", code: "SN" },
    { name: "Benin", code: "BJ" },
    { name: "DRC", code: "CD" },
  ];

  return (
    <div className="py-6 border-t border-border bg-background overflow-hidden relative">
      <div className="absolute inset-0 pointer-events-none z-10 bg-gradient-to-r from-background via-transparent to-background" />
      
      <div className="w-full px-4 sm:px-8 lg:px-12 mb-4">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground/60">
          Available in:
        </p>
      </div>

      <div className="flex overflow-hidden relative">
        <motion.div
          className="flex gap-12 sm:gap-16 items-center whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {/* Duplicate the array multiple times to ensure smooth infinite scroll without gaps */}
          {[...countries, ...countries, ...countries, ...countries].map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors duration-300"
            >
              <ReactCountryFlag
                countryCode={country.code}
                svg
                style={{
                  width: '1.5em',
                  height: '1.5em',
                  borderRadius: '2px', 
                  objectFit: 'cover'
                }}
                className="shadow-sm"
              />
              <span className="font-medium text-sm sm:text-base tracking-wide">
                {country.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
