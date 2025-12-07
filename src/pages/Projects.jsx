const projects = [
  {
    title: "Portfolio Website",
    desc: "Personal portfolio built with React & Tailwind",
  },
  {
    title: "Landing Page",
    desc: "Modern marketing landing page",
  },
  {
    title: "Dashboard UI",
    desc: "Admin dashboard interface design",
  },
]

export default function Projects() {
  return (
    <section className="px-8 py-32 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-10">Projects</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="project-card relative rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 aspect-[4/3]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xl font-semibold">{p.title}</span>
            </div>

            <div className="project-overlay absolute inset-0 bg-black/70 flex flex-col items-center justify-center text-white p-6 text-center">
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
              <p className="text-sm mb-4">{p.desc}</p>
              <button className="px-4 py-2 bg-sky-500 text-black rounded">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
