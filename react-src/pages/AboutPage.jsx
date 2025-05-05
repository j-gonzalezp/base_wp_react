import React from 'react';
import { Separator } from "@/components/ui/separator";

function AboutPage() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto">
      {/* Usa font-heading definido en globals.css */}
      <h1 className="text-center">Acerca de IDE MBN</h1>
      <Separator />
      {/* Clases prose deberían heredar colores y fuentes base */}
      <div className="prose lg:prose-lg mx-auto max-w-none">
        <p>
          La IDE MBN, conformada por los SEREMIS de Bienes Nacionales de todas las regiones de Chile,
          tiene como objetivo principal promover la estandarización de datos y capacitar en la
          creación y difusión de productos geoespaciales.
        </p>
        <p>
          Esta iniciativa no solo facilita el trabajo de los funcionarios públicos, sino que también
          fortalece la transparencia, la participación ciudadana y apoya la toma de decisiones
          gubernamentales mediante el acceso a información territorial confiable y actualizada.
        </p>
        <p>
          Nuestra misión es ser la plataforma líder en la gestión y visualización de datos geoespaciales
          relacionados con los bienes nacionales, fomentando la colaboración interregional y el uso
          eficiente de los recursos públicos.
        </p>
      </div>
    </div>
  );
}

export default AboutPage;