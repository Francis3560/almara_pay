import React from "react";
import { Navbar } from "../components/navigation/Navbar";
import { Footer } from "../components/navigation/Footer";

export const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navbar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};
