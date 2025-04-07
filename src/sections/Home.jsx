function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-vert-sauge text-center pt-16"
    >
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-5xl font-bold text-gris-fonce mb-4">
          Bienvenue sur mon Portfolio
        </h2>
        <p className="text-lg text-gris-fonce mb-6">
          Je suis [Ton Nom], un(e) [ton métier, ex. Développeur Web] passionné(e) par la création
          de solutions modernes et élégantes.
        </p>
        <a
          href="#portfolio"
          className="inline-block bg-rose-poudre text-gris-fonce px-6 py-3 rounded-lg font-semibold hover:bg-lavande-claire transition-colors duration-300"
        >
          Voir mes projets
        </a>
      </div>
    </section>
  );
}

export default Home;