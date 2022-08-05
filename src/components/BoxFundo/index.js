import React , { useState } from 'react';
import Conteudo from '../Conteudo';
import './estilo.css';

const BoxFundo = () =>  {
  const [ corContainer, setCorContainer ] = useState("fundo-branco");

  function trocarCor() {
    const novaCor = ( corContainer === 'fundo-branco' ) ? 'fundo-preto' : 'fundo-branco';
    setCorContainer(novaCor);
  }

  return (
    <div className='conteudo-centralizado'>
        <div className= {corContainer}>
            <Conteudo />                       
        </div>
        <button onClick={trocarCor} >Trocar Cor</button> 
    </div>
  );
}

export default BoxFundo;