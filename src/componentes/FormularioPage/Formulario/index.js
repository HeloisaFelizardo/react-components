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

                <label>Melhor dia para vencimento:</label>
                <input placeholder="Valores entre 10 e 20" type="number" name="dia_vencimento" min="10" max="20" required />

                <label>Login:</label>
                <input placeholder="Digite seu login" type="text" name="login" minLength="3" required />

                <label>Senha:</label>
                <input placeholder="Digite sua senha" type="password" name="senha" minLength="4" maxLength="8" required />

                <button type="submit">Enviar Matrícula</button>

            </form>
        </div>
    );
}