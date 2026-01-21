import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border pt-20 pb-10 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">
          <div className="space-y-6">
            <Logo className="h-16 md:h-20" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Redefining payments across Africa with secure, reliable, and
              enterprise-grade infrastructure.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-almara-gold/20 hover:text-almara-gold transition-all"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-almara-gold/20 hover:text-almara-gold transition-all"
              >
                <Linkedin size={18} />
              </a>
              <a
                href="#"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/5 hover:bg-almara-gold/20 hover:text-almara-gold transition-all"
              >
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Products</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Online Payments
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Mobile Money
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Bank Transfers
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Merchant Payouts
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Explore</h4>
            <ul className="space-y-4">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground text-sm hover:text-almara-gold transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="text-almara-gold shrink-0 mt-0.5"
                />
                <span className="text-muted-foreground text-sm">
                  Nairobi Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-almara-gold shrink-0" />
                <span className="text-muted-foreground text-sm">
                  sales@almarapay.com
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-almara-gold shrink-0" />
                <span className="text-muted-foreground text-sm">
                  +254 700 000 000
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-muted-foreground text-xs opacity-60">
            &copy; {new Date().getFullYear()} Almara Pay. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a
              href="#"
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-muted-foreground text-xs hover:text-foreground transition-colors"
            >
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
