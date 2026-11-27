import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Sparkles, Send, User, Briefcase, Mail } from 'lucide-react';

export default function FloatingNavbar({ activeSection }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#home', id: 'home', icon: Rocket },
    { label: 'Tentang Saya', href: '#about', id: 'about', icon: User },
    { label: 'Portfolio', href: '#portfolio', id: 'portfolio', icon: Briefcase },
    { label: 'Kontak', href: '#contact', id: 'contact', icon: Mail },
  ];

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-40 w-[92%] max-w-4xl transition-all duration-300">
      {/* Floating Pill Container with Blue Glow */}
      <nav className={`
        relative px-4 py-2 md:px-6 md:py-2.5 rounded-full 
        bg-[#050814]/85 backdrop-blur-xl 
        border border-[#2c67ed]/40 
        shadow-[0_0_25px_rgba(44,103,237,0.45),0_10px_30px_rgba(0,0,0,0.7)]
        transition-all duration-300
        ${isScrolled ? 'border-[#2c67ed]/60 shadow-[0_0_35px_rgba(44,103,237,0.6)]' : ''}
      `}>
        {/* Subtle top neon reflection line */}
        <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#6097fa] to-transparent opacity-75" />

        <div className="flex items-center justify-between">
          {/* Logo Brand with Real Photo Avatar */}
          <a 
            href="#home" 
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex items-center justify-center w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-tr from-[#193eb0] to-cyan-400 p-[1.5px] shadow-[0_0_12px_rgba(44,103,237,0.8)] group-hover:shadow-[0_0_20px_rgba(44,103,237,1)] transition-all">
              <div className="w-full h-full rounded-full overflow-hidden bg-[#030611]">
                <img 
                  src="/profile.jpg" 
                  alt="Andriyan" 
                  className="w-full h-full object-cover object-top" 
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-sm md:text-base tracking-wider bg-gradient-to-r from-white via-blue-100 to-[#6097fa] bg-clip-text text-transparent">
                ANDRIYAN
              </span>
              <span className="text-[9px] font-mono tracking-widest text-blue-400/80 uppercase -mt-0.5">
                A.Md.Kom.
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    relative px-3.5 py-1.5 rounded-full text-xs lg:text-sm font-medium transition-all duration-200 flex items-center gap-1.5
                    ${isActive 
                      ? 'text-white font-semibold shadow-[0_0_15px_rgba(44,103,237,0.5)]' 
                      : 'text-slate-300 hover:text-white hover:bg-blue-500/10'
                    }
                  `}
                >
                  {isActive && (
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e4fd8]/80 to-[#2c67ed]/80 -z-10 border border-blue-400/50" />
                  )}
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-cyan-300' : 'text-slate-400'}`} />
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Right Action Button */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="#contact"
              className="relative group overflow-hidden px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] shadow-[0_0_15px_rgba(44,103,237,0.6)] hover:shadow-[0_0_25px_rgba(44,103,237,0.9)] transition-all flex items-center gap-1.5"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-pulse" />
                Let's Talk
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-slate-300 hover:text-white hover:bg-blue-900/40 focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-cyan-300" /> : <Menu className="w-5 h-5 text-blue-400" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-blue-500/20 flex flex-col gap-1 pb-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              const Icon = item.icon;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`
                    px-4 py-2.5 rounded-xl text-sm font-medium flex items-center gap-3 transition-all
                    ${isActive 
                      ? 'bg-gradient-to-r from-[#2c67ed]/80 to-[#1e4fd8]/80 text-white font-semibold' 
                      : 'text-slate-300 hover:bg-blue-500/10 hover:text-white'
                    }
                  `}
                >
                  <Icon className="w-4 h-4 text-cyan-400" />
                  {item.label}
                </a>
              );
            })}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-2 w-full text-center py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] shadow-[0_0_15px_rgba(44,103,237,0.6)] flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4 text-cyan-300" />
              Hubungi Sekarang
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
