import React from 'react';
import { Card } from "@/components/ui/card";

export default function Index() {
  return (
    <div className="container mx-auto p-4">
      <Card className="p-6">
        <h1 className="text-2xl font-bold mb-4">Reactive Resume</h1>
        <p className="text-gray-600">
          Bem-vindo ao Reactive Resume! Um construtor de currículos open-source.
        </p>
      </Card>
    </div>
  );
}