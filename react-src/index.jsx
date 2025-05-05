import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Importa tu componente principal App

const container = document.getElementById('react-app-root');

if (container) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App /> {/* Renderiza el componente App */}
    </React.StrictMode>
  );
} else {
  console.error('El elemento con ID "react-app-root" no fue encontrado.');
}