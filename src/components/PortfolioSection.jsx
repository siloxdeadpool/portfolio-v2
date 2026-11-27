import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import ProjectDetailModal from './ProjectDetailModal';
import { 
  FolderGit2, 
  Award, 
  Cpu, 
  ExternalLink, 
  Layers, 
  Database, 
  MapPin, 
  Sparkles, 
  CheckCircle2, 
  Calendar, 
  ShieldCheck,
  Server,
  Layout,
  Wrench,
  Code2,
  ChevronRight,
  Trophy,
  Compass
} from 'lucide-react';

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState('projects'); // 'projects' | 'certificates' | 'techstack'
  const [selectedProject, setSelectedProject] = useState(null);

  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Server': return <Server className="w-5 h-5 text-blue-400" />;
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Database': return <Database className="w-5 h-5 text-indigo-400" />;
      case 'Wrench': return <Wrench className="w-5 h-5 text-emerald-400" />;
      default: return <Code2 className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section id="portfolio" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-[#2c67ed]/15 blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-cyan-500/10 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>PORTFOLIO & KOMPETENSI TEKNOLOGI</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Karya & <span className="bg-gradient-to-r from-[#6097fa] to-cyan-400 bg-clip-text text-transparent">Pencapaian</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          Eksplorasi proyek aplikasi web nyata, sertifikasi keahlian, dan susunan teknologi yang dikuasai.
        </p>
      </div>

      {/* Modern Capsule Tab Selector */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex p-1.5 rounded-full bg-[#05091c]/90 border border-blue-500/30 backdrop-blur-xl shadow-[0_0_25px_rgba(44,103,237,0.25)]">
          
          <button
            onClick={() => setActiveTab('projects')}
            className={`
              relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === 'projects'
                ? 'text-white shadow-[0_0_20px_rgba(44,103,237,0.7)]'
                : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
              }
            `}
          >
            {activeTab === 'projects' && (
              <motion.div
                layoutId="portfolioActiveTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] border border-blue-400/40 -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <FolderGit2 className="w-4 h-4 text-cyan-300" />
            <span>Projects ({personalData.projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('certificates')}
            className={`
              relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === 'certificates'
                ? 'text-white shadow-[0_0_20px_rgba(44,103,237,0.7)]'
                : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
              }
            `}
          >
            {activeTab === 'certificates' && (
              <motion.div
                layoutId="portfolioActiveTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] border border-blue-400/40 -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <Award className="w-4 h-4 text-cyan-300" />
            <span>Certificates ({personalData.certificates.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('techstack')}
            className={`
              relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 flex items-center gap-2
              ${activeTab === 'techstack'
                ? 'text-white shadow-[0_0_20px_rgba(44,103,237,0.7)]'
                : 'text-slate-400 hover:text-white hover:bg-blue-950/50'
              }
            `}
          >
            {activeTab === 'techstack' && (
              <motion.div
                layoutId="portfolioActiveTab"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] border border-blue-400/40 -z-10"
                transition={{ type: 'spring', stiffness: 350, damping: 30 }}
              />
            )}
            <Cpu className="w-4 h-4 text-cyan-300" />
            <span>Tech Stack</span>
          </button>

        </div>
      </div>

      {/* Tab Panels */}
      <AnimatePresence mode="wait">
        
        {/* ================= TAB 1: PROJECTS ================= */}
        {activeTab === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* FEATURED PROJECT: TUGAS AKHIR BPDAS KAPUAS */}
            {personalData.projects.filter(p => p.featured).map((proj) => (
              <div
                key={proj.id}
                className="relative rounded-3xl cosmic-glass border-2 border-[#2c67ed]/50 shadow-[0_0_35px_rgba(44,103,237,0.35)] p-6 sm:p-8 lg:p-10 overflow-hidden group hover:border-[#2c67ed] transition-all"
              >
                {/* Top Glowing Cosmic Line */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent shadow-[0_0_15px_#2c67ed]" />
                
                {/* Background decorative watermark */}
                <div className="absolute -right-10 -bottom-10 w-80 h-80 bg-gradient-to-br from-[#2c67ed]/20 to-transparent rounded-full blur-3xl pointer-events-none" />

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Left Content (7 cols) */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-[#2c67ed] text-white shadow-[0_0_10px_#2c67ed]">
                        🌟 PROJECT UTAMA TUGAS AKHIR
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950 text-cyan-300 border border-blue-500/30">
                        {proj.category}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm font-mono text-cyan-300">
                      {proj.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {proj.summary}
                    </p>

                    {/* Highlights bullet list */}
                    <div className="space-y-2 pt-2">
                      {proj.highlights.slice(0, 4).map((h, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {proj.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-[#070e28] text-blue-200 border border-blue-800/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <div className="pt-4 flex flex-wrap gap-3">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] text-white text-xs sm:text-sm font-bold shadow-[0_0_20px_rgba(44,103,237,0.6)] hover:shadow-[0_0_30px_rgba(44,103,237,0.9)] flex items-center gap-2 transition-all"
                      >
                        <Layers className="w-4 h-4 text-cyan-300" />
                        <span>Lihat Arsitektur & Detail Lengkap TA</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Showcase Card Visual (5 cols) */}
                  <div className="lg:col-span-5">
                    <div className="rounded-2xl bg-[#030614] border border-blue-500/30 p-4 shadow-2xl relative overflow-hidden">
                      {/* Terminal bar */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-blue-900/40 text-[11px] font-mono text-slate-400">
                        <div className="flex items-center gap-1.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                        </div>
                        <span className="text-cyan-400">bpdas-kapuas.local</span>
                      </div>

                      {/* Mockup screen content */}
                      <div className="space-y-3 text-xs">
                        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-950/80 to-indigo-950/80 border border-blue-700/40">
                          <span className="text-[10px] text-cyan-300 font-mono">Status Sistem</span>
                          <p className="font-bold text-white mt-0.5">Layanan Distribusi Bibit BPDAS</p>
                          <p className="text-[11px] text-slate-300 mt-1">Multi-aktor: Pemohon • Kantor • Persemaian</p>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-center">
                          <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40">
                            <span className="text-[10px] text-slate-400">Lokasi Persemaian</span>
                            <p className="text-xs font-bold text-cyan-300">2 Stasiun Lapangan</p>
                            <span className="text-[9px] text-slate-500">Sungai Selamat & Nanga Pinoh</span>
                          </div>
                          <div className="p-2.5 rounded-lg bg-blue-950/40 border border-blue-900/40">
                            <span className="text-[10px] text-slate-400">Jenis Bibit</span>
                            <p className="text-xs font-bold text-emerald-400">11+ Varietas</p>
                            <span className="text-[9px] text-slate-500">Petai, Pucuk Merah, dll</span>
                          </div>
                        </div>

                        <div className="p-3 rounded-lg bg-[#070e28] border border-blue-800/40 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-cyan-400" />
                            <span className="text-[11px] text-slate-300">Leaflet Geolocation Map</span>
                          </div>
                          <span className="text-[10px] font-mono text-emerald-400">Live Coordinate</span>
                        </div>

                        <button
                          onClick={() => setSelectedProject(proj)}
                          className="w-full py-2 rounded-lg bg-blue-900/40 hover:bg-blue-800/60 text-cyan-300 border border-blue-600/40 text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                        >
                          <span>Buka Lembar Fakta Proyek</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            ))}

            {/* SUPPORTING PROJECTS GRID (3 COLS) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              {personalData.projects.filter(p => !p.featured).map((proj) => (
                <div
                  key={proj.id}
                  className="rounded-3xl cosmic-glass border border-blue-500/20 hover:border-blue-500/60 p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_25px_rgba(44,103,237,0.3)] hover:-translate-y-1 group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950 text-cyan-300 border border-blue-600/30">
                        {proj.category}
                      </span>
                      <Sparkles className="w-4 h-4 text-blue-400 group-hover:text-cyan-300 transition-colors" />
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs font-mono text-slate-400 mt-1 mb-3">
                      {proj.subtitle}
                    </p>

                    <p className="text-xs text-slate-300 leading-relaxed mb-4">
                      {proj.summary}
                    </p>

                    <div className="space-y-1.5 mb-5">
                      {proj.highlights.map((h, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-xs text-slate-400">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-blue-900/40">
                      {proj.tech.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950/60 text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ================= TAB 2: CERTIFICATES ================= */}
        {activeTab === 'certificates' && (
          <motion.div
            key="certificates"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {personalData.certificates.map((cert, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl cosmic-glass border border-blue-500/25 p-6 hover:border-blue-400/60 transition-all duration-300 hover:shadow-[0_0_30px_rgba(44,103,237,0.3)] flex flex-col justify-between group overflow-hidden"
              >
                {/* Glow accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl group-hover:bg-cyan-500/20 transition-all" />

                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-gradient-to-r from-blue-950 to-indigo-950 text-cyan-300 border border-blue-500/40">
                      {cert.badge}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-blue-400" />
                      {cert.validity}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#6097fa] mt-1 flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5" />
                    Penerbit: {cert.issuer}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 mt-3 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-blue-900/40 flex items-center justify-between text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-1.5 text-cyan-400">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>Terverifikasi Resmi</span>
                  </div>
                  <span className="text-[11px] text-blue-300 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40">
                    ID: {cert.credentialId}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* ================= TAB 3: TECH STACK ================= */}
        {activeTab === 'techstack' && (
          <motion.div
            key="techstack"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {personalData.skills.map((cat, idx) => (
              <div
                key={idx}
                className="rounded-3xl cosmic-glass border border-blue-500/25 p-6 hover:border-blue-400/50 transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(44,103,237,0.25)]"
              >
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-blue-900/40">
                  <div className="p-2.5 rounded-xl bg-blue-950/80 border border-blue-600/40">
                    {getCategoryIcon(cat.icon)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">{cat.category}</h3>
                    <span className="text-[11px] font-mono text-cyan-300">Modul Kompetensi Teruji</span>
                  </div>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-slate-200">{item.name}</span>
                        <span className="font-mono text-cyan-400 font-bold">{item.level}%</span>
                      </div>
                      
                      {/* Skill Meter Bar */}
                      <div className="w-full h-2 rounded-full bg-[#05091a] border border-blue-900/40 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: itemIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-[#1e4fd8] via-[#2c67ed] to-cyan-400 shadow-[0_0_10px_#2c67ed]"
                        />
                      </div>
                      
                      <p className="text-[11px] text-slate-400 leading-tight">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        )}

      </AnimatePresence>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

    </section>
  );
}
