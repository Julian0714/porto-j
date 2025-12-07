import { useEffect } from "react"

export default function useScrollAnimation() {
  useEffect(() => {
    const sections = document.querySelectorAll(".section")

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )

    sections.forEach(section => observer.observe(section))

    return () => observer.disconnect()
  }, [])
}
