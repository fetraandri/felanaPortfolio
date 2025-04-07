function Portfolio() {
  return (
    <section id="portfolio" className="py-20 bg-vert-sauge">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Projet 1 */}
          <div className="bg-blanc-casse rounded-lg shadow-lg p-6">
            <div className="w-full h-48 bg-lavande-claire rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold text-gris-fonce mb-2">Projet 1</h3>
            <p className="text-gris-fonce mb-4">
              Une brève description de ton projet. Parle des technologies utilisées.
            </p>
            <a
              href="#"
              className="text-rose-poudre hover:text-lavande-claire transition-colors duration-300"
            >
              Voir le projet
            </a>
          </div>
          {/* Projet 2 */}
          <div className="bg-blanc-casse rounded-lg shadow-lg p-6">
            <div className="w-full h-48 bg-lavande-claire rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold text-gris-fonce mb-2">Projet 2</h3>
            <p className="text-gris-fonce mb-4">
              Une brève description de ton projet. Parle des technologies utilisées.
            </p>
            <a
              href="#"
              className="text-rose-poudre hover:text-lavande-claire transition-colors duration-300"
            >
              Voir le projet
            </a>
          </div>
          {/* Projet 3 */}
          <div className="bg-blanc-casse rounded-lg shadow-lg p-6">
            <div className="w-full h-48 bg-lavande-claire rounded-md mb-4"></div>
            <h3 className="text-xl font-semibold text-gris-fonce mb-2">Projet 3</h3>
            <p className="text-gris-fonce mb-4">
              Une brève description de ton projet. Parle des technologies utilisées.
            </p>
            <a
              href="#"
              className="text-rose-poudre hover:text-lavande-claire transition-colors duration-300"
            >
              Voir le projet
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;