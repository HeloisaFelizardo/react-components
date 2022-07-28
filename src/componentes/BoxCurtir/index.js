import React, { useState } from 'react';

export default function BoxCurtir() {
  const [ curtiu, setCurtiu ] = useState(false);

  function verificaCurtida() {
    const texto = !curtiu ? "Você curtiu" : "Você não pode curtir de novo";
    setCurtiu(true);
    alert(texto);
  }

  return(
    <div className='conteudo-centralizado'>
      <p>Clique no botão abaixo para curtir a publicação</p>
      <button onClick = { verificaCurtida } >Verificar clique</button>
    </div>
  );
}