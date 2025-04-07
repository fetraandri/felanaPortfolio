function ProjectCard({ title, description, link }) {
    return (
      <div className="bg-rose-poudre p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-gris-fonce mb-2">{title}</h3>
        <p className="text-gris-fonce/80 mb-4">{description}</p>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-vert-sauge hover:underline"
          >
            Voir le projet →
          </a>
        )}
      </div>
    )
  }
  
  export default ProjectCard