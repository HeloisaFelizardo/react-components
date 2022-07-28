import { useState } from "react";
import "./estilo.css";

export default function AlterarTexto() {
  const [novoTexto, setNovoTexto] = useState();

  function alterarTexto() {
    setNovoTexto("Hello, World!");
  }

  function apagarTexto() {
    setNovoTexto(" ");
  }

  return (
    <div className="conteudo-centralizado">
      <div className="area-texto">
        <h2>{novoTexto}</h2>
      </div>
      <div className="area-botao">
        <label>Click no botão abaixo para aparecer um texto:</label>
        <button onClick={alterarTexto}>Gerar texto</button>
      </div>
      <div className="area-botao">
        <label>Click no botão abaixo para apagar o texto:</label>
        <button onClick={apagarTexto}>Apagar texto</button>
      </div>
    </div>
  );
}
