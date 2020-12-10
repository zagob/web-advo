import React from 'react';

import { Container } from './styles';

interface IProps {
    id: string;
}

const Links: React.FC<IProps> = ({ id }) => {
  return (
      <Container id={id}>
          <h2>Links Uteis</h2>
      </Container>
  );
}

export default Links;