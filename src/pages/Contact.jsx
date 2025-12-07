export default function Contact() {
  return (
    <section className="px-8 py-32 max-w-xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">Contact</h1>

      <form className="flex flex-col gap-4">
        <input className="p-3 rounded bg-slate-200 dark:bg-slate-800" placeholder="Name" />
        <input className="p-3 rounded bg-slate-200 dark:bg-slate-800" placeholder="Email" />
        <textarea className="p-3 rounded bg-slate-200 dark:bg-slate-800" placeholder="Message" rows="4" />
        <button className="py-3 bg-sky-500 text-black rounded font-medium">
          Send Message
        </button>
      </form>
    </section>
  )
}
