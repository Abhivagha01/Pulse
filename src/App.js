import React, { useEffect } from "react";
import Footer from "./components/global/Footer";
import Contact from "./pages/contact/Contact";
import Home from "./pages/Home/Home";
import { Route, Routes, useLocation } from "react-router";
import About from "./pages/about/About";
import Services from "./pages/service/Services";
import ServicePage2 from "./components/service/ServicePage2";
import Header from "./components/global/Header";
import GoogleMap from "./components/blocks/GoogleMap";
import Columns from "./components/blocks/Columns";
import PricingTable from "./components/blocks/PricingTable";
import VideoPopup from "./components/blocks/VideoPopup";
import Progressbar from "./components/blocks/Progressbar";
import PortfolioBlock from "./components/blocks/PortfolioBlock";
import TeamBlock from "./components/blocks/TeamBlock";
import BlocksContactForm from "./components/blocks/BlocksContactForm";
import BlocksService from "./components/blocks/BlocksService";
import BlocksCounter from "./components/blocks/BlocksCounter";
import BlocksClientLogo from "./components/blocks/BlocksClientLogo";
import BlogList from "./components/blocks/BlogList";
import Page404 from "./components/page/Page404";
import PortfolioDetails from "./components/page/PortfolioDetails";
import Testimonial from "./components/blocks/Testimonial";

const App = () => {
  function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/service-details" element={<ServicePage2 />} />
        {/* ***block*** */}
        <Route path="/blocks-googlemap" element={<GoogleMap />} />
        <Route path="/blocks-columns" element={<Columns />} />
        <Route path="/blocks-pricingtable" element={<PricingTable />} />
        <Route path="/blocks-videopopup" element={<VideoPopup />} />
        <Route path="/blocks-progressbar" element={<Progressbar />} />
        <Route path="/blocks-portfolioblock" element={<PortfolioBlock />} />
        <Route path="/blocks-teamblock" element={<TeamBlock />} />
        <Route path="/blocks-contactform" element={<BlocksContactForm />} />
        <Route path="/blocks-service" element={<BlocksService />} />
        <Route path="/blocks-counter" element={<BlocksCounter />} />
        <Route path="/blocks-clientlogo" element={<BlocksClientLogo />} />
        <Route path="/blocks-bloglist" element={<BlogList />} />
        <Route path="/portfolio-details" element={<PortfolioDetails />} />
        <Route path="/Testimonial" element={<Testimonial />} />
        <Route path="/404" element={<Page404 />} />

        {/* ***contact*** */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
