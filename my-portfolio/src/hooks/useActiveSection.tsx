import { useState, useEffect } from "react"

const useActiveSection = (threshold: number = 0.6) => {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [threshold])

  return activeSection
}

export default useActiveSection