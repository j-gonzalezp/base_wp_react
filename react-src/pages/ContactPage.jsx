import React from 'react';
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Formulario enviado (simulación).");
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto">
      <h1 className="text-center">Contacto</h1>
      <Separator />
      <p className="text-center text-muted-foreground">
        ¿Tienes alguna pregunta o comentario? Completa el formulario a continuación.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6"> {/* Aumentar espacio */}
        <div className="space-y-2">
          <Label htmlFor="name" className="font-semibold">Nombre</Label>
          <Input type="text" id="name" placeholder="Tu nombre completo" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="font-semibold">Email</Label>
          <Input type="email" id="email" placeholder="tu.correo@ejemplo.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject" className="font-semibold">Asunto</Label>
          <Input type="text" id="subject" placeholder="Asunto de tu mensaje" required />
        </div>
        <div className="space-y-2">
           <Label htmlFor="message" className="font-semibold">Mensaje</Label>
           <Textarea placeholder="Escribe tu mensaje aquí..." id="message" rows={6} required />
        </div>
        <div className="text-center pt-4">
          {/* Usar el botón primario (azul institucional) */}
          <Button type="submit" size="lg">Enviar Mensaje</Button>
        </div>
      </form>
    </div>
  );
}

export default ContactPage;