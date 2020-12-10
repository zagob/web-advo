import React from 'react';
import { FaWhatsapp, FaFacebook, FaLocationArrow } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';

import { Container } from './styles';

interface IProps {
    id: string;
}

const Contato: React.FC<IProps> = ({ id }) => {
  return (
      <Container id={id}>
          <div className="container">
            <div className="row">
                <div>
                    <h2>Contato e Localização</h2>
                </div>

                <div>
                    <form action="">
                        <label >Nome</label>
                        <input type="text" placeholder="Nome Completo" />

                        <label >Email</label>
                        <input type="email" placeholder="E-mail" />

                        <label>Celular</label>
                        <input type="number" placeholder="(DD) 0000.0000" />

                        <label >Menssagem</label>
                        <textarea placeholder="Menssagem" />

                        <button type="submit">Enviar</button>
                    </form>
                </div>

                <div className="info">
                    <address>
                        <h3>Nosso Endereço</h3>

                        <p><li ><FaWhatsapp size={25} color="green" /></li>(14) 99713.0042</p>
                        <p><li ><AiOutlineMail size={25} color="#000" /></li> bestana@adv.oabsp.org.br</p>
                        <p><li ><FaLocationArrow size={25} color="#000" /></li> Rua Pereira de Rezende, 435 - Barra Bonita - SP</p>
                    </address>
                    <ul className="social">
                        <h3>Rede Social</h3>
                        <div>
                        <p><a href="https://api.whatsapp.com/send?phone=5514997130042"><FaWhatsapp color="green" size={32} /></a></p>
                        <p><a href="https://www.facebook.com.br"><FaFacebook color="blue" size={32} /></a></p>
                        </div>
                    </ul>
                </div>
            </div>
          </div>
      </Container>
  );
}

export default Contato;