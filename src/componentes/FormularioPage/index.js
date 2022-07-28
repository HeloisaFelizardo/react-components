import React from 'react';
import './estilo.css';

import Formulario from '../FormularioPage/Formulario/';
import TermosDeUso from '../FormularioPage/TermosUso/';

export default function FormularioPage() {
  function aceitarTermos () {
    alert('Você aceitou os termos de uso');
  }

  return (
    <div className='conteudo-centralizado' >      
      <Formulario />
      <TermosDeUso />
      <button onClick = { aceitarTermos } >Aceitar</button>
    </div>
  );
}