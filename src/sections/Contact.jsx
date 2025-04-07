import contactData from '../data/contactData';

function Contact() {
  return (
    <section id="contact" className="py-20 bg-blanc-casse">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gris-fonce text-center mb-10">Contactez-moi</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-gris-fonce mb-2">
              Nom
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-3 rounded-lg bg-vert-sauge text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire"
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
              className="w-full p-3 rounded-lg bg-vert-sauge text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire"
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
              className="w-full p-3 rounded-lg bg-vert-sauge text-gris-fonce focus:outline-none focus:ring-2 focus:ring-lavande-claire"
              placeholder="Votre message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-poudre text-gris-fonce py-3 rounded-lg font-semibold hover:bg-lavande-claire transition-colors duration-300"
          >
            Envoyer
          </button>
        </form>
        <p className="mt-6 text-center text-gris-fonce">
          Ou contactez-moi directement à :{' '}
          <a
            href={`mailto:${contactData.email}`}
            className="text-rose-poudre hover:text-lavande-claire transition-colors duration-300"
          >
            {contactData.email}
          </a>
        </p>
      </div>
    </section>
  );
}

export default Contact;