import aboutData from '../data/aboutData';
import felanaproImage from '../assets/felanapro.jpg'; 
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

function About() {
  const { name, profession, experience, description, skills } = aboutData;

  return (
    <section id="about" className="py-20 bg-blanc-casse">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">À propos de moi</h2>
        <AnimatedSection>
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={felanaproImage}
              alt={`${name} - ${profession}`}
              className="w-48 h-48 rounded-full object-cover flex-shrink-0"
            />
            <div>
              <p className="text-lg text-gris-fonce mb-4 text-justify">
                Je suis {name},  {description}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

export default About;