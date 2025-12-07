import { NavLink } from "react-router-dom"

export default function Navbar({ dark, setDark }) {
  return (
    <nav className="fixed top-0 w-full z-50 px-8 py-5 flex justify-between items-center backdrop-blur bg-white/70 dark:bg-slate-950/60 border-b border-black/5 dark:border-white/10">
      
      <h1 className="font-bold text-lg">Julian.dev</h1>

      <div className="flex items-center gap-6">
        {["/", "/about", "/projects", "/contact"].map((path, i) => {
          const names = ["Home", "About", "Projects", "Contact"]
          return (
            <NavLink
              key={path}
              to={path}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-nav" : ""}`
              }
            >
              {names[i]}
            </NavLink>
          )
        })}

        <button
          onClick={() => setDark(prev => !prev)}
          className="ml-3 text-xl transition"
          aria-label="Toggle Dark Mode"
        >
          {dark ? "☀️" : "🌙"}
        </button>
      </div>
    </nav>
  )
}
