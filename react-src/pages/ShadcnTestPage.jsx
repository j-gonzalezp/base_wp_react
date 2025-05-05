// react-src/pages/ShadcnTestPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

// Importa TODOS los componentes que instalaste para probarlos
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from '@/components/ui/separator';

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react" // Icono de ejemplo para Alert
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu";
// Nota: No incluimos NavigationMenu aquí porque ya está en el Header,
// pero podrías añadir un ejemplo básico si quisieras probarlo aislado.

function ShadcnTestPage() {
  return (
    <div className="space-y-8"> {/* Espacio vertical entre elementos de prueba */}
      <h2 className="text-2xl font-bold mb-6">Página de Prueba Componentes Shadcn/ui</h2>
      <p>Verifica que los componentes se renderizan y heredan el estilo base.</p>
      <Link to="/" className="text-blue-600 hover:underline">← Volver al Inicio</Link>

      <Separator />

      {/* Prueba de Button */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Button</h3>
        <div className="flex gap-4">
          <Button>Botón Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>
      </section>

      <Separator />

      {/* Prueba de Card */}
      <section>
        <h3 className="text-lg font-semibold mb-2">Card</h3>
        <Card className="w-[350px]">
          <CardHeader>
            <CardTitle>Título de Tarjeta</CardTitle>
            <CardDescription>Descripción de la tarjeta aquí.</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Contenido principal de la tarjeta. Puede ser texto, otros componentes, etc.</p>
          </CardContent>
          <CardFooter className="flex justify-between">
             <Button variant="outline">Cancelar</Button>
             <Button>Aceptar</Button>
          </CardFooter>
        </Card>
      </section>

      <Separator />

       {/* Prueba de Formularios (Input, Label, Textarea) */}
       <section>
        <h3 className="text-lg font-semibold mb-2">Form Elements</h3>
        <div className="grid w-full max-w-sm items-center gap-1.5 mb-4">
          <Label htmlFor="email">Email</Label>
          <Input type="email" id="email" placeholder="Email" />
        </div>
        <div className="grid w-full gap-1.5">
           <Label htmlFor="message">Tu Mensaje</Label>
           <Textarea placeholder="Escribe tu mensaje aquí." id="message" />
        </div>
       </section>

       <Separator />

        {/* Prueba de Alert */}
       <section>
        <h3 className="text-lg font-semibold mb-2">Alert</h3>
         <Alert className="mb-4">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              Puedes añadir componentes a tu app usando el CLI.
            </AlertDescription>
         </Alert>
         <Alert variant="destructive">
            {/* <AlertCircle className="h-4 w-4" /> */} {/* Necesitarías instalar lucide-react: npm i lucide-react */}
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Tu sesión ha expirado. Por favor, inicia sesión de nuevo.
            </AlertDescription>
         </Alert>
       </section>

       <Separator />

       {/* Prueba de Dialog */}
       <section>
          <h3 className="text-lg font-semibold mb-2">Dialog (Modal)</h3>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Abrir Diálogo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>Editar Perfil</DialogTitle>
                <DialogDescription>
                  Haz cambios a tu perfil aquí. Clica guardar cuando termines.
                </DialogDescription>
              </DialogHeader>
              <div className="grid gap-4 py-4">
                {/* Contenido del formulario de ejemplo */}
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">Nombre</Label>
                  <Input id="name" defaultValue="Joaquín González" className="col-span-3" />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="username" className="text-right">Usuario</Label>
                  <Input id="username" defaultValue="@joaquingp" className="col-span-3" />
                </div>
              </div>
              <DialogFooter>
                <Button type="submit">Guardar Cambios</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
       </section>

       <Separator />

        {/* Prueba de DropdownMenu */}
       <section>
          <h3 className="text-lg font-semibold mb-2">Dropdown Menu</h3>
           <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline">Abrir Menú</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>Mi Cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Facturación</DropdownMenuItem>
                <DropdownMenuItem>Ajustes</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar Sesión</DropdownMenuItem>
            </DropdownMenuContent>
           </DropdownMenu>
       </section>


       <Separator />
       <Link to="/" className="text-blue-600 hover:underline">← Volver al Inicio</Link>

    </div>
  );
}

export default ShadcnTestPage;