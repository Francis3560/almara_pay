import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { ConfigProvider, theme } from "antd";
import { ThemeProvider, useTheme } from "./components/theme-provider";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Developers from "./pages/Developers";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import CryptoFiatRamp from "./pages/solutions/CryptoFiatRamp";
import AgentAssistedOTC from "./pages/solutions/AgentAssistedOTC";
import SMEMerchantOTC from "./pages/solutions/SMEMerchantOTC";
import RemittanceSettlement from "./pages/solutions/RemittanceSettlement";
import TreasuryOTCDesk from "./pages/solutions/TreasuryOTCDesk";
import ComplianceModel from "./pages/solutions/ComplianceModel";
import CardCollections from "./pages/solutions/CardCollections";
import MobileMoney from "./pages/solutions/MobileMoney";
import AlternativePayments from "./pages/solutions/AlternativePayments";
import "./index.css";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const AppContent = () => {
  const { theme: currentTheme } = useTheme();
  const isDark = currentTheme === "dark";

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: "#FBC44A",
          colorBgBase: isDark ? "#080427" : "#FBFBF7",
          colorTextBase: isDark ? "#FBFBF7" : "#080427",
          fontFamily: "Inter, sans-serif",
          borderRadius: 12,
        },
        components: {
          Button: {
            colorPrimary: "#FBC44A",
            colorTextLightSolid: "#080427",
            fontWeight: 600,
            borderRadius: 8,
          },
          Card: {
            colorBgContainer: isDark ? "rgba(255, 255, 255, 0.05)" : "#ffffff",
            colorBorderSecondary: "rgba(255, 255, 255, 0.1)",
          },
        },
      }}
    >
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/cards" element={<CardCollections />} />
          <Route path="/products/mobile-money" element={<MobileMoney />} />
          <Route path="/products/alternative-payments" element={<AlternativePayments />} />
          
          <Route path="/services" element={<Developers />} />
          <Route path="/services/crypto-fiat-ramp" element={<CryptoFiatRamp />} />
          <Route path="/services/agent-assisted-otc" element={<AgentAssistedOTC />} />
          <Route path="/services/sme-merchant-otc" element={<SMEMerchantOTC />} />
          <Route path="/services/remittance-settlement" element={<RemittanceSettlement />} />
          <Route path="/services/treasury-otc-desk" element={<TreasuryOTCDesk />} />
          <Route path="/services/compliance-model" element={<ComplianceModel />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          {/* Default to Home for any unknown routes */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </ConfigProvider>
  );
};

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="almara-theme">
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
