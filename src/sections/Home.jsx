import felanaImage from '../assets/felanawithoutbg.png';
import { ContainerTextFlip } from '../components/ContainerTextFlip'; 
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Variantes d'animation
const sectionVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 }
};

// Composant réutilisable pour l'animation
function AnimatedSection({ children }) {
  const control = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={sectionVariant}
      initial="hidden"
      animate={control}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-stone-50 pt-16 flex items-center justify-center"
    >
      <div className="max-w-6xl mx-auto px-4">
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Partie gauche : Image */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
              <div className="relative">
                <img
                  src={felanaImage}
                  alt="Felana"
                  className="w-3/4 lg:w-full max-w-md h-auto object-contain rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 rounded-lg shadow-[10px_10px_20px_rgba(51,51,51,0.3)] pointer-events-none"></div>
              </div>
            </div>

            {/* Partie droite : Texte */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gris-fonce mb-4">
                Bienvenue sur mon Portfolio
              </h2>
              <p className="text-lg md:text-xl text-gris-fonce mb-6 text-justify">
                Je suis Felana, motivée par l'idée d'apporter des solutions efficaces et professionnelles dans le domaine du service client et du tourisme. Animée par le désir d’accompagner les équipes et les clients avec dynamisme et organisation, je mets un point d’honneur à optimiser chaque expérience. Engagée à valoriser mes compétences en communication et en gestion, je m’adapte rapidement aux défis professionnels. Passionnée par l’optimisation des relations clients, je cherche à contribuer à la réussite collective avec sérieux et enthousiasme.
              </p>
              <ContainerTextFlip />
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default Home;