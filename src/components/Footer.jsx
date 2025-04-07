function Footer() {
  return (
    <footer className="bg-gris-fonce text-blanc-casse py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; 2025 [Ton Nom]. Tous droits réservés.</p>
        <div className="mt-4 space-x-4">
          <a href="#" className="hover:text-rose-poudre transition-colors duration-300">
            LinkedIn
          </a>
          <a href="#" className="hover:text-rose-poudre transition-colors duration-300">
            GitHub
          </a>
          <a href="#" className="hover:text-rose-poudre transition-colors duration-300">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;