// src/components/CVLinks.jsx
import React from 'react';

// Composant pour le bouton de téléchargement du CV
function DownloadCVButton() {
  const cvUrl = "https://drive.google.com/your-cv-file-id"; // Remplacez par l'URL réelle
  return (
    <a
      href={cvUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-rose-poudre text-gris-fonce py-3 rounded-lg font-semibold text-center hover:bg-lavande-claire transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Télécharger mon CV
    </a>
  );
}

// Composant pour le bouton du CV interactif
function InteractiveCVButton() {
  const interactiveCVUrl = "https://your-interactive-cv-url.com"; // Remplacez par l'URL réelle
  return (
    <a
      href={interactiveCVUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full bg-lavande-claire text-gris-fonce py-3 rounded-lg font-semibold text-center hover:bg-rose-poudre transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
    >
      Voir mon CV interactif
    </a>
  );
}

function CVLinks() {
  return (
    <section id="cv-links" className="py-10 bg-blanc-casse">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gris-fonce text-center mb-6">Mon CV</h2>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <DownloadCVButton />
          <InteractiveCVButton />
        </div>
      </div>
    </section>
  );
}

export default CVLinks;