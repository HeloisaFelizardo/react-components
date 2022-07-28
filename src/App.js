import React from 'react';
import './App.css';
import PaginaInicial from './componentes/PaginaInicial';
import AlterarTexto from './componentes/AlterarTexto';
import AlterarEstilo from './componentes/AlterarEstilo';


function App() {
  return (
    <div className="App">
      <PaginaInicial />
      <AlterarTexto />
      <AlterarEstilo />
    </div>
  );
}

export default App;