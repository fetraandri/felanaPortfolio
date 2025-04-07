/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Ajoute le chemin pour Material Tailwind
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
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