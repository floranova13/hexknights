import React from 'react';
import { Container } from '@material-ui/core';

const HexknightCard = (hexknight) => (
  <div>
    <Container>{hexknight.name}</Container>
  </div>
);

export default HexknightCard;
