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
import PaginaEstadio from './components/PaginaEstadio';
import Manchete from './components/Manchete';
import Produto from './components/Produto';
import DadosUsuario from './components/DadosUsuario';

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
      <PaginaEstadio />
      <Manchete />
      <Produto /> 
      <DadosUsuario />     
    </div>
  );
}

export default App;