import React, {useState} from 'react';

export default function ExibindoNome() {
  const [ nome, setNome ] = useState ("Joaquim");

  return(
    <div className='conteudo-centralizado'>
      <h3>Nome:</h3>
      <h1>{ nome }</h1>
    </div>
  );
}