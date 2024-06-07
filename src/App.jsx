import "./App.css";
import Banner from "./components/Banners/Banner";
import Faqs from "./components/FAQ/Faqs";
import FantasyCricket from "./components/FantasyCricket/FantasyCricket";
import FantasySports from "./components/FantasySports/FantasySports";
import Footer from "./components/Footer/Footer";
import GetApp from "./components/GetApp/GetApp";
import Header from "./components/Header/Header";
import HowToPlay from "./components/HowToPlay/HowToPlay";
import OfficialPartner from "./components/OfficialPartner/OfficialPartner";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { PrivacyPolicy } from "./components/PrivacyPolicy/PrivacyPolicy";
import { TermsAndCondition } from "./components/TermsAndCondition/TermsAndCondition";
import LatestNews from "./components/LatestNews/LatestNews";
import DownloadApp from "./components/DownloadApp/DownloadApp";
import WelcomeBonus from "./components/WelcomeBonus/WelcomeBonus";
import { Legality } from "./components/Legality/Legality";
import { RefundPolicy } from "./components/RefundPolicy/RefundPolicy";
import { ResponsiblePlay } from "./components/ResponsiblePlay/ResponsiblePlay";
import { ContactUs } from "./components/ContactUs/ContactUs";
import WinnersReview from "./components/WinnersReview/WinnersReview";
import { AboutUs } from "./components/AboutUs/AboutUs";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Header />
        <Banner />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/fantasy-cricket" element={<FantasyCricket />} />
          <Route path="/fantasy-sports" element={<FantasySports />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsAndCondition />} />
          <Route path="/legality" element={<Legality />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/responsible-play" element={<ResponsiblePlay />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
        {/* <DownloadApp /> */}
        <Footer />
      </Router>
    </>
  );
}

export default App;

const HomePage = () => {
  return (
    <>
      <OfficialPartner />
      <HowToPlay />
      <WelcomeBonus />
      <WinnersReview />
      <GetApp />
      <Faqs />
      {/* <LatestNews /> */}
      <FantasySports />
    </>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
};
