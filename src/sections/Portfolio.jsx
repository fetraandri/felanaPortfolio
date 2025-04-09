import Slider from "react-slick";
import experiencesData from '../data/experiencesData';

function Portfolio() {
  // Paramètres du carrousel
  const settings = {
    dots: true, // Afficher les points de navigation
    infinite: true, // Boucle infinie
    speed: 500, // Vitesse de transition (ms)
    slidesToShow: 2, // Nombre de cartes visibles à la fois
    slidesToScroll: 1, // Nombre de cartes à faire défiler à chaque clic
    autoplay: true, // Défilement automatique
    autoplaySpeed: 3000, // Délai entre chaque défilement automatique (ms)
    arrows: true, // Afficher les flèches de navigation
    responsive: [
      {
        breakpoint: 1024, // En dessous de 1024px (lg)
        settings: {
          slidesToShow: 1, // 1 carte visible sur tablette/mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="portfolio" className="py-20 bg-vert-sauge">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Expériences</h2>
        <Slider {...settings}>
          {experiencesData.map((experience) => (
            <div key={experience.id} className="px-4">
              <div className="bg-blanc-casse rounded-lg shadow-lg p-6 h-full">
                <h3 className="text-xl font-semibold text-gris-fonce mb-2">{experience.title}</h3>
                <p className="text-lg font-medium text-rose-poudre mb-2">{experience.company}</p>
                <p className="text-sm text-gris-fonce mb-4">{experience.period}</p>
                <p className="text-gris-fonce mb-4">{experience.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Portfolio;