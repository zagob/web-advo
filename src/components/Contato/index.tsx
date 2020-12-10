import React from 'react';
import { FaWhatsapp, FaLocationArrow, FaFacebook } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { Container } from './styles';

interface IProps {
    id: string;
}

const Contato: React.FC<IProps> = ({ id }) => {
  return (
      <Container id={id}>
          <section className="blocos">
              <div className="title">
                  <h1>Contato e Localização</h1>
              </div>

              <section>
                  <div className="contatos">
                      <form action="">
                          <label htmlFor="">Nome</label>
                          <input type="text" placeholder="Nome Completo" />
                          <label htmlFor="">Email</label>
                          <input type="text" placeholder="Email" />
                          <label htmlFor="">Celular</label>
                          <input type="number" placeholder="Telefone: Ex: (DD)0000.0000" />
                          <label htmlFor="">Menssagem</label>
                          <textarea placeholder="Observações" />
                          <button type="submit">Enviar</button>
                      </form>
                  </div>
                  <div className="endereco">
                      <h2>Nosso Endereço</h2>
                      <div>
                          <FaWhatsapp size={25} />
                          <span>(14)99713.0042</span>
                      </div>
                      <div>
                          <AiOutlineMail size={25} />
                          <span>bestana@adv.oabsp.org.br</span>
                      </div>
                      <div>
                          <FaLocationArrow size={25} />
                          <span> Rua Pereira de Rezende, 435 - Barra Bonita - SP</span>
                      </div>
                      <div style={{borderBottom: '1px solid #ccc'}}></div>
                      <div className="redes-sociais">
                          <h2>Rede Social</h2>
                          <FaFacebook className="face" size={25} />
                          <FaWhatsapp className="wpp" size={28} />
                      </div>
                  </div>
              </section>
          </section>
      </Container>
  );
}

export default Contato;