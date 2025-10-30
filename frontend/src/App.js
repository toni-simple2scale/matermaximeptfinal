import React, { useEffect, useState, Suspense } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from "./components/ScrollToTop";
import BackToTop from "./components/BackToTop";
import StickyCTA from "./components/StickyCTA";
import LoadingSpinner from "./components/LoadingSpinner";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProductCatalog from "./components/ProductCatalog";
import FleetSection from "./components/FleetSection";
import BrandPartners from "./components/BrandPartners";
import TestimonialsSection from "./components/TestimonialsSection";
import BusinessHours from "./components/BusinessHours";
import FAQSection from "./components/FAQSection";
import AboutSection from "./components/AboutSection";
import NovaLojaSection from "./components/NovaLojaSection";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

// Product pages
import AgregadosPage from "./pages/AgregadosPage";
import CimentoPage from "./pages/CimentoPage";
import BlocosTijolosPage from "./pages/BlocosTijolosPage";
import FerroPage from "./pages/FerroPage";
import TubagensPage from "./pages/TubagensPage";
import PreMoldadosPage from "./pages/PreMoldadosPage";
import FerramentasPage from "./pages/FerramentasPage";
import ColasPage from "./pages/ColasPage";
import PavimentosPage from "./pages/PavimentosPage";
import SaneamentoPage from "./pages/SaneamentoPage";
import MurosPage from "./pages/MurosPage";
import AquecimentoPage from "./pages/AquecimentoPage";
import IsolamentosPage from "./pages/IsolamentosPage";
import ProtecaoVedacaoPage from "./pages/ProtecaoVedacaoPage";
import BanhoPage from "./pages/BanhoPage";
import TintasPage from "./pages/TintasPage";
import EletrodomesticosPage from "./pages/EletrodomesticosPage";

const HomePage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ProductCatalog />
      <FleetSection />
      <NovaLojaSection />
      <BrandPartners />
      <TestimonialsSection />
      <FAQSection />
      <AboutSection />
      <BusinessHours />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produtos/agregados" element={<AgregadosPage />} />
          <Route path="/produtos/cimento" element={<CimentoPage />} />
          <Route path="/produtos/blocos-tijolos" element={<BlocosTijolosPage />} />
          <Route path="/produtos/ferro" element={<FerroPage />} />
          <Route path="/produtos/tubagens" element={<TubagensPage />} />
          <Route path="/produtos/pre-moldados" element={<PreMoldadosPage />} />
          <Route path="/produtos/ferramentas" element={<FerramentasPage />} />
          <Route path="/produtos/colas-selantes" element={<ColasPage />} />
          <Route path="/produtos/pavimentos" element={<PavimentosPage />} />
          <Route path="/produtos/saneamento" element={<SaneamentoPage />} />
          <Route path="/produtos/muros" element={<MurosPage />} />
          <Route path="/produtos/aquecimento" element={<AquecimentoPage />} />
          <Route path="/produtos/isolamentos" element={<IsolamentosPage />} />
          <Route path="/produtos/protecao-vedacao" element={<ProtecaoVedacaoPage />} />
          <Route path="/produtos/banho" element={<BanhoPage />} />
          <Route path="/produtos/tintas" element={<TintasPage />} />
          <Route path="/produtos/eletrodomesticos" element={<EletrodomesticosPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-right" />
    </div>
  );
}

export default App;