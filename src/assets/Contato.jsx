import Curriculo from "./Curriculo";

function Contato() {
    return (
        <div className="container mt-4">
            <h1 className="text-center mb-4">Contato</h1>

            <div className="mb-3">
                <h5>Telefone</h5>
                <p>(11) 97543-1555</p>
            </div>

            <div className="mb-3">
                <h5>Email</h5>
                <p>murilo.bioni@gmail.com</p>
            </div>

            <div className="mb-3">
                <h5>LinkedIn</h5>
                <a href="https://www.linkedin.com/in/murilo-bioni-caruso-5a1b41136/" target="_blank">Perfil</a>
            </div>

            <div className="mb-3">
                <h5>GitHub</h5>
                <a href="https://github.com/MuriTG25" target="_blank">Repositórios</a>
            </div>
        </div>
    );
}
export default Contato;