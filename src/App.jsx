// src/App.jsx
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import CVLinks from './components/CVLinks'; // Import du nouveau composant
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-blanc-casse text-gris-fonce"> {/* Changé bg-red-500 à bg-blanc-casse */}
      <Header />
      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
        <CVLinks /> {/* Ajout de la nouvelle section */}
      </main>
      <Footer />
    </div>
  );
}

export default App;