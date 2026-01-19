import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, Globe } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const ContactInfo = ({ icon: Icon, title, content, link }) => (
  <div className="flex gap-6 p-6 rounded-2xl bg-card border border-border hover:border-almara-gold/20 transition-all shadow-sm">
    <div className="shrink-0 w-12 h-12 rounded-xl bg-almara-gold/10 flex items-center justify-center text-almara-gold">
      <Icon size={24} />
    </div>
    <div>
      <h4 className="font-bold mb-1 text-foreground">{title}</h4>
      {link ? (
        <a
          href={link}
          className="text-muted-foreground hover:text-almara-gold transition-colors"
        >
          {content}
        </a>
      ) : (
        <p className="text-muted-foreground">{content}</p>
      )}
    </div>
  </div>
);

const Contact = () => {
  return (
    <MainLayout>
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Let’s Start a{" "}
              <span className="text-almara-gold underline decoration-primary decoration-4 underline-offset-8">
                Partnership.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Whether you’re a scaling business, an institutional seeker of liquidity, or a merchant 
              facilitating digital asset flows, our OTC desk is ready to assist.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-5 space-y-6">
              <ContactInfo
                icon={Mail}
                title="OTC Desk Inquiries"
                content="hello@almarapay.com"
                link="mailto:hello@almarapay.com"
              />
              <ContactInfo
                icon={MessageCircle}
                title="Institutional Partners"
                content="sales@almarapay.com"
                link="mailto:sales@almarapay.com"
              />
              <ContactInfo
                icon={Phone}
                title="Trade Support"
                content="+254 700 000 000"
                link="tel:+254700000000"
              />
              <ContactInfo
                icon={MapPin}
                title="Strategic Hub"
                content="Westlands Business Park, Nairobi, Kenya"
              />

              <div className="mt-12 p-8 rounded-3xl bg-almara-gold text-almara-navy relative overflow-hidden group">
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-4">
                    Treasury Desk
                  </h3>
                  <p className="font-medium mb-6 opacity-80">
                    Looking for custom pricing for high-volume orders?
                    Schedule a 1:1 call with our liquidity specialist.
                  </p>
                  <Button
                    variant="secondary"
                    className="bg-almara-navy text-white hover:bg-almara-navy/90 font-bold border-none transition-transform group-hover:scale-105"
                  >
                    Schedule Trade Call
                  </Button>
                </div>
                <Globe
                  className="absolute -right-10 -bottom-10 text-almara-navy opacity-5 group-hover:rotate-12 transition-transform duration-1000"
                  size={240}
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-card border border-border rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-almara-gold/5 blur-3xl rounded-full"></div>

                <form className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        className="w-full h-14 bg-secondary/50 border border-border rounded-2xl px-6 focus:outline-none focus:border-almara-gold focus:ring-1 focus:ring-almara-gold/50 transition-all placeholder:text-muted-foreground/30 text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1">
                        Work Email
                      </label>
                      <input
                        type="email"
                        placeholder="jane@company.com"
                        className="w-full h-14 bg-secondary/50 border border-border rounded-2xl px-6 focus:outline-none focus:border-almara-gold focus:ring-1 focus:ring-almara-gold/50 transition-all placeholder:text-muted-foreground/30 text-foreground"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1">
                        Company / Entity
                      </label>
                      <input
                        type="text"
                        placeholder="Acme Inc."
                        className="w-full h-14 bg-secondary/50 border border-border rounded-2xl px-6 focus:outline-none focus:border-almara-gold focus:ring-1 focus:ring-almara-gold/50 transition-all placeholder:text-muted-foreground/30 text-foreground"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-muted-foreground ml-1">
                        Primary Market
                      </label>
                      <select className="w-full h-14 bg-secondary/50 border border-border rounded-2xl px-6 appearance-none focus:outline-none focus:border-almara-gold transition-all text-foreground">
                        <option>Kenya</option>
                        <option>Uganda</option>
                        <option>Tanzania</option>
                        <option>Rwanda</option>
                        <option>Nigeria</option>
                        <option>Ghana</option>
                        <option>Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground ml-1">
                      Interest
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {[
                        "OTC On-Ramp",
                        "OTC Off-Ramp",
                        "Treasury Desk",
                        "Remittance Settlement",
                        "Compliance/KYB",
                        "Other",
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          className="px-4 py-2 rounded-full border border-border bg-background hover:border-almara-gold hover:text-almara-gold transition-all text-sm font-medium text-foreground"
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-muted-foreground ml-1">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-secondary/50 border border-border rounded-2xl p-6 focus:outline-none focus:border-almara-gold focus:ring-1 focus:ring-almara-gold/50 transition-all placeholder:text-muted-foreground/30 text-foreground resize-none"
                    ></textarea>
                  </div>

                  <Button className="w-full h-16 bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold text-lg rounded-2xl flex items-center justify-center gap-3">
                    Send Message <Send size={20} />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Locations Map Placeholder */}
      <section className="py-24 mb-16">
        <div className="container mx-auto px-4">
          <div className="aspect-[21/9] bg-card border border-border rounded-[3rem] relative overflow-hidden flex items-center justify-center shadow-inner">
            <Globe className="text-almara-gold/10" size={300} />
            <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent"></div>
            <div className="relative z-10 text-center">
              <h2 className="text-3xl font-display font-bold mb-4 text-foreground">
                Our Local Presence
              </h2>
              <p className="text-muted-foreground">
                Supporting local economies with physical hubs in 6 African
                nations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Contact;
