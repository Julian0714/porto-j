import useScrollAnimation from "../hooks/useScrollAnimation"

export default function About() {
  useScrollAnimation()

  return (
    <section className="section px-8 py-32 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">About Me</h1>
      <p className="text-slate-600 dark:text-slate-400">
        I am a Frontend Developer...
      </p>
    </section>
  )
}
