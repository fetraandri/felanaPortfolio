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

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#home"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Accueil</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#about"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">À propos</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#portfolio"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
      >
        <ListItem className="flex items-center gap-2 py-2 pr-4">Portfolio</ListItem>
      </Typography>
      <Typography
        as="a"
        href="#contact"
        variant="small"
        className="font-medium text-gris-fonce hover:text-lavande-claire transition-colors duration-300"
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

  return (
    <Navbar className="fixed top-0 left-0 w-full z-50 bg-blanc-casse shadow-md border-none ml-6">
      <div className="flex items-center justify-between text-gris-fonce max-w-7xl mx-auto px-4 py-2 ">
        {/* Logo ou Titre */}
        <Typography
          as="a"
          href="#home"
          variant="h6"
          className="cursor-pointer py-1.5 text-rose-poudre font-bold"
        >
          Mon Portfolio
        </Typography>

        {/* Navigation pour desktop */}
        <div className="hidden lg:block">
          <NavList />
        </div>

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

      {/* Menu mobile */}
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}

export default Header;