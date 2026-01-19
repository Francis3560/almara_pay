import React from "react";
import { motion } from "framer-motion";

const stackItems = [
  {
    category: "COLLECTIONS",
    title: "Seamlessly Collect Payments Across Africa",
    image:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768814788/pexels-viktoria-slowikowska-5332483_puifez.jpg",
  },
  {
    category: "PAYOUTS",
    title: "Pay anyone, Any Method, Anywhere",
    image:
      "https://res.cloudinary.com/dvkt0lsqb/image/upload/v1768814987/pexels-ivan-s-7620627_mgrzlj.jpg",
  },
  {
    category: "PAYMENT SERVICES",
    title: "Technology Beyond Payment Processing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
];

const PaymentStack = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <h2 className="text-4xl md:text-5xl font-display font-extrabold text-primary leading-tight">
              Reimagining Payments, <br />
              Unlocking <span className="text-foreground">Opportunities</span>
            </h2>
            {/* Decorative yellow curve match */}
            <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-almara-gold rounded-tr-3xl"></div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:pt-2"
          >
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Build stronger customer connections. Enter new markets with
              confidence. From local to cross-border, move money effortlessly
              and grow your business.
            </p>
          </motion.div>
        </div>

        {/* Interactive Stack Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {stackItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="relative aspect-[4/5] rounded-[2rem] overflow-hidden group cursor-pointer shadow-xl"
            >
              {/* Background Image */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

              {/* Content */}
              <div className="absolute inset-0 p-8 flex flex-col justify-start">
                <span className="text-xs font-bold tracking-[0.2em] text-white/70 mb-4">
                  {item.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white leading-tight">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentStack;
