import { Link } from "react-router-dom"
import useScrollAnimation from "../hooks/useScrollAnimation"

export default function Home() {
  useScrollAnimation()
  
  return (
    <section className="section relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
      <div className="blob top-10 left-10" />

      <div className="text-center max-w-xl z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Halo, Saya <span className="text-sky-500">Julian</span>
        </h1>

        <h2 className="typewriter text-xl md:text-2xl text-sky-400 w-fit mx-auto mb-6">
          Pelajar SMK Binong Permai Jurusan TJKT
        </h2>

        <p className="mb-6">
          <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-600">
            Muhamad Juliansya Husaini
          </span>
        </p>


        <p className="text-slate-600 dark:text-slate-400 mb-10">
          Saya mempelajari dan tertarik pada bidang{" "}
          <span className="font-medium text-sky-500">
            jaringan komputer, konfigurasi perangkat jaringan, dan dasar administrasi sistem
          </span>. 
          Saya terus mengembangkan pemahaman tentang topologi jaringan, IP addressing,
          serta troubleshooting jaringan.
        </p>

        <div className="flex justify-center gap-4">
          <Link
            to="/projects"
            className="px-6 py-3 rounded-lg bg-sky-500 text-black font-medium hover:bg-sky-400 transition"
          >
            Lihat Pengalaman
          </Link>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-lg border border-sky-500 hover:bg-sky-500/10 transition"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  )
}
