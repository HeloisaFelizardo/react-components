import React, { useState } from 'react';

export default function Contador() {
   const [valor, setValor] = useState(0);

  function somar() {
    setValor( valor + 1);
  }

  function subtrair() {
    setValor( valor - 1);
  }

  return (
    <div className='conteudo-centralizado'>
      <button onClick = { somar } > + </button>

      <h2>Valor: { valor }</h2>

      <button onClick = { subtrair } > - </button>
    </div>
  );
} 