import React, { useState } from 'react';

export default function Produto() {
  const [valor, setValor] = useState("HD SSD 500GB");
  const [nomeProduto, setNomeProduto] = useState('hd');

  function revelarValor() {
    setNomeProduto(nomeProduto.toUpperCase());
    setValor("R$ 500,00");
  }

  return (
    <div className='conteudo-centralizado'>
      <h1>Produto: { nomeProduto } </h1>
      <h3>Valor: { valor } </h3>
      <button onClick = { revelarValor } >Ver total em estoque</button>
    </div>
  );
}