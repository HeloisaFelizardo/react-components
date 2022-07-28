import React, { useState } from 'react';
import './estilo.css';

export default function GamePlay() {
  const jogador = useState("DuduXbox");
  const [ curtidas, setCurtidas ] = useState(0);

    function curtir () {
        setCurtidas(curtidas + 1);
    }

    return (
        <div className='conteudo-centralizado' >
        <h1> { jogador } </h1>
        <h3>Curtidas: { curtidas } </h3>  
        <button onClick = { curtir } >Curtir</button>
        </div>
    );
}