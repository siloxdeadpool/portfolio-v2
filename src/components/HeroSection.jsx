import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { 
  Rocket, 
  Terminal, 
  ExternalLink, 
  Download, 
  Sparkles, 
  Code2, 
  ArrowRight,
  Database,
  Globe2,
  ChevronDown
} from 'lucide-react';

export default function HeroSection() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = isDeleting ? 40 : 90;
  const pauseTime = 2200;

  useEffect(() => {
    const roles = personalData.roleTitles;
    const currentFullText = roles[currentTextIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentFullText.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentFullText.length) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        // Deleting
        setDisplayedText(currentFullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentTextIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-28 pb-16 px-4 md:px-8 overflow-hidden"
    >
      {/* Background Cosmic Glow Spheres */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] md:w-[650px] h-[350px] md:h-[650px] rounded-full bg-gradient-to-tr from-[#2c67ed]/20 via-[#1e4fd8]/15 to-transparent blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto w-full text-center flex flex-col items-center relative z-10">
        
        {/* Profile Portrait Hero Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative mb-5 flex items-center justify-center group"
        >
          {/* Cosmic Glow Rings */}
          <div className="absolute -inset-2 rounded-full border border-cyan-400/30 animate-pulse pointer-events-none" />
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2c67ed]/60 animate-spin" style={{ animationDuration: '28s' }} />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#2c67ed] to-cyan-400 blur-lg opacity-40 group-hover:opacity-75 transition-opacity" />

          {/* Photo Frame */}
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-blue-400/60 shadow-[0_0_25px_rgba(44,103,237,0.7)] bg-[#040817]">
            <img 
              src="/profile.jpg" 
              alt="Andriyan" 
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300" 
            />
          </div>

          {/* Mini Status Beacon */}
          <div className="absolute bottom-0 right-0 px-2 py-0.5 rounded-full bg-[#2c67ed] border border-cyan-300 text-white text-[9px] font-mono font-bold shadow-[0_0_10px_#2c67ed]">
            A.Md.Kom.
          </div>
        </motion.div>

        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-950/70 to-[#0a122e]/80 border border-[#2c67ed]/40 shadow-[0_0_15px_rgba(44,103,237,0.35)] backdrop-blur-md mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
          </span>
          <span className="text-xs font-mono tracking-wide text-cyan-300">
            POLTEKNIK NEGERI SAMBAS • LULUSAN 2026 • IPK 3.82
          </span>
        </motion.div>

        {/* Big Cosmic Main Name */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="relative mb-3"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight uppercase">
            <span className="bg-gradient-to-b from-white via-slate-100 to-blue-300 bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(44,103,237,0.4)]">
              {personalData.name}
            </span>
          </h1>
          {/* Subtle orbital ring accent */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-[2px] bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent shadow-[0_0_12px_#2c67ed]" />
        </motion.div>

        {/* Typewriter Dynamic Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-2 text-xl sm:text-2xl md:text-3xl font-mono text-slate-200 mt-2 mb-6 h-12"
        >
          <span className="text-blue-400">&gt;</span>
          <span className="text-[#6097fa] font-bold glow-blue-text">
            {displayedText}
          </span>
          <span className="inline-block w-2.5 h-6 md:h-7 bg-[#2c67ed] animate-pulse shadow-[0_0_10px_#2c67ed]" />
        </motion.div>

        {/* Short Cosmic Bio */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-2xl text-slate-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8 px-4"
        >
          Perancang & Pengembang Sistem Informasi <span className="text-blue-300 font-medium">BPDAS Kapuas</span> berbasis Web (CodeIgniter 4, PHP & MySQL). Fokus pada rekayasa web modular, integrasi geolokasi GIS spasial, dan digitalisasi administrasi instansi.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 w-full sm:w-auto px-4"
        >
          {/* Primary CTA */}
          <a
            href="#portfolio"
            className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-semibold text-sm text-white bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] shadow-[0_0_25px_rgba(44,103,237,0.65)] hover:shadow-[0_0_35px_rgba(44,103,237,0.9)] transition-all duration-300 w-full sm:w-auto"
          >
            <Rocket className="w-4 h-4 text-cyan-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>Jelajahi Portfolio</span>
            <ArrowRight className="w-4 h-4 text-blue-200 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* Secondary CTA */}
          <a
            href="#about"
            className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-medium text-sm text-slate-200 bg-[#080e22]/90 hover:bg-[#0f1b40] border border-[#2c67ed]/40 hover:border-[#2c67ed] shadow-[0_0_15px_rgba(44,103,237,0.2)] hover:shadow-[0_0_25px_rgba(44,103,237,0.4)] transition-all duration-300 w-full sm:w-auto"
          >
            <Code2 className="w-4 h-4 text-[#6097fa]" />
            <span>Tentang & Pengalaman</span>
          </a>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-mono text-xs text-blue-300/90 hover:text-cyan-300 border border-blue-900/50 hover:border-blue-500/40 bg-blue-950/20 hover:bg-blue-900/30 transition-all w-full sm:w-auto"
          >
            <span>Hubungi Saya</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Space Orbit Specs Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-14 w-full max-w-3xl px-2"
        >
          <div className="p-3.5 rounded-2xl bg-[#060b1d]/80 border border-blue-900/40 backdrop-blur-md flex flex-col items-center">
            <span className="text-xs text-slate-400 font-mono">Tugas Akhir</span>
            <span className="text-base font-bold text-white mt-0.5">BPDAS Kapuas</span>
            <span className="text-[10px] text-cyan-400 font-mono">Web GIS & CI4</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#060b1d]/80 border border-blue-900/40 backdrop-blur-md flex flex-col items-center">
            <span className="text-xs text-slate-400 font-mono">Indeks Prestasi</span>
            <span className="text-base font-bold text-cyan-300 mt-0.5">3.82 / 4.00</span>
            <span className="text-[10px] text-blue-400 font-mono">Politeknik Sambas</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#060b1d]/80 border border-blue-900/40 backdrop-blur-md flex flex-col items-center">
            <span className="text-xs text-slate-400 font-mono">Testing Validasi</span>
            <span className="text-base font-bold text-emerald-400 mt-0.5">100% Passed</span>
            <span className="text-[10px] text-slate-400 font-mono">Black Box Testing</span>
          </div>

          <div className="p-3.5 rounded-2xl bg-[#060b1d]/80 border border-blue-900/40 backdrop-blur-md flex flex-col items-center">
            <span className="text-xs text-slate-400 font-mono">Keahlian Utama</span>
            <span className="text-base font-bold text-white mt-0.5">Web & Database</span>
            <span className="text-[10px] text-[#6097fa] font-mono">PHP • MySQL • JS</span>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{ opacity: { delay: 1, duration: 0.5 }, y: { repeat: Infinity, duration: 2 } }}
          className="mt-12 text-slate-400 hover:text-cyan-300 transition-colors flex flex-col items-center gap-1 cursor-pointer"
        >
          <span className="text-[11px] font-mono tracking-widest uppercase">Scroll Down</span>
          <ChevronDown className="w-4 h-4 text-blue-400 animate-bounce" />
        </motion.a>

      </div>
    </section>
  );
}
