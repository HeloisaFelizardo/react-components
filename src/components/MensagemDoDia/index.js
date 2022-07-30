import React from 'react';

export default function MensagemDoDia() {
  function verMensagem() {
    alert("Quando tudo está errado e confuso, apague tudo e recomece do zero.")
  }

  return (
    <div className='conteudo-centralizado' >
      <h2>Clique para ver a mensagem</h2>
      <button onClick= { verMensagem } >Ver mensagem</button>

    </div>
  );
}