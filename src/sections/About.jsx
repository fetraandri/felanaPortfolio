function About() {
  return (
    <section id="about" className="py-20 bg-blanc-casse">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image ou placeholder */}
          <div className="w-48 h-48 bg-lavande-claire rounded-full flex-shrink-0"></div>
          <div>
            <p className="text-lg text-gris-fonce mb-4">
              Je suis [Ton Nom], un(e) [ton métier] avec [X années] d’expérience dans [ton domaine].
              J’aime créer des projets qui allient design et fonctionnalité.
            </p>
            <p className="text-lg text-gris-fonce">
              Mes compétences incluent [liste tes compétences, ex. React, Tailwind CSS, etc.]. Je suis
              toujours à la recherche de nouveaux défis pour améliorer mes compétences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;