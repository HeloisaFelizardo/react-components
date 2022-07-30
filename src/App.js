import React from 'react';
import './App.css';
import PaginaInicial from './components/PaginaInicial';
import AlterarTexto from './components/AlterarTexto';
import AlterarEstilo from './components/AlterarEstilo';
import BoxCurtir from './components/BoxCurtir';
import GamePlay from './components/GamePlay';
import FormularioPage from './components/FormularioPage';
import ExibeNumero from './components/ExibeNumero';
import PaginaDeNotificacao from './components/PaginaDeNotificacao';

function App() {
  return (
    <div className="App">
      <PaginaInicial />
      <AlterarTexto />
      <AlterarEstilo />
      <BoxCurtir />
      <GamePlay />
      <FormularioPage />
      <ExibeNumero />
      <PaginaDeNotificacao />
    </div>
  );
}

export default App;