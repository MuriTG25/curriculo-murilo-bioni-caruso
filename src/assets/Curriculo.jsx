function Curriculo() {
    return (
        <main className="container py-5">
            <div className="mx-auto px-3">
                <h1 className="text-center mb-4">Currículo</h1>

                <h2 className="border-bottom pb-2 mb-3">Formações</h2>

                <div className="mb-4">
                    <h4>Fatec Indaiatuba</h4>
                    <p className="text-muted mb-1">Agosto 2024 – Atual</p>
                    <p>Análise e Desenvolvimento de Sistemas com foco em programação e áreas de Tecnologia da Informação.
                    </p>
                </div>

                <div className="mb-4">
                    <h4>Alura</h4>
                    <p className="text-muted mb-1">Novembro 2022 – Novembro 2023 · 826 horas</p>
                    <p>12 formações com foco em desenvolvimento Android com Kotlin, SQL e gerenciamento de banco de dados,
                        Git e
                        GitHub, lógica de programação, arquitetura e design de código, Kotlin e Java.</p>
                </div>

                <div className="mb-4">
                    <h4>Claretiano</h4>
                    <p className="text-muted mb-1">Março 2019 – Dezembro 2019</p>
                    <p>Pós-graduação em Gestão Esportiva com formação em Administração e Marketing aplicados ao Esporte.</p>
                </div>

                <div className="mb-4">
                    <h4>Universidade de São Paulo (USP)</h4>
                    <p className="text-muted mb-1">Fevereiro 2012 – Dezembro 2016</p>
                    <p>Bacharelado em Esporte com foco em atuação esportiva e Educação Física.</p>
                </div>

                <h2 className="border-bottom pb-2 mb-3 mt-5">Projetos</h2>

                <div className="mb-4">
                    <h4>Dicasa - Estoque</h4>
                    <p className="text-muted mb-1">Agosto 2025 – Dezembro 2025</p>
                    <p>Software desktop desenvolvido em Java e JavaFX com banco de dados Supabase para gerenciamento de
                        estoque.
                    </p>
                    <a className="link-primary" href="https://github.com/PICFatec2025/DiCasaEstoque" target="_blank">Ver
                        projeto</a>
                </div>

                <div className="mb-4">
                    <h4>Dicasa - Sistema Web</h4>
                    <p className="text-muted mb-1">Fevereiro 2025 – Junho 2025</p>
                    <p>Sistema web em PHP/Laravel para gerenciamento de pedidos e vendas.</p>
                    <a className="link-primary" href="https://github.com/PICFatec2025/PIC-2" target="_blank">Ver projeto</a>
                </div>

                <div className="mb-4">
                    <h4>Mundo Bola</h4>
                    <p className="text-muted mb-1">Outubro 2023 – Março 2024</p>
                    <p>Aplicativo Android em Kotlin para gerenciamento de loja com banco de dados interno.</p>
                    <a className="link-primary" href="https://github.com/MuriTG25/Mundo-Bola" target="_blank">Ver projeto</a>
                </div>

                <div className="mb-4">
                    <h4>Busca CEP</h4>
                    <p className="text-muted mb-1">Janeiro 2024 – Março 2024</p>
                    <p>Aplicativo Android em Kotlin que consulta endereços via API ViaCEP.</p>
                    <a className="link-primary" href="https://github.com/MuriTG25/busca-cep" target="_blank">Ver projeto</a>
                </div>
            </div>
        </main>
    );
}
export default Curriculo;