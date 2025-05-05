// En react-src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';

// Importa tus páginas
import HomePage from './pages/HomePage';
import RegionPage from './pages/RegionPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ShadcnTestPage from './pages/ShadcnTestPage'; // <-- IMPORTA LA NUEVA PÁGINA

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/mbn-:regionSlug" element={<RegionPage />} />
              <Route path="/acerca-de" element={<AboutPage />} />
              <Route path="/contacto" element={<ContactPage />} />
              <Route path="/shadcn-test" element={<ShadcnTestPage />} /> {/* <-- AÑADE LA RUTA */}
              <Route path="*" element={<div><h2>404 - Página no encontrada</h2>{/* ... */}</div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
export default App;