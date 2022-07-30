import React from 'react';

export default function PaginaDeNotificacao() {
  function notificarUsuario () {
       alert("Novos exercícios de React disponíveis");
  }

  return(
    <div className='conteudo-centralizado'>
      <button onClick={notificarUsuario}>
        Alertar
      </button>
    </div>
  );
}