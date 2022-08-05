import React, { useState } from 'react';

export default function DadosUsuario() {
  const [ idade, setIdade ] = useState(0);

  function aniversario() {
    const novaIdade = idade + 1;
    setIdade(novaIdade);
  }


  return(
    <div className='conteudo-centralizado'>
      <h3>Idade:</h3>
      <h1>{ idade }</h1>
      <button onClick={aniversario}>Clique aqui</button>
    </div>
  );
}