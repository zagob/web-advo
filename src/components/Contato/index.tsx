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
                    <h1 style={{color: "red", textAlign: "center"}}>Formulario em manutenção</h1>
                </div>

                <div>
                    <form action="mailto:matheusbestana@gmail.com" id="contatoForm" method="get">
                        <label >Nome</label>
                        <input disabled className="cells" name="nome" type="text" placeholder="Nome Completo" />

                        <label >Email</label>
                        <input disabled className="cells" name="email" type="email" placeholder="E-mail" />

                        <label>Celular</label>
                        <input disabled className="cells" name="celular" type="number" placeholder="(DD) 0000.0000" />

                        <label >Menssagem</label>
                        <textarea className="cells" name="menssagem" placeholder="Menssagem" />

                        <button disabled value="click" id="enviar" type="submit">Enviar</button>
                    </form>
                </div>

                <div className="info">
                    <address>
                        <h3>Nosso Endereço</h3>

                        <p><li ><FaWhatsapp size={25} color="green" /></li>(14) 99713.0042</p>
                        <p><li ><AiOutlineMail size={25} color="#0D2538" /></li> bestana@adv.oabsp.org.br</p>
                        <p><li >
                            <a
                              href="https://www.google.com/maps/place/R.+Pereira+de+Rezende,+435,+Igara%C3%A7u+do+Tiet%C3%AA+-+SP,+17350-000/@-22.5093315,-48.5581893,17z/data=!3m1!4b1!4m5!3m4!1s0x94c745f5d571be91:0x56914982471af9c8!8m2!3d-22.5093315!4d-48.5560006"
                            ><FaLocationArrow size={25} color="#0D2538" /></a>
                           </li> Rua Pereira de Rezende, 435 - Barra Bonita - SP
                        </p>
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