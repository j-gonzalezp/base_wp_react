import React from 'react';
import { Link } from 'react-router-dom';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

// Datos de las regiones CON SLUGS CORRECTOS
const regiones = [
  { slug: "arica-y-parinacota", nombre: "Arica y Parinacota" },
  { slug: "tarapaca", nombre: "Tarapacá" },
  { slug: "antofagasta", nombre: "Antofagasta" },
  { slug: "atacama", nombre: "Atacama" },
  { slug: "coquimbo", nombre: "Coquimbo" },
  { slug: "valparaiso", nombre: "Valparaíso" },
  { slug: "metropolitana", nombre: "Metropolitana" },
  { slug: "ohiggins", nombre: "O'Higgins" },
  { slug: "maule", nombre: "Maule" },
  { slug: "nuble", nombre: "Ñuble" },
  { slug: "biobio", nombre: "Biobío" },
  { slug: "araucania", nombre: "La Araucanía" },
  { slug: "los-rios", nombre: "Los Ríos" },
  { slug: "los-lagos", nombre: "Los Lagos" },
  { slug: "aysen", nombre: "Aysén" },
  { slug: "magallanes", nombre: "Magallanes" },
];

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="text-xl font-heading font-bold tracking-tight text-foreground mr-4">
          IDE MBN
        </Link>

        {/* Menú de Navegación */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Inicio */}
            <NavigationMenuItem>
              <Link to="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Inicio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Regiones Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Regiones</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[450px] gap-3 p-4 md:w-[550px] md:grid-cols-3 lg:w-[650px]">
                  {regiones.map((region) => (
                    <li key={region.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          to={`/mbn-${region.slug}`}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{region.nombre}</div>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Acerca De */}
            <NavigationMenuItem>
              <Link to="/acerca-de" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Acerca De
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>

            {/* Contacto */}
            <NavigationMenuItem>
              <Link to="/contacto" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contacto
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}

export default Header;