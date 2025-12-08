import useScrollAnimation from "../hooks/useScrollAnimation"

export default function About() {
  useScrollAnimation()

  return (
    <section className="section px-8 py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Tentang Saya</h1>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        Saya adalah seorang pelajar kelas 11 di SMKS Binong Permai dengan
        jurusan Teknik Jaringan Komputer dan Telekomunikasi (TJKT). 
        Saya memiliki minat yang besar di bidang teknologi, khususnya
        jaringan komputer, konfigurasi perangkat jaringan, serta dasar
        administrasi sistem.
      </p>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        Selain kegiatan akademik, saya juga aktif mengikuti organisasi
        OSIS di SMKS Binong Permai. Dari organisasi ini, saya belajar
        mengenai tanggung jawab, kerja sama tim, kepemimpinan, serta
        komunikasi yang baik dalam menjalankan berbagai kegiatan sekolah.
      </p>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
        Saya juga pernah melaksanakan Praktik Kerja Lapangan (PKL) di
        <span className="font-medium text-sky-500">
          {" "}Areta Informatics College / PT Areta.net
        </span>,
        di mana saya mendapatkan pengalaman langsung terkait dunia
        kerja di bidang teknologi informasi, khususnya yang berkaitan
        dengan jaringan komputer dan sistem pendukung TI.
      </p>

      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
        Dengan pengalaman pendidikan, organisasi, dan PKL tersebut,
        saya terus berusaha mengembangkan kemampuan teknis serta soft skill
        sebagai bekal untuk menghadapi dunia kerja dan pengembangan karier
        di masa depan.
      </p>
    </section>
  )
}
