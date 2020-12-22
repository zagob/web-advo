import React from 'react';

import { Container } from './styles';

interface IProps {
    id: string;
}

const AreaAtuacao: React.FC<IProps> = ({ id }) => {
  return (
      <Container id={id}>
          <section>
              <div className="titulo">
                  <h1>Áreas de Atuação</h1>
              </div>
              <div className="center">
                  <div className="titles">
                  <div>
                        <h2>Trabalhista</h2>
                        <li>Reclamações trabalhista</li>
                        <li>Recisórias</li>
                        <li>Defesas em geral</li>
                        <li>Acidente de trabalho</li>
                        <li>Audiências</li>
                        <li>Acidente Pessoal</li>
                        <li>Assédio Moral e Sexual</li>
                        <li>Dano Moral e Material</li>
                        <li>Doença Ocupacional</li>
                    </div>
                    <div>
                        <h2>Direito civil</h2>
                        <li>Cobrança judiciais e Extrajudiciais</li>
                        <li>Contratos em geral</li>
                        <li>Responsabilidade civil</li>
                        <li>Consultoria jurídica em lei geral de Proteção de dados</li>
                    </div>
                    <div>
                        <h2>Inventário e Sucessões</h2>
                        <li>Inventario</li>
                    </div>
                    <div>
                        <h2>Seguro de vida e seguros</h2>
                        <li>Seguro de vida em grupo ou pessoal</li>
                        <li>Análise de Apólices em geral</li>
                        <li>Seguro de Empresa</li>
                        <li>Seguro Bancário</li>
                    </div>
                    
                    
                    <div>
                        <h2>Aposentadoria e Revisões</h2>
                        <li>Aposentadoria</li>
                        <li>Revisões e Beneficios</li>
                        <li>Auxilio e Pensões</li>
                    </div>
                    <div>
                        <h2>Direito do consumidor</h2>
                        <li>Inclusão indevida do SPC/SERASA</li>
                        <li>Danos materiais e morais</li>
                        <li>Planos de Saúde</li>
                        <li>Medicamentos, Próteses, internações psiquiátrica</li>
                    </div>
                 </div>
              </div>
          </section>
      </Container>
  );
}

export default AreaAtuacao;