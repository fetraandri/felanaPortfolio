/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Inclut tous les fichiers JS/TS/JSX/TSX dans le dossier src
  ],
  theme: {
    extend: {
      colors: {
        // Ajoute tes couleurs personnalisées ici
        "rose-poudre": "#f6d1c1", // 🎀 Rose poudré
        "lavande-claire": "#d6c9f0", // 💎 Lavande claire
        "blanc-casse": "#fdfdfd", // 🤍 Blanc cassé
        "gris-fonce": "#333333", // 🖤 Gris foncé
        "vert-sauge": "#c2d8c5", // 🌿 Vert sauge doux
      },
    },
  },
  plugins: [],
};