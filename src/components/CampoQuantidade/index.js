import React, {useState} from 'react';

export default function CampoQuantidade() {
  const [ quantidade, setQuantidade ] = useState(0);

  function adicionar() {
    setQuantidade(quantidade + 1);
  }

  function remover() {
    setQuantidade(quantidade - 1);
  }

  return(
    <div className='conteudo-centralizado'>
      <h2>{quantidade}</h2>
      <div className='alinhar-botoes'>
        <button onClick = { adicionar }>+</button>
        <button onClick = { remover }>-</button>
      </div>
    </div>
  );
}