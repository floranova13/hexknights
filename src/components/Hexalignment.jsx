import React from 'react';
import { List, ListItem } from '@material-ui/core';
import HexknightCard from './HexknightCard';

const Hexalignment = (hexalignment, hexknights) => (
  <div>
    <h3>{`Hexalignment: ${hexalignment}`}</h3>
    <List>
      {hexknights.map((knight) => {
        <ListItem
          alignItems='center'
          component={<HexknightCard hexknight={knight} />}
        />;
      })}
    </List>
  </div>
);

export default HexknightCard;
