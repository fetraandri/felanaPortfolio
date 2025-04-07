import aboutData from '../data/aboutData';

function About() {
  const { name, profession, experience, description, skills } = aboutData;

  return (
    <section id="about" className="py-20 bg-blanc-casse">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Image ou placeholder */}
          <div className="w-48 h-48 bg-lavande-claire rounded-full flex-shrink-0"></div>
          <div>
            <p className="text-lg text-gris-fonce mb-4">
              Je suis {name}, un(e) {profession} avec {experience} d’expérience. {description}
            </p>
            <p className="text-lg text-gris-fonce">
              Mes compétences incluent : {skills.join(', ')}.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;