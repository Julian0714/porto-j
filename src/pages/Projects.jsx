import useScrollAnimation from "../hooks/useScrollAnimation"
import aretaBlog from "../assets/atc.png"
import osisImg from "../assets/osis.jpg" // ← bebas pakai gambar ilustrasi / logo OSIS

const projects = [
  {
    title: "Artikel Blog – Areta Training Center",
    desc: "Menulis dan mempublikasikan artikel blog pada website aretatrainingcenter.space saat melaksanakan PKL di Areta Informatics College / PT Areta.net.",
    link: "https://aretatrainingcenter.space",
    image: aretaBlog,
    type: "project",
  },
  {
    title: "Pengalaman OSIS – 2 Periode",
    desc: "Aktif sebagai anggota OSIS SMKs Binong Permai selama 2 periode (24/25) dan (25/26). Terlibat dalam perencanaan kegiatan sekolah, kerja tim, serta pengembangan kepemimpinan dan tanggung jawab.",
    image: osisImg,
    type: "experience",
  },
]

export default function Projects() {
  useScrollAnimation()

  return (
    <section className="section px-8 py-32 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">Projek & Pengalaman</h1>

      <p className="text-slate-600 dark:text-slate-400 mb-10 max-w-2xl">
        Berikut adalah project dan pengalaman yang pernah saya jalani,
        khususnya selama Praktik Kerja Lapangan (PKL) dan kegiatan organisasi.
      </p>

      <div className="grid sm:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card rounded-xl overflow-hidden
              bg-slate-200 dark:bg-slate-800
              hover:shadow-xl transition"
          >
            {/* GAMBAR */}
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-48 object-cover"
            />

            {/* CONTENT */}
            <div className="p-6">
              <h3
                className={`text-xl font-semibold mb-3 ${
                  p.type === "experience"
                    ? "text-emerald-500"
                    : "text-sky-500"
                }`}
              >
                {p.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6">
                {p.desc}
              </p>

              {/* BUTTON hanya untuk project */}
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-5 py-2 rounded-lg
                    bg-sky-500 text-black font-medium hover:bg-sky-400 transition"
                >
                  Kunjungi Website
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
