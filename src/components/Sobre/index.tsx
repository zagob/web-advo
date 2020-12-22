import React from 'react';

import { Container } from './styles';

interface IProps {
    id: string;
}

const Sobre: React.FC<IProps> = ({ id }) => {
  return (
      <Container id={id}>
          <div className="content">
              <div className="title">
                <h1>Sobre nós</h1>
              </div>

              <div className="paragrafos">
                  <p>
                  O escritório Bestana Sociedade de Advogados atua no mercado 
                  há mais de vinte anos, se especializando na resolução de problemas 
                  jurídicos nas diversas áreas, com profissionais capacitados e 
                  empenhados em dar atenção máxima aos nossos clientes. Atendimento 
                  personalizado com apresentação de uma gama de opções para solucionar 
                  os problemas mais complexos do cotidiano. Tendo como norte a Justiça, 
                  a ética e acima de tudo a soberania das leis, estamos preparados 
                  para atuar nos mais diversos setores e áreas de Direito 
                  Trabalhista (acidente de trabalho e doença ocupacional), 
                  Direito Previdenciário, Direito Civil, Família e Sucessões, 
                  Direito Empresarial, Direito do Consumidor e Direito Penal. 
                  O escritório oferece assessoria e consultoria jurídica 
                  consultiva e contenciosa, estamos preparados para atender 
                  ao processo eletrônico e realizar audiências virtuais.
                  </p>

                  <p>
                    <strong>
                    Prezados clientes! Informamos que, devido ao recesso 
                    Forense estaremos em férias coletivas (com plantão via WhatsApp) 
                    a partir do dia 18 de Dezembro de 2020 até o dia 15 de Janeiro 
                    de 2021. Desejemos a todos um Feliz Natal e um Próspero 
                    Ano Novo..
                    </strong>
                  </p>
              </div>
          </div>
      </Container>
  );
}

export default Sobre;