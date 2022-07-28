import React from 'react';

import Formulario from './componentes/Formulario/';
import TermosDeUso from './componentes/TermosDeUso/';

export default function FormularioPage() {
  function aceitarTermos () {
    alert('Você aceitou os termos de uso');
  }

  return (
    <div>      
      <Formulario />
      <TermosDeUso />
      <button onClick = { aceitarTermos } >Aceitar</button>
    </div>
  );
}