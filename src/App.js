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
import CampoQuantidade from './components/CampoQuantidade';
import MensagemDoDia from './components/MensagemDoDia';
import ConteudoPostagem from './components/ConteudoPostagem';
import Contador from './components/Contador';
import ExibindoNome from './components/ExibindoNome';

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
      <CampoQuantidade />
      <MensagemDoDia />
      <ConteudoPostagem />
      <Contador />
      <ExibindoNome />
    </div>
  );
}

export default App;