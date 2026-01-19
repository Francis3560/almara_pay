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
  const sampleCode = `const almara = require('almara-pay-node')('sk_live_...');

// Create a payment request
const payment = await almara.charges.create({
  amount: 50000, // in ksh
  currency: 'KES',
  email: 'customer@example.com',
  callback_url: 'https://your-site.com/callback',
  metadata: { order_id: '12345' }
});

console.log(payment.checkout_url);`;

  return (
    <MainLayout>
      <section className="py-24 bg-gradient-to-b from-secondary/50 via-background to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-widest mb-6">
                Developer Hub
              </div>
              <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
                Built by Developers, <br />
                <span className="text-almara-gold">for Developers.</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-10 leading-relaxed max-w-xl">
                Integrate robust payment capabilities into your application with
                just a few lines of code. Our APIs are clean, predictable, and
                designed for scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button 
                  onClick={() => navigate("/contact")}
                  className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 rounded-xl border-0"
                >
                  Contact Sales Now
                </Button>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <CodeSnippet code={sampleCode} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* API Features Grids */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Restful API",
                desc: "Standard JSON requests and responses that any client can understand.",
              },
              {
                icon: ShieldCheck,
                title: "Webhooks",
                desc: "Get real-time updates on transaction status changes automatically.",
              },
              {
                icon: Blocks,
                title: "SDK Library",
                desc: "Official libraries for Node.js, Python, PHP, Ruby, and Go.",
              },
              {
                icon: Cpu,
                title: "Sandbox Mode",
                desc: "Test your entire integration in a risk-free environment before going live.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl bg-card border border-border hover:border-almara-gold/20 transition-all shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-almara-gold/5 flex items-center justify-center text-almara-gold mb-6">
                  <item.icon size={24} />
                </div>
                <h4 className="text-xl font-bold mb-3 text-foreground">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-extrabold mb-8 text-foreground">
              Our <span className="text-almara-gold">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our promise is Simple, Seamless, Secure and Fast transactions, always. Here is how we achieve it. 
              With a focus on innovation and customer satisfaction, we strive to provide cutting-edge solutions 
              that streamline financial operations. Our services are designed to cater to a diverse range of 
              business needs, ensuring reliability, scalability, and top-notch security at every step. 
              Whether you're a small business or a large enterprise, we have the right tools and expertise 
              to help you succeed in today's competitive market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Payment Gateway",
                desc: "Our robust payment gateway seamlessly integrates with your website or application, providing a hassle-free checkout experience for your customers.",
                icon: Laptop,
              },
              {
                title: "Custom Solutions",
                desc: "We understand that every business is unique. Our team can work with you to create custom payment solutions tailored to your specific requirements.",
                icon: Code2,
              },
              {
                title: "Collections",
                desc: "AlmaraPay offers a comprehensive suite of merchant services, including fraud prevention, recurring billing, and reporting tools, designed to optimize your payment processing.",
                icon: Zap,
              },
              {
                title: "Settlements",
                desc: "Withdraw your funds to your preferred accounts: Mobile money & Bank Accounts.",
                icon: FileText,
              },
              {
                title: "Bank Transfer",
                desc: "With AlmaraPay, you can send money directly to bank accounts i.e. We support Pesalink, RTGS, EFT etc.",
                icon: Blocks,
              },
              {
                title: "Utility Payments",
                desc: "AlmaraPay understands that Bills are a part of a business and we are here to help with that. You can pay for your utility bills such as Electricity, Water, Internet and even Statutory Bills.",
                icon: Cpu,
              },
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-3xl bg-card border border-border hover:border-almara-gold/40 transition-all duration-500 text-center shadow-lg hover:shadow-almara-gold/5"
              >
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mx-auto mb-8 group-hover:scale-110 transition-transform duration-500">
                  <service.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Workflow */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display font-bold text-center mb-20 text-foreground">
            Integration <span className="text-almara-gold">Workflow</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative text-foreground">
            {/* Connector Line */}
            <div className="hidden md:block absolute top-10 left-[20%] right-[20%] h-px bg-border z-0"></div>

            {[
              {
                step: "01",
                title: "Get Keys",
                desc: "Register on our dashboard to receive your API keys immediately.",
              },
              {
                step: "02",
                title: "Integrate",
                desc: "Use our SDKs or direct HTTP requests to trigger payment flows.",
              },
              {
                step: "03",
                title: "Go Live",
                desc: "Switch to live keys and start collecting real payments in minutes.",
              },
            ].map((item, i) => (
              <div key={i} className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-full bg-background border border-almara-gold flex items-center justify-center mx-auto mb-8 shadow-lg shadow-almara-gold/10">
                  <span className="text-2xl font-display font-bold text-almara-gold">
                    {item.step}
                  </span>
                </div>
                <h4 className="text-xl font-bold mb-4">{item.title}</h4>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security note */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto rounded-3xl p-10 border border-emerald-500/20 bg-emerald-500/5 flex flex-col md:flex-row gap-10 items-center">
            <div className="shrink-0 w-20 h-20 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500">
              <ShieldCheck size={40} />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Secured by PCIDSS Level 1
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We handle all sensitive card data in our secure environment.
                Your application never touches the actual card details, reducing
                your compliance burden and keeping your users safe.
              </p>
              <div className="mt-6 flex items-center gap-4 text-emerald-500 font-bold group cursor-pointer">
                See Our Compliance Standards{" "}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Developers;
