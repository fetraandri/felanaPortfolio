import Slider from "react-slick";
import experiencesData from '../data/experiencesData';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Variantes d'animation pour les cartes
const cardVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0.8 }
};

// Composant pour une carte animée
function AnimatedCard({ experience }) {
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
      variants={cardVariant}
      initial="hidden"
      animate={control}
      className="px-4 pb-8"
    >
      <div className="bg-blanc-casse rounded-lg shadow-lg p-6 h-full">
        <h3 className="text-xl font-semibold text-gris-fonce mb-2">{experience.title}</h3>
        <p className="text-lg font-medium text-red-800 mb-2">{experience.company}</p>
        <p className="text-sm text-gris-fonce mb-4">{experience.period}</p>
        <p className="text-gris-fonce mb-4">{experience.description}</p>
      </div>
    </motion.div>
  );
}

function Portfolio() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-stone-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Expériences</h2>
        <Slider {...settings}>
          {experiencesData.map((experience) => (
            <AnimatedCard key={experience.id} experience={experience} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;