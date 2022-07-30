import React, { useState } from 'react';

export default function ExibeNumero() {
  const [ total, setTotal ] = useState(0);

  function incrementar () {
    setTotal ( total + 1);
  }

  return (
    <div className='conteudo-centralizado'>
      <h1>Valor: { total }</h1>

      <button onClick = { incrementar } >
        Incrementar 1
      </button>
    </div>
  );
}