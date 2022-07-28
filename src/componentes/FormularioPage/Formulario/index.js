export default function Formulario() {

    return (
        <div>
            <h2> Preencha o Formulario</h2>
            <form action="https://www.devmedia.com.br/codigos/formularios/aula3/">

                <label>Nome: </label>
                <input placeholder="Digite seu nome completo" type="text" name="nome" required />

                <label>Data de Nascimento: </label>
                <input type="date" name="data_nascimento" max="2004-03-01" required />

                <label>Email:</label>
                <input placeholder="exemplo@email.com" type="email" name="email" required />

                <label>Telefone:</label>
                <input placeholder="(XX) XXXXX-XXXX" type="tel" name="telefone" minLength="14" required />

                <button type="submit">Enviar Matrícula</button>

            </form>
        </div>
    );
}