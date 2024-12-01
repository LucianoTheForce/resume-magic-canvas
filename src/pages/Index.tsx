import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <Card className="p-6">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">Reactive Resume</h1>
          <p className="text-gray-600">
            Bem-vindo ao Reactive Resume! Um construtor de currículos open-source que permite criar, atualizar e compartilhar seu currículo profissional.
          </p>
          <div className="flex gap-4">
            <Button variant="default">Criar Currículo</Button>
            <Button variant="outline">Ver Exemplos</Button>
          </div>
        </div>
      </Card>
    </div>
  );
}