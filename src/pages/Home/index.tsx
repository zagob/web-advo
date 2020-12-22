import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

import './styles.css';
import { ContainerBg } from './styles';
import Sobre from '../../components/Sobre';
// import Equipe from '../../components/Equipe';
import AreaAtuacao from '../../components/AreaAtuacao';
import Contato from '../../components/Contato';
// import Links from '../../components/Links';

const Home: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
      <>
        <ContainerBg id="home">
          <section className="bg-main">
            <div className="titulo">
              <h1>
              Nossa missão é solucionar <span>os seus problemas jurídicos</span>
              </h1>
              <div className="element">
                {count ? (
                  <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}> 
                      <span>Nos dedicamos ajudar com o que precisa</span>
                      <Typist.Backspace count={46} delay={800} />
                      <span>relações verdadeiras e duradouras com nossos clientes</span>
                      <Typist.Backspace count={60} delay={1000} />
                      <span>Marque uma consulta agora mesmo!</span>
                      <Typist.Backspace count={60} delay={2000} />
                  </Typist>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="bg"></div>
          </section>
        </ContainerBg>

        <Sobre id="sobrenos" />
        {/* <Equipe id="equipe" /> */}
        <AreaAtuacao id="area" />
        {/* <Links id="links" /> */}
        <Contato id="contato" />
      </>
  );
}

export default Home;