import React from 'react';
import './App.css';
import PaginaInicial from './componentes/PaginaInicial';
import AlterarTexto from './componentes/AlterarTexto';
import AlterarEstilo from './componentes/AlterarEstilo';
import BoxCurtir from './componentes/BoxCurtir';
import GamePlay from './componentes/GamePlay';
import FormularioPage from './componentes/FormularioPage';

function App() {
  return (
    <div className="App">
      <PaginaInicial />
      <AlterarTexto />
      <AlterarEstilo />
      <BoxCurtir />
      <GamePlay />
      <FormularioPage />
    </div>
  );
}

export default App;