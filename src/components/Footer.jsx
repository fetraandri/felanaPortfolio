import contactData from '../data/contactData';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Import icons

function Footer() {
  return (
    <footer className="bg-slate-950 text-blanc-casse py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© 2025 Felana. Tous droits réservés.</p>
        <div className="mt-4 space-x-4">
          <a
            href={contactData.linkedin}
            className="hover:text-rose-poudre transition-colors duration-300 inline-flex items-center gap-2"
          >
            <FaLinkedin /> LinkedIn
          </a>
          
          <a
            href={`mailto:${contactData.email}`}
            className="hover:text-rose-poudre transition-colors duration-300 inline-flex items-center gap-2"
          >
            <FaEnvelope /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;