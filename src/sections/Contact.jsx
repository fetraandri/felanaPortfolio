// src/sections/Contact.jsx
import contactData from '../data/contactData';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import Lottie from "lottie-react";
import customerSupportAnimation from '../assets/customer-support.json';

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

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blanc-casse">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Contactez-moi</h2>
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Animation Lottie à gauche */}
            <div className="w-full lg:w-1/2">
              <Lottie
                animationData={customerSupportAnimation}
                loop={true}
                className="w-full max-w-md mx-auto"
              />
            </div>

            {/* Formulaire à droite */}
            <div className="w-full lg:w-1/2">
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gris-fonce mb-2">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 rounded-lg bg-stone-50 text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 3d-input"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gris-fonce mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 rounded-lg bg-stone-50 text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 3d-input"
                    placeholder="Votre email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gris-fonce mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className="w-full p-3 rounded-lg bg-stone-50 text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 3d-input"
                    placeholder="Votre message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-stone-50 text-gris-fonce py-3 rounded-lg font-semibold hover:bg-lavande-claire transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  Envoyer
                </button>
              </form>
              <p className="mt-6 text-center text-gris-fonce">
                Ou contactez-moi directement à :{' '}
                <a
                  href={`mailto:${contactData.email}`}
                  className="text-red-800 hover:text-lavande-claire transition-colors duration-300"
                >
                  {contactData.email}
                </a>
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
      {/* Styles CSS personnalisés pour les champs 3D */}
      <style jsx>{`
        .3d-input {
          position: relative;
          background: #fef6f5; /* bg-rose-50 */
          border: 1px solid #e5e7eb; /* Gris clair pour la bordure */
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), inset 0 2px 4px rgba(255, 255, 255, 0.6);
        }
        .3d-input:focus {
          box-shadow: 0 0 0 2px #d8cce8 /* focus:ring-lavande-claire */, 0 6px 12px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </section>
  );
}

export default Contact;