import React from 'react';
import { Rocket, Heart, ArrowUp, Sparkles, Github, Linkedin, Instagram, Mail } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-blue-900/40 bg-[#02040b]/90 backdrop-blur-md pt-12 pb-8 px-4 md:px-8 overflow-hidden">
      {/* Background Subtle Line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#2c67ed]/60 to-transparent shadow-[0_0_15px_#2c67ed]" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand & Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#193eb0] to-[#2c67ed] flex items-center justify-center p-[1px] shadow-[0_0_10px_#2c67ed]">
              <div className="w-full h-full bg-[#020512] rounded-full flex items-center justify-center">
                <Rocket className="w-3.5 h-3.5 text-cyan-400" />
              </div>
            </div>
            <span className="font-extrabold text-white text-base tracking-wide">
              {personalData.name.toUpperCase()}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-cyan-300 border border-blue-700/40">
              A.Md.Kom.
            </span>
          </div>
          <p className="text-xs text-slate-400 max-w-sm">
            D3 Manajemen Informatika • Politeknik Negeri Sambas (POLTESA)
          </p>
          <p className="text-[11px] font-mono text-blue-400/80 mt-0.5">
            IPK 3.82 • Balai Pengelolaan Daerah Aliran Sungai (BPDAS) Kapuas
          </p>
        </div>

        {/* Quick Nav Anchors */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium text-slate-300">
          <a href="#home" className="hover:text-cyan-300 transition-colors">Beranda</a>
          <a href="#about" className="hover:text-cyan-300 transition-colors">Tentang Saya</a>
          <a href="#portfolio" className="hover:text-cyan-300 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-cyan-300 transition-colors">Kontak</a>
        </div>

        {/* Satellite Online Status & Back to Top */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-950/60 border border-blue-800/40 text-[11px] font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Orbital Link Online</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-full bg-blue-950 hover:bg-[#2c67ed] border border-blue-700/40 text-slate-300 hover:text-white shadow-sm hover:shadow-[0_0_15px_#2c67ed] transition-all"
            title="Kembali ke Atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      {/* Copyright Line */}
      <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-blue-950/80 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-2 text-center sm:text-left">
        <div>
          © {new Date().getFullYear()} Andriyan, A.Md.Kom. Seluruh hak cipta dilindungi undang-undang.
        </div>
        <div className="flex items-center gap-1 text-slate-400">
          <span>Dibangun dengan React + Tailwind CSS + Framer Motion</span>
          <Sparkles className="w-3 h-3 text-[#2c67ed]" />
        </div>
      </div>
    </footer>
  );
}
