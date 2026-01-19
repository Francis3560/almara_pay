import React from "react";
import { MainLayout } from "@/layouts/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturedBusinesses from "@/components/home/FeaturedBusinesses";
import AlmaraDemo from "@/components/home/AlmaraDemo";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import PaymentStack from "@/components/home/PaymentStack";
import AfricasDigitalEconomy from "@/components/home/AfricasDigitalEconomy";

const Home = () => {
  return (
    <MainLayout>
      <HeroSection />
      <FeaturedBusinesses />
      <AlmaraDemo />
      <WhyChooseUs />
      <PaymentStack />
      <AfricasDigitalEconomy />
    </MainLayout>
  );
};

export default Home;
