import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Database, 
  FileText, 
  ShieldCheck, 
  Users, 
  MapPin, 
  TreePine,
  Printer,
  Sparkles
} from 'lucide-react';

export default function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[70] flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#060b1e] border border-blue-500/40 shadow-[0_0_50px_rgba(44,103,237,0.4)] p-6 sm:p-8 z-10 text-slate-200"
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-blue-950/80 hover:bg-blue-900 border border-blue-500/30 text-slate-300 hover:text-white transition-colors"
          >
            <X className="w-5 h-5 text-cyan-400" />
          </button>

          {/* Modal Header */}
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 mb-2">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span>KARYA TUGAS AKHIR POLITEKNIK NEGERI SAMBAS (2026)</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            {project.title}
          </h3>
          <p className="text-xs sm:text-sm text-blue-300 font-mono mt-1">
            {project.subtitle} • {project.category}
          </p>

          {/* Tech Badges */}
          <div className="flex flex-wrap gap-2 my-4">
            {project.tech.map((t, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full text-xs font-mono bg-blue-950/90 text-cyan-300 border border-blue-500/30"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Body Content */}
          <div className="space-y-6 mt-6 text-sm text-slate-300">
            
            {/* Overview Box */}
            <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-900/50">
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                Ringkasan & Masalah yang Diselesaikan
              </h4>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300">
                Sebelum sistem ini dibangun, permohonan bibit tanaman pada Persemaian Permanen BPDAS Kapuas (Sungai Selamat & Kelaik Nanga Pinoh) masih manual menggunakan surat fisik, fotocopy KTP, dan gambar sketsa lokasi penanaman tangan. Hal ini menimbulkan risiko kehilangan berkas, koordinasi lambat antar instansi, serta sulitnya memantau kuota bibit. 
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-slate-300 mt-2">
                Aplikasi ini mendigitalkan seluruh tahapan pengajuan daring oleh pemohon, verifikasi berjenjang oleh pihak kantor, pemrosesan fisik penyaluran oleh staf persemaian, serta pencetakan otomatis Berita Acara Serah Terima (BAST).
              </p>
            </div>

            {/* Workflow 3-Aktor */}
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#6097fa]" />
                Arsitektur Alur Multi-Aktor
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="p-3.5 rounded-xl bg-[#09112a] border border-blue-800/40">
                  <span className="text-xs font-bold text-cyan-300 block mb-1">1. Pemohon (Masyarakat/Kelompok)</span>
                  <p className="text-xs text-slate-400">
                    Input formulir online, upload berkas KTP & kop surat permohonan, pilih persemaian, dan tentukan titik koordinat peta interaktif.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#09112a] border border-blue-800/40">
                  <span className="text-xs font-bold text-blue-300 block mb-1">2. Pihak Kantor (Admin & PPK)</span>
                  <p className="text-xs text-slate-400">
                    Verifikasi kelayakan berkas, menolak/meneruskan ke kepala balai, memantau grafik statistik bulanan, dan kelola akun pengguna.
                  </p>
                </div>
                <div className="p-3.5 rounded-xl bg-[#09112a] border border-blue-800/40">
                  <span className="text-xs font-bold text-emerald-300 block mb-1">3. Staf Persemaian Lapangan</span>
                  <p className="text-xs text-slate-400">
                    Memperbarui kuota stok bibit bulanan, memproses pemenuhan fisik bibit, dan menerbitkan Berita Acara resmi serah terima.
                  </p>
                </div>
              </div>
            </div>

            {/* Database & Technical Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[#080e22] border border-blue-900/40">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mb-2">
                  <Database className="w-4 h-4 text-cyan-400" />
                  Struktur Relasi Database MySQL
                </span>
                <ul className="text-xs text-slate-400 space-y-1">
                  <li>• <strong className="text-slate-200">users</strong>: Akun multi-role & otentikasi password</li>
                  <li>• <strong className="text-slate-200">permohonan</strong>: Data pemohon, KTP, dusun, koordinat</li>
                  <li>• <strong className="text-slate-200">detail_permohonan</strong>: Jenis bibit, jumlah diminta & dipenuhi</li>
                  <li>• <strong className="text-slate-200">bibit</strong>: Stok awal & produksi Jan s/d Des</li>
                  <li>• <strong className="text-slate-200">riwayat_permohonan</strong>: Log audit status & diproses_oleh</li>
                  <li>• <strong className="text-slate-200">berita_acara</strong>: Nomor surat & tanggal serah terima</li>
                  <li>• <strong className="text-slate-200">persemaian</strong>: Stasiun Sungai Selamat & Nanga Pinoh</li>
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#080e22] border border-blue-900/40">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 mb-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  Hasil Pengujian Black Box Testing
                </span>
                <p className="text-xs text-slate-400 mb-2">
                  Dilakukan pengujian fungsionalitas menyeluruh tanpa melihat source code:
                </p>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>Halaman Login & Hak Akses</span>
                    <span className="text-emerald-400 font-mono font-bold">Lolos (100%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Pengajuan Bibit & Validasi File</span>
                    <span className="text-emerald-400 font-mono font-bold">Lolos (100%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Kelola Stok & Pemenuhan Bibit</span>
                    <span className="text-emerald-400 font-mono font-bold">Lolos (100%)</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Cetak Dokumen & Berita Acara</span>
                    <span className="text-emerald-400 font-mono font-bold">Lolos (100%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bibit Varieties */}
            <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-900/40">
              <span className="text-xs font-bold text-cyan-300 flex items-center gap-1.5 mb-2">
                <TreePine className="w-4 h-4 text-emerald-400" />
                Daftar Bibit Tersedia dalam Sistem:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {project.bibitTypes?.map((b, idx) => (
                  <span key={idx} className="px-2 py-0.5 rounded text-[11px] bg-blue-900/40 text-blue-200 border border-blue-700/30">
                    🌱 {b}
                  </span>
                ))}
              </div>
            </div>

          </div>

          {/* Footer Modal */}
          <div className="mt-6 pt-4 border-t border-blue-900/50 flex items-center justify-between">
            <span className="text-xs font-mono text-slate-400">
              Pembimbing: Heldi Hastriyandi, S.T., M.Kom.
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#2c67ed] to-[#1e4fd8] text-white text-xs font-bold hover:shadow-[0_0_15px_#2c67ed] transition-all"
            >
              Tutup Rincian
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
