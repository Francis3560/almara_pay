import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Target,
  Users,
  Map,
  ShieldCheck,
  Globe2,
  Building,
  Zap,
  Lock,
  Handshake,
  UserCheck,
  ArrowDown,
  ArrowUp,
} from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const Stat = ({ label, value }) => (
  <div className="text-center">
    <div className="text-4xl md:text-5xl font-display font-extrabold text-almara-gold mb-2">
      {value}
    </div>
    <div className="text-muted-foreground text-sm uppercase tracking-widest">
      {label}
    </div>
  </div>
);

const CoreValueCard = ({ icon: Icon, title, description, isExpanded, onToggle }) => (
  <div className="bg-card border border-border rounded-2xl p-8 hover:border-almara-gold/40 transition-all duration-300 cursor-pointer group"
       onClick={onToggle}>
    <div className="flex items-start justify-between gap-4">
      <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold group-hover:bg-almara-gold/20 transition-colors">
        <Icon size={28} />
      </div>
      <button className="text-almara-gold hover:text-almara-gold/80 transition-colors">
        {isExpanded ? <ArrowUp size={20} /> : <ArrowDown size={20} />}
      </button>
    </div>
    <h3 className="text-xl font-display font-bold mt-6 mb-3 text-foreground">{title}</h3>
    {isExpanded && (
      <p className="text-muted-foreground leading-relaxed animate-fadeIn">
        {description}
      </p>
    )}
  </div>
);

const About = () => {
  const navigate = useNavigate();
  const [expandedValue, setExpandedValue] = useState(null);

  const coreValues = [
    {
      id: 1,
      icon: Zap,
      title: "Forward Thinking",
      description: "We continuously innovate and adapt to stay ahead of market trends, embracing new technologies to provide cutting-edge payment solutions that meet evolving customer needs."
    },
    {
      id: 2,
      icon: Lock,
      title: "Trust",
      description: "Security and reliability are at our core. We build and maintain trust through transparent operations, robust security measures, and consistent delivery of our promises."
    },
    {
      id: 3,
      icon: Handshake,
      title: "Collaboration",
      description: "We believe in the power of partnerships. By working closely with financial institutions, merchants, and technology partners, we create ecosystems that drive mutual growth and success."
    },
    {
      id: 4,
      icon: UserCheck,
      title: "Customer Centricity",
      description: "Our customers are at the heart of everything we do. We listen, understand, and respond to their needs with user-friendly, practical solutions that enhance their payment experiences."
    }
  ];

  const toggleValue = (id) => {
    setExpandedValue(expandedValue === id ? null : id);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-extrabold mb-8 leading-[1.1] text-foreground"
            >
              About <span className="text-almara-gold">AlmaraPay</span>
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Our promise is <span className="text-almara-gold font-semibold">Simple, Seamless, Secure and Fast</span> transactions, always. Here is how we achieve it.
            </p>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-almara-gold/5 to-transparent pointer-events-none"></div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="bg-card border border-border rounded-3xl p-12 shadow-sm">
              <h2 className="text-3xl font-display font-bold mb-8 text-center text-foreground">
                Our Comprehensive Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10 text-center">
                AlmaraPay provides mobile money e-wallet services, including money transfers, an extensive agency network, cash deposit and withdrawal services, merchant payments, and digital loose change collection.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Users size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Agency Network</h3>
                      <p className="text-muted-foreground">
                        Extensive network for cash deposit and withdrawal services across multiple locations.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Building size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Merchant Payments</h3>
                      <p className="text-muted-foreground">
                        Secure and efficient payment solutions for businesses of all sizes.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Globe2 size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Digital Loose Change</h3>
                      <p className="text-muted-foreground">
                        Customers can conveniently receive their loose change from cash transactions at merchant locations directly into their e-wallet.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold flex-shrink-0">
                      <Zap size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-display font-bold mb-2 text-foreground">Money Transfers</h3>
                      <p className="text-muted-foreground">
                        Fast and reliable domestic and international money transfer services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Toolkit Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                <Globe2 size={32} />
              </div>
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                Built-in toolkit for seamless global transactions
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  If you're conducting business worldwide, you need a robust payment optimization system to navigate the complexities of cross-border payments.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  With integrations to global financial institutions and numerous mobile money services, AlmaraPay's All-in-One Payment Platform ensures an efficient and secure payment experience.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Moreover, to safeguard your business and your customers, we adhere to stringent global standards for compliance and data protection practices.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square rounded-[3rem] overflow-hidden group border border-border shadow-2xl">
              <img
                src="https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768819874/AboutAlmara_Latest_p7uqr4.png"
                alt="Global Compliance and Security Standards"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Glassmorphic Overlay for text legibility */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-background/90 via-background/40 to-transparent backdrop-blur-[2px]">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-almara-gold/20 flex items-center justify-center text-almara-gold border border-almara-gold/30">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-foreground">Global Compliance</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">PCI DSS | GDPR | ISO 27001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer-Centric Approach */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
                Customer-Focused Innovation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                The Kenyan consumer is constantly evolving, driving the demand for a payment service provider that meets their needs and consistently delivers innovative solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                    <UserCheck size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">Design Thinking Approach</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    AlmaraPay has embraced a consumer-focused design thinking approach, enabling us to address customer challenges with practical, user-friendly, technology-driven solutions.
                  </p>
                </div>
                
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="w-14 h-14 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-6">
                    <Target size={28} />
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-4 text-foreground">User-Centered Development</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At the heart of our business lies the end user and our ability to harness existing ecosystems to eliminate inefficiencies and enhance productivity.
                  </p>
                </div>
              </div>
              
              <div className="bg-card border border-border rounded-3xl p-10 flex flex-col justify-center">
                <div className="w-20 h-20 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mx-auto mb-8">
                  <Zap size={40} />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6 text-center text-foreground">Research & Development</h3>
                <p className="text-lg text-muted-foreground leading-relaxed text-center">
                  AlmaraPay has been developed with the customer in focus, following an extensive series of research and development cycles over the past two years. We are confident that AlmaraPay will provide secure, seamless, and modern payment solutions tailored to diverse needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide our decisions and shape our company culture
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {coreValues.map((value) => (
              <CoreValueCard
                key={value.id}
                {...value}
                isExpanded={expandedValue === value.id}
                onToggle={() => toggleValue(value.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-24 bg-gradient-to-br from-secondary/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-12">
              <div className="bg-card border border-border rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <Target size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
                  Mission
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Simplifying online payments while fostering trust and innovation for businesses and individuals.
                </p>
              </div>
              
              <div className="bg-card border border-border rounded-3xl p-10">
                <div className="w-16 h-16 rounded-2xl bg-almara-gold/10 flex items-center justify-center text-almara-gold mb-8">
                  <Globe2 size={32} />
                </div>
                <h2 className="text-3xl font-display font-bold mb-6 text-foreground">
                  Vision
                </h2>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Unlocking Opportunities for people and businesses through a single seamless and borderless payment platform.
                </p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-[3rem] p-12 aspect-square flex flex-col items-center justify-center text-center relative overflow-hidden group">
              <div className="relative z-10">
                <div className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-almara-gold/20 to-almara-gold/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Building size={80} className="text-almara-gold" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 text-foreground">
                  Building the Future of Payments
                </h3>
                <p className="text-muted-foreground">
                  Join us in revolutionizing digital transactions across Africa and beyond
                </p>
              </div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-almara-gold/5 pointer-events-none"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 border-y border-border bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            <Stat label="Active Users" value="100K+" />
            <Stat label="Merchant Partners" value="10K+" />
            <Stat label="Transactions Processed" value="50M+" />
            <Stat label="Countries Served" value="20+" />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-8 text-foreground">
              Ready to Experience Simple, Seamless & Secure Payments?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join thousands of businesses and individuals who trust AlmaraPay for their payment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate("/products")}
                className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-10 h-14 text-lg"
              >
                Get Started Today
              </Button>
              <Button 
                variant="outline" 
                onClick={() => navigate("/contact")}
                className="border-almara-gold/50 text-almara-gold hover:bg-almara-gold/10 font-bold px-10 h-14 text-lg"
              >
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default About;