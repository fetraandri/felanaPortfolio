import felanaImage from '../assets/felanawithoutbg.png';

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-vert-sauge pt-16 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Partie gauche : Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
          <div className="relative">
            <img
              src={felanaImage}
              alt="Felana"
              className="w-3/4 lg:w-full max-w-md h-auto object-contain rounded-lg shadow-2xl"
            />
            {/* Ombre personnalisée */}
            <div className="absolute inset-0 rounded-lg shadow-[10px_10px_20px_rgba(51,51,51,0.3)] pointer-events-none"></div>
          </div>
        </div>

        {/* Partie droite : Texte */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gris-fonce mb-4">
            Bienvenue sur mon Portfolio
          </h2>
          <p className="text-lg md:text-xl text-gris-fonce mb-6">
            Je suis Felana, passionnée par la création de solutions modernes et élégantes.
          </p>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-rose-poudre mb-6">
           ASSISTANTE VIRTUELLE , FORFAITISTE
          </p>
          <a
            href="#portfolio"
            className="inline-block bg-rose-poudre text-gris-fonce px-6 py-3 rounded-lg font-semibold hover:bg-lavande-claire transition-colors duration-300"
          >
            Voir mes expériences
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;