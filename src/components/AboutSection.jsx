import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  Calendar, 
  MapPin, 
  Award, 
  BookOpen, 
  Building2, 
  CheckCircle2, 
  ChevronRight,
  Sparkles,
  Layers,
  Terminal,
  ExternalLink,
  Mail,
  Phone
} from 'lucide-react';

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState('experience'); // 'experience' | 'education' | 'bio'

  return (
    <section id="about" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#2c67ed]/10 blur-[120px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/60 border border-blue-500/30 text-blue-300 text-xs font-mono mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>TRANSMISI DATA PENGEMBANG</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Tentang <span className="bg-gradient-to-r from-[#6097fa] to-cyan-400 bg-clip-text text-transparent">Saya</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          Mengenal lebih dekat profil akademis, rekam jejak pengalaman lapangan, dan dedikasi dalam rekayasa perangkat lunak.
        </p>
      </div>

      {/* Main Grid: Profile Card & Interactive Details */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Futuristic Cosmic Profile Card (4 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-4 p-6 rounded-3xl cosmic-glass border border-blue-500/30 shadow-[0_0_25px_rgba(44,103,237,0.25)] relative overflow-hidden group"
        >
          {/* Subtle cosmic corner light */}
          <div className="absolute -top-12 -right-12 w-32 h-32 bg-[#2c67ed]/30 rounded-full blur-2xl group-hover:scale-125 transition-transform" />

          {/* Profile Avatar / Photo Container with Cosmic Glow */}
          <div className="relative mx-auto w-44 h-44 mb-6 flex items-center justify-center">
            {/* Spinning Neon Planetary Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#2c67ed]/70 animate-spin" style={{ animationDuration: '24s' }} />
            <div className="absolute -inset-2 rounded-full border border-cyan-400/40 animate-pulse" />
            <div className="absolute inset-1 rounded-full bg-gradient-to-tr from-[#2c67ed] to-cyan-400 blur-md opacity-60 group-hover:opacity-90 transition-opacity" />

            {/* Inner Photo Frame with User's Uploaded Photo */}
            <div className="relative w-40 h-40 rounded-full overflow-hidden bg-[#070d24] border-2 border-blue-400/50 shadow-[0_0_20px_rgba(44,103,237,0.5)]">
              <img 
                src="/profile.jpg" 
                alt="Andriyan, A.Md.Kom." 
                className="w-full h-full object-cover object-top hover:scale-110 transition-transform duration-500"
              />
            </div>

            {/* IPK Floating Badge */}
            <div className="absolute -bottom-2 -right-1 px-3 py-1 rounded-full bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] border border-cyan-300/60 shadow-[0_0_15px_rgba(44,103,237,0.9)] text-white text-[11px] font-bold font-mono">
              ⭐ IPK 3.82
            </div>
          </div>

          {/* Name & Titles */}
          <div className="text-center mb-5">
            <h3 className="text-xl font-bold text-white">{personalData.fullName}</h3>
            <p className="text-xs font-mono text-cyan-300 mt-0.5">NIM: {personalData.nim}</p>
            <p className="text-xs text-slate-300 mt-1">D3 Manajemen Informatika</p>
            <p className="text-xs text-blue-400/90 font-medium">Politeknik Negeri Sambas (POLTESA)</p>
          </div>

          {/* Quick Info List */}
          <div className="space-y-2.5 text-xs text-slate-300 border-t border-blue-900/40 pt-4 mb-5">
            <div className="flex items-start gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <span>Dusun Pimpinan Parit, Pipiteja, Teluk Keramat, Sambas, Kalbar</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
              <a href={personalData.links.email} className="hover:text-cyan-300 transition-colors truncate">
                {personalData.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{personalData.phone}</span>
            </div>
          </div>

          {/* CTA Download / Contact */}
          <a
            href={personalData.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#2c67ed]/80 to-[#1e4fd8]/80 hover:from-[#2c67ed] hover:to-[#1e4fd8] text-white text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(44,103,237,0.4)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>Hubungi via WhatsApp</span>
          </a>
        </motion.div>

        {/* Right Col: Timeline & Stats (8 cols) */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-8 flex flex-col gap-6"
        >
          {/* Project & Academic Stat Cards (4 Grid) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {personalData.stats.map((stat, idx) => (
              <div 
                key={idx} 
                className="p-4 rounded-2xl cosmic-glass border border-blue-500/20 hover:border-blue-400/50 shadow-sm hover:shadow-[0_0_20px_rgba(44,103,237,0.3)] transition-all flex flex-col items-center text-center"
              >
                <span className="text-2xl sm:text-3xl font-extrabold text-transparent bg-gradient-to-r from-white via-cyan-200 to-[#6097fa] bg-clip-text">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-slate-200 mt-1">{stat.label}</span>
                <span className="text-[10px] font-mono text-cyan-400/80">{stat.unit}</span>
              </div>
            ))}
          </div>

          {/* Tab Selector Buttons */}
          <div className="flex items-center gap-2 p-1.5 rounded-2xl bg-[#060b1e]/90 border border-blue-900/50">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
              }`}
            >
              <Briefcase className="w-4 h-4 text-cyan-300" />
              <span>Pengalaman Kerja</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
              }`}
            >
              <GraduationCap className="w-4 h-4 text-cyan-300" />
              <span>Riwayat Pendidikan</span>
            </button>
            <button
              onClick={() => setActiveTab('bio')}
              className={`flex-1 py-2 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all ${
                activeTab === 'bio'
                  ? 'bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] text-white shadow-[0_0_15px_rgba(44,103,237,0.5)]'
                  : 'text-slate-400 hover:text-white hover:bg-blue-950/40'
              }`}
            >
              <User className="w-4 h-4 text-cyan-300" />
              <span>Profil Lengkap</span>
            </button>
          </div>

          {/* Content Area Based on Active Tab */}
          <div className="p-6 rounded-3xl cosmic-glass border border-blue-500/20 shadow-[0_0_20px_rgba(44,103,237,0.15)] min-h-[380px]">
            
            {/* TAB: PENGALAMAN KERJA */}
            {activeTab === 'experience' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <Building2 className="w-4 h-4" />
                    <span>Rekam Jejak Lapangan & Instansi</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Agustus - Desember 2025</span>
                </div>

                {personalData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 border-l-2 border-[#2c67ed]">
                    {/* Glowing Bullet */}
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-[#2c67ed] border-2 border-white shadow-[0_0_10px_#2c67ed]" />

                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h4 className="text-base sm:text-lg font-bold text-white">
                        {exp.role}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono bg-blue-950 text-cyan-300 border border-blue-500/30">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-[#6097fa] mt-0.5">
                      {exp.company} • {exp.location}
                    </p>

                    <p className="text-xs sm:text-sm text-slate-300 mt-2.5 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Key Contributions */}
                    <div className="mt-4 space-y-2">
                      <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider">
                        Tanggung Jawab & Kontribusi Kunci:
                      </span>
                      {exp.keyTasks.map((task, tIdx) => (
                        <div key={tIdx} className="flex items-start gap-2 text-xs text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {exp.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2.5 py-1 rounded-md text-[10px] font-mono bg-[#0c1538] text-blue-200 border border-blue-800/40"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB: RIWAYAT PENDIDIKAN */}
            {activeTab === 'education' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-3 border-b border-blue-900/40">
                  <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
                    <GraduationCap className="w-4 h-4" />
                    <span>Jejak Pendidikan Formal (SD - D3)</span>
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 font-bold">IPK 3.82 (Cum Laude)</span>
                </div>

                <div className="space-y-5">
                  {personalData.education.map((edu, idx) => (
                    <div key={idx} className="relative pl-6 border-l-2 border-blue-700/60 pb-1">
                      {/* Node Bullet */}
                      <div className={`absolute -left-[7px] top-1.5 w-3 h-3 rounded-full ${idx === 0 ? 'bg-cyan-400 shadow-[0_0_10px_#00f0ff]' : 'bg-slate-500'}`} />

                      <div className="flex flex-wrap items-baseline justify-between gap-1">
                        <h4 className="text-sm sm:text-base font-bold text-white">
                          {edu.school}
                        </h4>
                        <span className="text-xs font-mono text-blue-300/80">
                          {edu.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-2 mt-0.5">
                        <span className="text-xs font-medium text-cyan-300">{edu.degree}</span>
                        {edu.score && (
                          <span className="px-2 py-0.2 rounded text-[10px] font-bold bg-blue-900/60 text-white border border-blue-400/40">
                            {edu.score}
                          </span>
                        )}
                      </div>

                      {edu.description && (
                        <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                          {edu.description}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB: PROFIL BIODATA LENGKAP */}
            {activeTab === 'bio' && (
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm pb-3 border-b border-blue-900/40">
                  <User className="w-4 h-4" />
                  <span>Biodata & Pernyataan Diri</span>
                </div>

                <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                  {personalData.bio}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40">
                    <span className="text-[11px] font-mono text-slate-400">Tempat, Tanggal Lahir</span>
                    <p className="text-xs font-bold text-white mt-0.5">Pimpinan Parit, 21 September 2004</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40">
                    <span className="text-[11px] font-mono text-slate-400">Agama & Kebangsaan</span>
                    <p className="text-xs font-bold text-white mt-0.5">Islam • Indonesia</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40">
                    <span className="text-[11px] font-mono text-slate-400">Program Studi & Jurusan</span>
                    <p className="text-xs font-bold text-white mt-0.5">D3 Manajemen Informatika</p>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-950/30 border border-blue-900/40">
                    <span className="text-[11px] font-mono text-slate-400">Perguruan Tinggi</span>
                    <p className="text-xs font-bold text-white mt-0.5">Politeknik Negeri Sambas</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-blue-950/50 to-indigo-950/40 border border-blue-500/30 mt-3">
                  <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5">
                    <Award className="w-4 h-4" />
                    Etos Kerja & Karakter
                  </span>
                  <p className="text-xs text-slate-300 mt-1.5 leading-relaxed">
                    Terbiasa bekerja mandiri maupun kolaboratif dalam tim, memiliki cara berpikir analitis, teliti dalam validasi data, serta berorientasi pada penyelesaian masalah nyata dengan teknologi web yang efisien.
                  </p>
                </div>
              </div>
            )}

          </div>

        </motion.div>

      </div>
    </section>
  );
}
