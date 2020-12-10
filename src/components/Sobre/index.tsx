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
                    O Escritório de Advocacia, está localizado 
                    em Igaraçu do Tietê-SP, se notabiliza pela 
                    prestação de serviços jurídicos de alta 
                    qualidade nas diversas áreas do direito. 
                    A meta do escritório é estabelecer e manter 
                    um padrão de atendimento eficaz e de resultados.
                  </p>

                  <p>
                    Há mais de 2O anos atuando em várias aréas 
                    do direito o Escritório de Advocacia, 
                    está localizado no centro da cidade de 
                    Igaraçu do Tietê -SP na Rua Pereira de 
                    Rezende, 435 - B, se notabiliza pela prestação 
                    de serviços jurídicos de alta qualidade nas 
                    diversas áreas do direito. A meta do escritório
                    é estabelecer e manter um padrão de atendimento 
                    eficaz e de resultados, tendo como estratégia 
                    tratar cada cliente de forma personalizada, de 
                    acordo com sua necessidade e demanda.
                  </p>

                  <p>
                    É uma sociedade de advogados, fundada com 
                    o propósito de atender a seus clientes de 
                    forma pessoal e dedicada, focando suprir 
                    todas as necessidades jurídicas do cliente.
                  </p>

                  <p>
                    No intuito de prestarmos um atendimento diferenciado , 
                    unindo a prestação de serviços de forma direta, com 
                    profissionais qualificados, humanizando as relações, 
                    ao que há de mais moderno em termos de tecnologia. 
                    Nossos clientes têm atendimento pessoal e personalizado 
                    de acordo com o seu perfil.
                  </p>

                  <p>
                    Dispomos de toda a estrutura necessária ao 
                    perfeito exercício da advocacia moderna, 
                    atuando sempre com seriedade, transparência, 
                    eficiência e credibilidade, atributos que nos 
                    tem distinguido dos demais escritórios e 
                    acarretando o reconhecimento de cada cliente.
                  </p>
              </div>
          </div>
      </Container>
  );
}

export default Sobre;