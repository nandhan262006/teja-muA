import { Helmet } from "react-helmet-async";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import BridalServices from "./components/BridalServices";
import Gallery from "./components/Gallery";
import Bridesmaid from "./components/Bridesmaid";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";

import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import GalleryPage from "./components/GalleryPage";

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Best Bridal Makeup Artist in Nellore - Teju Bridal Artist | Professional Wedding Makeup</title>
        <meta name="description" content="Teju Bridal Artist is the #1 bridal makeup artist in Nellore, Andhra Pradesh. Expert in bridal, HD, airbrush, editorial, movie & commercial makeup. 500+ happy brides. Book your bridal transformation today! Call +91 98400 56242." />
        <link rel="canonical" href="https://tejubridal.in/" />
        <meta property="og:title" content="Best Bridal Makeup Artist in Nellore - Teju Bridal Artist | Professional Wedding Makeup" />
        <meta property="og:description" content="Teju Bridal Artist is the #1 bridal makeup artist in Nellore, Andhra Pradesh. Expert in bridal, HD, airbrush, editorial, movie & commercial makeup. 500+ happy brides. Call +91 98400 56242." />
        <meta property="og:url" content="https://tejubridal.in/" />
        <meta name="twitter:title" content="Best Bridal Makeup Artist in Nellore - Teju Bridal Artist | Professional Wedding Makeup" />
        <meta name="twitter:description" content="Teju Bridal Artist: #1 bridal makeup artist in Nellore. Expert bridal, HD, airbrush, editorial & movie makeup. 500+ happy brides. Book now at +91 98400 56242!" />
      </Helmet>
      <Hero />
      <About />
      <Services />
      <BridalServices />
      <Bridesmaid />
      <Gallery />
      <Testimonials />
      <Brands />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
    </BrowserRouter>
  );
}
