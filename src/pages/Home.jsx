export default function Home() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 overflow-hidden">
      <div className="blob top-10 left-10" />

      <div className="text-center max-w-xl z-10 px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Hi, I’m <span className="text-sky-500">Julian</span>
        </h1>

        <h2 className="typewriter text-xl md:text-2xl text-sky-400 w-fit mx-auto mb-6">
          Frontend Developer
        </h2>

        <p className="text-slate-600 dark:text-slate-400 mb-10">
          I create modern, clean, and interactive web experiences using React & Tailwind.
        </p>

        <div className="flex justify-center gap-4">
          <a href="/projects" className="px-6 py-3 rounded-lg bg-sky-500 text-black font-medium hover:bg-sky-400">
            View Projects
          </a>
          <a href="/contact" className="px-6 py-3 rounded-lg border border-sky-500 hover:bg-sky-500/10">
            Contact
          </a>
        </div>
      </div>
    </section>
  )
}
