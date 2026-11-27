import React, { useState, useEffect } from 'react';
import StarfieldCanvas from './components/StarfieldCanvas';
import FloatingNavbar from './components/FloatingNavbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import PortfolioSection from './components/PortfolioSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 selection:bg-[#2c67ed] selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Dynamic Cosmic Starfield & Meteor Canvas */}
      <StarfieldCanvas />

      {/* Floating Pill Navbar with Blue Glow Effect */}
      <FloatingNavbar activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col gap-12 sm:gap-20">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>

      {/* Cosmic Footer */}
      <Footer />
    </div>
  );
}
