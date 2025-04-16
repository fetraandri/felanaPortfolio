import contactData from '../data/contactData';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import customerSupportAnimation from '../assets/customer-support.json';
import emailjs from '@emailjs/browser';

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

// Composant pour un champ de saisie
function InputField({ label, id, name, type, value, onChange, placeholder, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gris-fonce mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full p-3 rounded-lg bg-stone-50 text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 3d-input"
        placeholder={placeholder}
      />
    </div>
  );
}

// Composant pour un champ textarea
function TextAreaField({ label, id, name, value, onChange, placeholder, required, rows }) {
  return (
    <div>
      <label htmlFor={id} className="block text-gris-fonce mb-2">
        {label}
      </label>
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full p-3 rounded-lg bg-stone-50 text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire shadow-lg transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 3d-input"
        placeholder={placeholder}
      ></textarea>
    </div>
  );
}

// Composant pour la logique du formulaire
function FormLogic({ children }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Remplacez ces valeurs par vos propres identifiants EmailJS
    const serviceId = 'YOUR_SERVICE_ID';
    const templateId = 'YOUR_TEMPLATE_ID';
    const publicKey = 'YOUR_PUBLIC_KEY';

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    }, publicKey)
      .then((response) => {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((error) => {
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {children({ formData, handleChange, isSubmitting, status })}
      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-3 rounded-lg font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
          isSubmitting 
            ? 'bg-gray-400 cursor-not-allowed' 
            : 'bg-stone-50 text-gris-fonce hover:bg-lavande-claire'
        }`}
      >
        {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
      </button>
      {status === 'success' && (
        <p className="mt-4 text-center text-green-600">
          Message envoyé avec succès !
        </p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-center text-red-600">
          Une erreur s'est produite. Veuillez réessayer.
        </p>
      )}
    </form>
  );
}

// Composant ContactForm
function ContactForm() {
  return (
    <div className="w-full lg:w-1/2">
      <FormLogic>
        {({ formData, handleChange }) => (
          <>
            <InputField
              label="Nom"
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              required
            />
            <InputField
              label="Email"
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Votre email"
              required
            />
            <TextAreaField
              label="Message"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message"
              required
              rows="5"
            />
          </>
        )}
      </FormLogic>
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
  );
}

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blanc-casse">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Contactez-moi</h2>
        <AnimatedSection>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
            {/* Animation Lottie à gauche */}
            <div className="w-full lg:w-1/2">
              <Lottie
                animationData={customerSupportAnimation}
                loop={true}
                className="w-full max-w-xl mx-auto"
              />
            </div>
            {/* Formulaire à droite */}
            <ContactForm />
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