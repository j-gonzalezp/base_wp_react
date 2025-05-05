import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background mt-16"> {/* mt-16 para separar del contenido */}
      <div className="container mx-auto flex h-16 items-center justify-center px-4 text-center">
        <p className="text-sm text-muted-foreground">
          © {currentYear} IDE MBN - Ministerio de Bienes Nacionales. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;