import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import felanaproImage from '../assets/felanapro.jpg'; // Import de l'image de profil (ajustez le chemin si nécessaire)

function NavList() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 lg:gap-2">
      <Typography
        as="a"
        href="#home"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("home");
        }}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Accueil</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#about"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("about");
        }}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">À propos</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#portfolio"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("portfolio");
        }}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Portfolio</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#contact"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          handleScroll("contact");
        }}
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Contact</ListItem>
      </Typography>
    </List>
  );
}

function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
    return () => window.removeEventListener("resize", () => {});
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Navbar className="fixed top-0 left-0 w-full z-50 bg-blanc-casse shadow-md border-none ml-6">
      <div className="flex items-center justify-between text-gris-fonce max-w-4xl mx-auto px-4 py-2">
        {/* Conteneur pour le logo et la navigation */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          {/* Logo ou Titre */}
          <Typography
            as="a"
            href="#home"
            variant="h6"
            className="cursor-pointer py-1.5 text-rose-poudre font-bold pr-6"
            onClick={(e) => {
              e.preventDefault();
              handleScroll("home");
            }}
          >
            Lantoniaina Felana
          </Typography>

          {/* Navigation pour desktop */}
          <div className="hidden lg:block">
            <NavList />
          </div>
        </div>

        {/* Conteneur pour le bouton mobile et la photo de profil */}
        <div className="flex items-center gap-4">
          {/* Photo de profil (visible sur desktop, masquée sur mobile) */}
          <img
            src={felanaproImage}
            alt="Profil"
            className="w-10 h-10 rounded-full object-cover hidden lg:block border-2 border-rose-poudre"
          />

          {/* Bouton pour mobile */}
          <IconButton
            variant="text"
            className="lg:hidden text-gris-fonce"
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <XMarkIcon className="h-6 w-6" strokeWidth={2} />
            ) : (
              <Bars3Icon className="h-6 w-6" strokeWidth={2} />
            )}
          </IconButton>
        </div>
      </div>

      {/* Menu mobile avec photo de profil */}
      <Collapse open={openNav}>
        <div className="flex items-center justify-between p-4 lg:hidden">
          <Typography className="text-gris-fonce font-medium">
            Lantoniaina Felana
          </Typography>
          <img
            src={felanaproImage}
            alt="Profil"
            className="w-10 h-10 rounded-full object-cover border-2 border-rose-poudre"
          />
        </div>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Header;