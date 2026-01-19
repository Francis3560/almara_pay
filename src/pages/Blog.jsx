import React from "react";
import { motion } from "framer-motion";
import { Search, Calendar, User, Clock, ArrowUpRight } from "lucide-react";
import { MainLayout } from "@/layouts/MainLayout";
import { Button } from "@/components/ui/button";

const BlogCard = ({ category, title, excerpt, date, author, time, imageUrl }) => (
  <div className="group cursor-pointer">
    <div className="aspect-[16/9] bg-card border border-border rounded-3xl mb-6 relative overflow-hidden shadow-sm">
      {/* Blog Cover Image */}
      <img
        src={imageUrl}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      
      <div className="absolute top-4 left-4 px-3 py-1 bg-almara-gold text-almara-navy text-[10px] font-bold uppercase tracking-widest rounded-full z-10">
        {category}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-end p-6">
        <div className="flex items-center gap-4 text-xs text-white/90">
          <span className="flex items-center gap-1">
            <Calendar size={12} /> {date}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} /> {time}
          </span>
        </div>
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-almara-gold/20 p-4 rounded-full backdrop-blur-sm z-10">
        <ArrowUpRight className="text-almara-gold" size={32} />
      </div>
    </div>
    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-almara-gold transition-colors">
      {title}
    </h3>
    <p className="text-muted-foreground line-clamp-2 leading-relaxed mb-4">
      {excerpt}
    </p>
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold text-foreground border border-border">
        {author
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <span className="text-sm text-muted-foreground font-medium">{author}</span>
    </div>
  </div>
);

const Blog = () => {
  const posts = [
    {
      category: "Fintech Trends",
      title: "The Future of Mobile Money Interoperability in East Africa",
      excerpt:
        "How cross-network transfers are reshaping the digital landscape for small businesses in Kenya and Rwanda.",
      date: "Oct 12, 2025",
      author: "Sarah M. Kimani",
      time: "8 min read",
      imageUrl: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Product Updates",
      title: "Announcing: New Settlement APIs for West African Markets",
      excerpt:
        "Get paid faster. Our new API features allow for T+0 settlement across multiple Nigerian banks.",
      date: "Sep 28, 2025",
      author: "David Olumide",
      time: "5 min read",
      imageUrl: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Security",
      title: "Defending Against Digital Fraud: A Guide for Merchants",
      excerpt:
        "Best practices to secure your payment flows and protect your customers during the holiday season.",
      date: "Aug 15, 2025",
      author: "Robert Chen",
      time: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  const featuredPosts = [
    {
      category: "Industry Analysis",
      title: "The Rise of Digital Banking in Emerging Markets",
      excerpt: "How technology is bridging the financial inclusion gap across Africa.",
      date: "Nov 5, 2025",
      author: "Maria Rodriguez",
      time: "10 min read",
      imageUrl: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=1450&q=80"
    },
    {
      category: "Technology",
      title: "Blockchain Integration in Traditional Banking Systems",
      excerpt: "Exploring the potential of distributed ledger technology for secure transactions.",
      date: "Oct 30, 2025",
      author: "James Wilson",
      time: "15 min read",
      imageUrl: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Payments",
      title: "Real-Time Payments: Transforming Consumer Experience",
      excerpt: "How instant payment systems are changing the way we transact daily.",
      date: "Oct 18, 2025",
      author: "Linda Thompson",
      time: "7 min read",
      imageUrl: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Regulation",
      title: "Navigating Fintech Compliance in Multiple Jurisdictions",
      excerpt: "A comprehensive guide to meeting regulatory requirements across Africa.",
      date: "Oct 8, 2025",
      author: "Ahmed Hassan",
      time: "12 min read",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
    },
    {
      category: "Innovation",
      title: "AI-Powered Fraud Detection in Digital Payments",
      excerpt: "How machine learning is revolutionizing payment security systems.",
      date: "Sep 25, 2025",
      author: "Sophie Williams",
      time: "9 min read",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
    {
      category: "Business",
      title: "Monetizing Payment Platforms: Strategies for Growth",
      excerpt: "Revenue models that work for fintech startups in competitive markets.",
      date: "Sep 12, 2025",
      author: "Michael Brown",
      time: "11 min read",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
    },
  ];

  return (
    <MainLayout>
      <section className="py-24 bg-background relative overflow-hidden border-b border-border">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-7xl font-display font-extrabold mb-8 text-foreground">
              Almara <span className="text-almara-gold italic">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-12">
              Thought leadership, technical deep dives, and company updates from
              the front lines of African fintech.
            </p>

            <div className="relative max-w-md">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={18}
              />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full h-14 bg-secondary/50 border border-border rounded-2xl pl-12 pr-6 focus:outline-none focus:border-almara-gold transition-colors text-foreground"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-almara-gold/5 pointer-events-none"></div>
      </section>

      {/* Categories Bar */}
      <div className="border-b border-border py-4 bg-secondary/20 overflow-x-auto">
        <div className="container mx-auto px-4 flex gap-6 whitespace-nowrap">
          {[
            "All Articles",
            "Product Updates",
            "Engineering",
            "Company News",
            "Fintech Trends",
            "Security",
            "Payments",
            "Technology",
            "Regulation",
            "Business",
          ].map((cat, i) => (
            <button
              key={cat}
              className={`text-sm font-bold ${i === 0 ? "text-almara-gold" : "text-muted-foreground"} hover:text-almara-gold transition-colors`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Featured Post */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="aspect-[16/10] relative overflow-hidden group rounded-[2.5rem]">
              {/* Featured Post Image */}
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80"
                alt="Cross-Border Payments in Africa"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
              
              <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent p-10 flex flex-col justify-end">
                <div className="flex items-center gap-4 text-xs text-white font-bold mb-4">
                  <span className="px-3 py-1 bg-almara-mutedRed rounded-full uppercase tracking-widest">
                    Featured
                  </span>
                  <span>Oct 24, 2025</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white group-hover:text-almara-gold transition-colors">
                  Cross-Border Payments: The Next Frontier for SME Growth in
                  SADC
                </h2>
                <p className="text-white/80 mt-4 line-clamp-2">
                  The Southern African Development Community (SADC) is seeing an
                  unprecedented rise in digital intra-trade. In this deep dive, we
                  explore how Almara Pay is solving the liquidity bottleneck for
                  micro-enterprises...
                </p>
                <div className="flex items-center gap-3 mt-6">
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-[10px] font-bold text-white border border-white/10">
                    SM
                  </div>
                  <span className="text-sm text-white/90">Samuel Maina</span>
                  <span className="text-sm text-white/60">• 12 min read</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-xl text-muted-foreground leading-relaxed">
                The Southern African Development Community (SADC) is seeing an
                unprecedented rise in digital intra-trade. In this deep dive, we
                explore how Almara Pay is solving the liquidity bottleneck for
                micro-enterprises by providing seamless cross-border payment solutions
                that reduce transaction costs by up to 70%.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Discover how our innovative platform is enabling small and medium
                enterprises to expand their reach across borders, access new markets,
                and compete on a global scale with banking-grade security and
                compliance.
              </p>
              <Button className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-12 rounded-xl border-0 shadow-lg hover:shadow-almara-gold/20 transition-all">
                Read Full Article
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Post Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-16">
            <h2 className="text-3xl font-display font-bold">Latest Articles</h2>
            <div className="flex gap-2">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-border"
              >
                <ArrowUpRight className="rotate-[-135deg]" size={18} />
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full border-border"
              >
                <ArrowUpRight size={18} />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {posts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>
        </div>
      </section>

      {/* More Articles Section */}
      <section className="py-20 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display font-bold mb-16 text-center">
            Explore More Topics
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {featuredPosts.map((post, idx) => (
              <BlogCard key={idx} {...post} />
            ))}
          </div>

          <div className="mt-20 text-center">
            <Button
              variant="outline"
              className="border-border hover:bg-white/5 font-bold px-12 h-14"
            >
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-secondary/20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-display font-bold mb-6 text-foreground">
              Stay Updated with Fintech Insights
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Subscribe to our newsletter and get the latest articles, industry
              analysis, and product updates delivered to your inbox.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 h-14 bg-background border border-border rounded-2xl px-6 focus:outline-none focus:border-almara-gold transition-colors text-foreground"
              />
              <Button className="bg-almara-gold text-almara-navy hover:bg-almara-gold/90 font-bold px-8 h-14 whitespace-nowrap rounded-xl shadow-lg hover:shadow-almara-gold/20 border-0">
                Subscribe
              </Button>
            </div>
            
            <p className="text-sm text-muted-foreground/60 mt-6 font-medium">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Blog;