import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { personalData } from '../data/portfolioData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  MessageSquare, 
  Copy, 
  Check, 
  Github, 
  Linkedin, 
  Instagram, 
  ArrowUpRight,
  Radio
} from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    // Simulate transmission delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      // Auto open whatsapp message if preferred
      const waText = `Halo Andriyan, saya ${formData.name} (${formData.email}).\nSubjek: ${formData.subject || 'Kolaborasi / Diskusi Web'}\n\nPesan:\n${formData.message}`;
      const waUrl = `https://wa.me/${personalData.whatsapp}?text=${encodeURIComponent(waText)}`;
      window.open(waUrl, '_blank');
      
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSent(false), 8000);
    }, 1200);
  };

  const copyToClipboard = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2500);
  };

  return (
    <section id="contact" className="relative py-24 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Background Section Glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-[#2c67ed]/15 blur-[130px] pointer-events-none -z-10" />

      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-950/70 border border-blue-500/30 text-cyan-300 text-xs font-mono mb-3">
          <Radio className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
          <span>TERMINAL TRANSMISI & HUBUNGAN</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
          Hubungi <span className="bg-gradient-to-r from-[#6097fa] to-cyan-400 bg-clip-text text-transparent">Saya</span>
        </h2>
        <p className="text-slate-400 max-w-xl mx-auto mt-3 text-sm sm:text-base">
          Tertarik merekrut, berkolaborasi dalam proyek web, atau ingin berdiskusi seputar sistem informasi? Saluran transmisi terbuka 24/7.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Col: Contact Information & Direct Channels (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5 space-y-6"
        >
          {/* Direct Reach Card */}
          <div className="p-6 rounded-3xl cosmic-glass border border-blue-500/30 shadow-[0_0_25px_rgba(44,103,237,0.2)]">
            <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              Komunikasi Langsung
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
              Jangan ragu untuk mengirimkan surel atau pesan WhatsApp kapan saja. Saya siap merespon pertanyaan dengan cepat.
            </p>

            <div className="space-y-4">
              {/* Email */}
              <div className="p-3.5 rounded-2xl bg-[#070e28] border border-blue-900/50 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-950 text-cyan-400 border border-blue-700/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">Email Utama</span>
                    <a href={personalData.links.email} className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalData.email}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.email, 'email')}
                  className="p-2 rounded-lg hover:bg-blue-900/40 text-slate-400 hover:text-white transition-colors"
                  title="Salin Email"
                >
                  {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp */}
              <div className="p-3.5 rounded-2xl bg-[#070e28] border border-blue-900/50 flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-950 text-cyan-400 border border-blue-700/40">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 block">WhatsApp / Telepon</span>
                    <a href={personalData.links.whatsapp} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      {personalData.phone}
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard(personalData.phone, 'phone')}
                  className="p-2 rounded-lg hover:bg-blue-900/40 text-slate-400 hover:text-white transition-colors"
                  title="Salin Nomor"
                >
                  {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="p-3.5 rounded-2xl bg-[#070e28] border border-blue-900/50 flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-950 text-cyan-400 border border-blue-700/40 shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] font-mono text-slate-400 block">Domisili</span>
                  <p className="text-xs text-white leading-snug">
                    Dusun Pimpinan Parit, RT.003/RW.010, Desa Pipiteja, Kec. Teluk Keramat, Kab. Sambas, Kalimantan Barat
                  </p>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-6 pt-5 border-t border-blue-900/40">
              <span className="text-xs font-mono text-slate-400 block mb-3">Tautan Saluran Digital:</span>
              <div className="flex items-center gap-2.5">
                <a
                  href={personalData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-950/60 hover:bg-[#2c67ed] border border-blue-800/40 text-slate-300 hover:text-white shadow-sm hover:shadow-[0_0_15px_#2c67ed] transition-all"
                  title="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={personalData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-950/60 hover:bg-[#2c67ed] border border-blue-800/40 text-slate-300 hover:text-white shadow-sm hover:shadow-[0_0_15px_#2c67ed] transition-all"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={personalData.links.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-blue-950/60 hover:bg-[#2c67ed] border border-blue-800/40 text-slate-300 hover:text-white shadow-sm hover:shadow-[0_0_15px_#2c67ed] transition-all"
                  title="Instagram Profile"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a
                  href={personalData.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-600/80 to-teal-600/80 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-2 shadow-[0_0_15px_rgba(16,185,129,0.4)] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Col: Cosmic Contact Form (7 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7"
        >
          <div className="p-6 sm:p-8 rounded-3xl cosmic-glass border border-blue-500/35 shadow-[0_0_30px_rgba(44,103,237,0.3)] relative overflow-hidden">
            
            {/* Top cosmic line */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2c67ed] to-transparent" />

            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  Kirim Pesan Kosmik
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Isi formulir di bawah ini untuk mengirimkan pesan secara langsung.
                </p>
              </div>
              <span className="text-[10px] font-mono text-cyan-300 px-2.5 py-1 rounded bg-blue-950 border border-blue-700/40">
                Pesan Cepat
              </span>
            </div>

            {/* Success alert message */}
            {isSent && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-2xl bg-emerald-950/70 border border-emerald-500/50 text-emerald-200 text-xs sm:text-sm mb-6 flex items-start gap-3 shadow-[0_0_20px_rgba(16,185,129,0.3)]"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <strong className="block text-white font-bold">Transmisi Berhasil Dikirim!</strong>
                  Pesan Anda telah diteruskan ke WhatsApp dan surel Andriyan. Kami akan segera menghubungi Anda kembali.
                </div>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Nama Lengkap <span className="text-[#6097fa]">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Rahmat Santoso"
                    className="w-full px-4 py-3 rounded-xl bg-[#040817] border border-blue-900/60 focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-white text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>

                {/* Email */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-slate-300 block">
                    Alamat Email <span className="text-[#6097fa]">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@email.com"
                    className="w-full px-4 py-3 rounded-xl bg-[#040817] border border-blue-900/60 focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-white text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-all"
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Subjek / Topik Bahasan
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Peluang Kerja / Kolaborasi Proyek / Pertanyaan"
                  className="w-full px-4 py-3 rounded-xl bg-[#040817] border border-blue-900/60 focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-white text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label className="text-xs font-mono text-slate-300 block">
                  Isi Pesan <span className="text-[#6097fa]">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan, penawaran proyek, atau detail komunikasi Anda di sini..."
                  className="w-full px-4 py-3 rounded-xl bg-[#040817] border border-blue-900/60 focus:border-[#2c67ed] focus:ring-1 focus:ring-[#2c67ed] text-white text-xs sm:text-sm placeholder:text-slate-600 outline-none transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full py-3.5 px-6 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#2c67ed] via-[#1e4fd8] to-[#2c67ed] shadow-[0_0_20px_rgba(44,103,237,0.6)] hover:shadow-[0_0_30px_rgba(44,103,237,0.9)] hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              >
                {isSending ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Mentransmisikan Pesan...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-cyan-300 group-hover:translate-x-1 transition-transform" />
                    <span>Kirim Pesan Sekarang</span>
                  </>
                )}
              </button>
            </form>

            <div className="mt-4 text-center">
              <span className="text-[11px] text-slate-500 font-mono">
                🔒 Informasi Anda dijaga kerahasiaannya dan dienkripsi secara aman.
              </span>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
