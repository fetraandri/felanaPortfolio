import aboutData from '../data/aboutData';
import felanaproImage from '../assets/felanapro.jpg'; 

function About() {
  const { name, profession, experience, description, skills } = aboutData;

  return (
    <section id="about" className="py-20 bg-blanc-casse">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">À propos de moi</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <img
            src={felanaproImage} 
            alt={`${name} - ${profession}`}
            className="w-48 h-48 rounded-full object-cover flex-shrink-0"
          />
          <div>
            <p className="text-lg text-gris-fonce mb-4">
              Je suis {name}, un(e) {profession} avec {experience} d’expérience. {description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;