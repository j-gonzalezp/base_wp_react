import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Image as ImageIcon } from 'lucide-react'; // Icono para fallback

// Importar imágenes placeholder locales (¡ASEGÚRATE DE CREAR ESTOS ARCHIVOS!)
import placeholderCapacitacion from '@/assets/images/placeholders/placeholder-capacitacion.jpg';
import placeholderRegion from '@/assets/images/placeholders/placeholder-region.jpg';
import placeholderRecurso from '@/assets/images/placeholders/placeholder-recurso.png';
import placeholderActividad from '@/assets/images/placeholders/placeholder-actividad.png';
import placeholderManual from '@/assets/images/placeholders/placeholder-manual.png'; // Para manuales


// Datos de ejemplo (Idealmente mover a /data/*.js)
const capacitaciones = [
  { id: 1, region: 'Valparaíso', date: '7-8 Mayo', imageUrl: placeholderCapacitacion },
  { id: 2, region: 'Arica y Parinacota', date: '17-18 Mayo', imageUrl: placeholderCapacitacion },
  { id: 3, region: 'Magallanes', date: '4-5 Junio', imageUrl: placeholderCapacitacion },
  { id: 4, region: 'Ñuble', date: '5-6 Junio', imageUrl: placeholderCapacitacion },
  { id: 5, region: 'Metropolitana', date: '11-12 Junio', imageUrl: placeholderCapacitacion },
  { id: 6, region: 'La Araucanía', date: '18-19 Junio', imageUrl: placeholderCapacitacion },
  { id: 7, region: 'Los Ríos', date: '17-18 Julio', imageUrl: placeholderCapacitacion },
  { id: 8, region: 'Ñuble', date: '17-18 Julio', imageUrl: placeholderCapacitacion },
];

const regionesLinks = [
  { slug: "arica-y-parinacota", nombre: "Región de Arica y Parinacota", imageUrl: placeholderRegion },
  { slug: "tarapaca", nombre: "Región de Tarapacá", imageUrl: placeholderRegion },
  { slug: "antofagasta", nombre: "Región de Antofagasta", imageUrl: placeholderRegion },
  { slug: "atacama", nombre: "Región de Atacama", imageUrl: placeholderRegion },
  { slug: "coquimbo", nombre: "Región de Coquimbo", imageUrl: placeholderRegion },
  { slug: "valparaiso", nombre: "Región de Valparaíso", imageUrl: placeholderRegion },
  { slug: "metropolitana", nombre: "Región Metropolitana", imageUrl: placeholderRegion },
  { slug: "ohiggins", nombre: "Región de O'Higgins", imageUrl: placeholderRegion },
  { slug: "maule", nombre: "Región del Maule", imageUrl: placeholderRegion },
  { slug: "nuble", nombre: "Región de Ñuble", imageUrl: placeholderRegion },
  { slug: "biobio", nombre: "Región del Biobío", imageUrl: placeholderRegion },
  { slug: "araucania", nombre: "Región de La Araucanía", imageUrl: placeholderRegion },
  { slug: "los-rios", nombre: "Región de Los Ríos", imageUrl: placeholderRegion },
  { slug: "los-lagos", nombre: "Región de Los Lagos", imageUrl: placeholderRegion },
  { slug: "aysen", nombre: "Región de Aysén", imageUrl: placeholderRegion },
  { slug: "magallanes", nombre: "Región de Magallanes", imageUrl: placeholderRegion },
];

const manuales = [
    { id: 'form', title: 'Formularios', imageUrl: placeholderManual },
    { id: 'recolector', title: 'Recolector de datos', imageUrl: placeholderManual },
    { id: 'capas', title: 'Gestor de Capas', imageUrl: placeholderManual },
    { id: 'datos', title: 'Gestor de datos', imageUrl: placeholderManual },
    { id: 'archivos', title: 'Gestor de Archivos', imageUrl: placeholderManual },
];

// Componente Helper para Títulos de Sección
const SectionTitle = ({ children }) => (
  // Usa la fuente Montserrat definida en globals.css
  <h2 className="text-2xl md:text-3xl font-heading font-bold text-center mb-8 text-foreground">{children}</h2>
);

// Componente Helper para Tarjeta con Imagen y Fallback
const ImageCard = ({ imageUrl, altText, children, imageClassName = "w-full h-40 object-cover", fallbackIconSize = "h-12 w-12" }) => {
  return (
    <>
      {imageUrl ? (
        <img
          src={imageUrl}
          alt={altText}
          className={imageClassName}
          onError={(e) => {
            console.error(`Error cargando imagen: ${imageUrl}`);
            e.target.style.display = 'none'; // Oculta la imagen rota
            // Mostrar el div de fallback (requiere un poco más de lógica o estructura diferente)
            // Por simplicidad, solo ocultamos la imagen rota. El fallback se muestra si imageUrl es null/undefined.
          }}
        />
      ) : (
        <div className={`w-full bg-muted flex items-center justify-center ${imageClassName.includes('h-40') ? 'h-40' : 'h-full'}`}>
          <ImageIcon className={`${fallbackIconSize} text-muted-foreground`} strokeWidth={1.5} />
        </div>
      )}
      {children}
    </>
  );
};


function HomePage() {
  return (
    <div className="space-y-16">

      {/* Sección Acceso Usuarios */}
      <section className="text-center py-6 bg-secondary rounded-lg shadow-sm">
        <h3 className="text-xl font-heading font-semibold mb-2 text-secondary-foreground">ACCESO USUARIOS REGISTRADOS IDE MBN</h3>
        {/* Usar clase personalizada de globals.css o estilos directos */}
        <Button variant="link" className="text-primary font-semibold text-lg">Ingresar aquí</Button>
      </section>

      {/* Sección Calendario Capacitaciones */}
      <section>
        <SectionTitle>CALENDARIO DE CAPACITACIONES 2024</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {capacitaciones.map((cap) => (
            <Card key={cap.id} className="tarjeta hover:shadow-md transition-shadow duration-300">
              <ImageCard imageUrl={cap.imageUrl} altText={`Capacitación ${cap.region}`}>
                <CardContent className="p-4 text-center">
                  <p className="font-semibold text-lg mb-1">{cap.region}</p>
                  <p className="text-sm text-muted-foreground">{cap.date}</p>
                </CardContent>
              </ImageCard>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Sección Acceso Productos Geoespaciales */}
      <section>
        <SectionTitle>ACCESO A PRODUCTOS GEOESPACIALES POR REGIÓN</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {regionesLinks.map((reg) => (
            <Link to={`/mbn-${reg.slug}`} key={reg.slug} className="block group">
              <Card className="tarjeta hover:shadow-md transition-shadow duration-300 h-full flex flex-col">
                <ImageCard imageUrl={reg.imageUrl} altText={reg.nombre}>
                  <CardContent className="p-4 text-center flex-grow flex items-center justify-center">
                    <p className="text-base font-semibold group-hover:text-primary transition-colors">{reg.nombre}</p>
                  </CardContent>
                </ImageCard>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <Separator />

      {/* Sección Manuales */}
      <section>
        <SectionTitle>ACCESO A MANUALES DE GEONODO</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {manuales.map((man) => (
            <a href={`/ruta/a/manual/${man.id}.pdf`} target="_blank" rel="noopener noreferrer" key={man.id} className="block group">
              <Card className="tarjeta hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center p-6 text-center">
                 <ImageCard
                    imageUrl={man.imageUrl}
                    altText={man.title}
                    imageClassName="w-20 h-20 object-contain mb-4" // Ajustar tamaño para icono/imagen
                    fallbackIconSize="h-16 w-16"
                 >
                    <p className="text-base font-semibold group-hover:text-primary transition-colors">{man.title}</p>
                 </ImageCard>
              </Card>
            </a>
          ))}
        </div>
      </section>

      <Separator />

      {/* Sección Otros Recursos */}
      <section>
        <SectionTitle>ACCESO A OTROS RECURSOS</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="tarjeta hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center p-6 text-center">
               <ImageCard imageUrl={placeholderRecurso} altText={`Recurso ${i}`} imageClassName="w-24 h-24 object-contain mb-4" fallbackIconSize="h-20 w-20">
                 <p className="font-semibold">Recurso {i}</p>
                 <p className="text-sm text-muted-foreground">Descripción breve</p>
               </ImageCard>
            </Card>
          ))}
        </div>
      </section>

      <Separator />

      {/* Sección Actividades */}
      <section>
        <SectionTitle>ACTIVIDADES</SectionTitle>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="tarjeta hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-center justify-center p-6 text-center">
               <ImageCard imageUrl={placeholderActividad} altText={`Actividad ${i}`} imageClassName="w-24 h-24 object-contain mb-4" fallbackIconSize="h-20 w-20">
                 <p className="font-semibold">Actividad {i}</p>
                 <p className="text-sm text-muted-foreground">Descripción breve</p>
               </ImageCard>
            </Card>
          ))}
        </div>
      </section>

    </div>
  );
}

export default HomePage;