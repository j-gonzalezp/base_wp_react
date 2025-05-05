// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"], // Recomendado por Shadcn
    content: [
      './react-src/**/*.{js,jsx,ts,tsx}', // Tu código React
      // './*.php', // Si usas clases Tailwind en PHP
    ],
    prefix: "", // Puedes añadir un prefijo si quieres (ej: "tw-")
    theme: {
      container: { // Configuración de container (opcional pero común)
        center: true,
        padding: "2rem",
        screens: {
          "2xl": "1400px",
        },
      },
      extend: {
         // Aquí puedes extender colores, fuentes, keyframes, etc.
         // Shadcn añadirá sus variables de color aquí si sigues sus temas
         colors: { /* ... tus colores personalizados ... */ },
         keyframes: {
           "accordion-down": { /* ... keyframes de Shadcn ... */ },
           "accordion-up": { /* ... keyframes de Shadcn ... */ },
         },
         animation: {
           "accordion-down": "accordion-down 0.2s ease-out",
           "accordion-up": "accordion-up 0.2s ease-out",
         },
      },
    },
    plugins: [require("tailwindcss-animate")], // ¡Importante!
  }