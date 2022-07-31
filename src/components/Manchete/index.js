import React, { useState } from 'react';

export default function Manchete() {
  const [ titulo, setTitulo ] = useState("");
  const [ conteudo, setConteudo ] = useState("");

  function abrirManchete() {
    setTitulo("Exercícios disponíveis");
    setConteudo("Os exercícios de React já estão disponíveis na plataforma. Teste seus conhecimentos.");
  }

  return (
    <div className='conteudo-centralizado'>
      <button onClick = { abrirManchete }>
        Ver Manchete
      </button>

      <h1>{ titulo }</h1>

      <p>{ conteudo }</p>
    </div>
  );
}