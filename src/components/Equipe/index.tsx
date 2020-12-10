import React from 'react';

import { Container } from './styles';

interface IProps {
    id: string;
}

const Equipe: React.FC<IProps> = ({ id }) => {
  return (
    <Container id={id}>
        <div>
            <h1>Nossa Equipe</h1>
            <div className="card">
                <img src="http://127.0.0.1:5500/src/images/team-img1.jpg" width="300" alt=""/>
                <div className="titles">
                    <h3>André Pedro Bestana</h3>
                    <p>Cargo / Advocacia</p>
                    <h4>Atuação na area</h4>
                </div>
            </div>
        </div>
    </Container>
  );
}

export default Equipe;