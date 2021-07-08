import React from 'react';
import { Card, CardContent, CardHeader } from '@material-ui/core';

const HexknightCard = (hexknight) => (
  <Card variant='outlined'>
    <CardHeader subheader={`Squad: ${hexknight.squad}`}>
      {hexknight.name}
    </CardHeader>
    <CardHeader>{`Squad: ${hexknight.squadName}`}</CardHeader>
    <CardContent>{hexknight.description}</CardContent>
    {hexknight.name}
  </Card>
);

export default HexknightCard;
