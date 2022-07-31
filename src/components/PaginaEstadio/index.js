import React, { useState } from 'react';

export default function PaginaEstadio() {
  const [ nome ] = useState ("Maracanã");
  return (
    <div className = "conteudo-centralizado">
      <h1>{nome}</h1>
    </div>
  );
}