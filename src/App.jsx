import { useState, useEffect } from 'react';
import Header from './components/Header';
import Home from './sections/Home';
import About from './sections/About';
import Portfolio from './sections/Portfolio';
import Contact from './sections/Contact';
import CVLinks from './components/CVLinks';
import Footer from './components/Footer';

// Composant Loading
function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-blanc-casse z-50">
      <div className="spinner"></div>
      <style jsx>{`
        .spinner {
          width: 50px;
          height: 50px;
          border: 5px solidrgb(172, 27, 27); /* Couleur lavande-claire */
          border-top: 5px solid #4b3f72; /* Couleur gris-fonce */
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simule un délai de chargement de 3 secondes
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    // Nettoyage du timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-blanc-casse text-gris-fonce">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
            <Home />
            <About />
            <Portfolio />
            <Contact />
            <CVLinks />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;