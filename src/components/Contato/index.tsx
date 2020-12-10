import React from 'react';
import { FaWhatsapp, FaFacebook, FaLocationArrow } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { Container } from './styles';

const Contato: React.FC = () => {
  return (
      <Container>
          <div className="container">
            <div className="row">
                <div>
                    <h2>Contato e Localização</h2>
                </div>

                <div>
                    <form action="">
                        <label htmlFor="">Nome</label>
                        <input type="text" placeholder="Nome Completo" />

                        <label htmlFor="">Email</label>
                        <input type="email" placeholder="E-mail" />

                        <label htmlFor="">Celular</label>
                        <input type="number" placeholder="(DD) 0000.0000" />

                        <label htmlFor="">Menssagem</label>
                        <textarea placeholder="Menssagem" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="info">
                    <address>
                        <h3>Nosso Endereço</h3>

                        <p><a href="" ><FaWhatsapp size={25} color="green" /></a>(14) 99713.0042</p>
                        <p><a href=""><AiOutlineMail size={25} color="#ccc" /></a> bestana@adv.oabsp.org.br</p>
                        <p><a href=""><FaLocationArrow size={25} color="#000" /></a> Rua Pereira de Rezende, 435 - Barra Bonita - SP</p>
                    </address>
                    <ul className="social">
                        <h3>Rede Social</h3>
                        <p><a href=""><FaWhatsapp color="green" size={25} /></a></p>
                        <p><a href=""><FaFacebook color="blue" size={25} /></a></p>
                    </ul>
                </div>
            </div>
          </div>
      </Container>
  );
}

export default Contato;