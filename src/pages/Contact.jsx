import useScrollAnimation from "../hooks/useScrollAnimation"
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa"

export default function Contact() {
  useScrollAnimation()

  return (
    <section className="section px-8 py-32 max-w-xl mx-auto">
     <h1 className="text-4xl font-bold mb-6">Kontak</h1>


      {/* Formulir */}
      <form className="flex flex-col gap-4 mb-8">
        <input
          className="p-3 rounded bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-black dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Nama"
        />
        <input
          className="p-3 rounded bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-black dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Email"
        />

        <select className="p-3 rounded bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-black dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400">
          <option value="">Pilih Topik Pesan</option>
          <option value="project">Pertanyaan tentang Proyek</option>
          <option value="collab">Kerja Sama / Kolaborasi</option>
          <option value="other">Lainnya</option>
        </select>

        <textarea
          className="p-3 rounded bg-gradient-to-r from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 text-black dark:text-white shadow-inner focus:outline-none focus:ring-2 focus:ring-sky-400"
          placeholder="Pesan"
          rows="4"
        />
        <button className="py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white rounded-lg font-medium shadow hover:from-sky-600 hover:to-blue-700 transition">
          Kirim Pesan
        </button>
      </form>

      {/* Kontak Horizontal dengan Tombol Gradasi */}
      <div className="flex flex-wrap gap-4 mt-6">
        <a
          href="https://instagram.com/jullyanyannn"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-lg shadow hover:from-pink-600 hover:to-pink-700 transition"
        >
          <FaInstagram size={20} /> Instagram
        </a>

        <a
          href="https://wa.me/62895338079080"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow hover:from-green-600 hover:to-green-700 transition"
        >
          <FaWhatsapp size={20} /> WhatsApp
        </a>

        <a
          href="mailto:muhamadjuliansyahusaini@gmail.com"
          className="flex items-center gap-2 px-4 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow hover:from-red-600 hover:to-red-700 transition"
        >
          <FaEnvelope size={20} /> Email
        </a>
      </div>
    </section>
  )
}
