function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-blanc-casse shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo ou Titre */}
        <h1 className="text-2xl font-bold text-rose-poudre">Mon Portfolio</h1>

        {/* Navigation */}
        <nav className="space-x-6">
          <a
            href="#home"
            className="text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
          >
            Accueil
          </a>
          <a
            href="#about"
            className="text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
          >
            À propos
          </a>
          <a
            href="#portfolio"
            className="text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;