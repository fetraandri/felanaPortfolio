import projectsData from '../data/projectsData';

function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-vert-sauge">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-blanc-casse rounded-lg shadow-lg p-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-gris-fonce mb-2">{project.title}</h3>
              <p className="text-gris-fonce mb-4">{project.description}</p>
              <a
                href={project.link}
                className="text-rose-poudre hover:text-lavande-claire transition-colors duration-300"
              >
                Voir le projet
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;