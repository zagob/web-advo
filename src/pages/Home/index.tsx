import React, { useEffect, useState } from 'react';
import Typist from 'react-typist';

import './styles.css';
import { ContainerBg } from './styles';

const Home: React.FC = () => {
  const [count, setCount] = useState(1);

  useEffect(() => {
    setCount(1);
  }, [count]);
  return (
      <>
        <ContainerBg>
          <section className="bg-main">
            <div className="titulo">
              <h1>
              Nossa missão é solucionar <span>os seus problemas</span>
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
      </>
  );
}

export default Home;