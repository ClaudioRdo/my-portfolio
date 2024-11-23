import React from "react"
import "./SectionName.css"

interface SectionNameProps {
  sections: string[]; // Lista de nombres de las secciones
  activeSection: string; // Nombre de la sección activa
}

const SectionName: React.FC<SectionNameProps> = ({ sections, activeSection }) => {
  return (
    <div className="vertical-name">
      {sections.map((section) => (
        <div
          key={section}
          className={`name-item ${section === activeSection ? "active" : ""}`}
        >
          {section}
        </div>
      ))}
    </div>
  );
};

export default SectionName