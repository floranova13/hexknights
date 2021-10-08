import React from 'react';
import { Collection, CollectionItem, Row, Col, List } from 'react-materialize';
import HexknightCard from './HexknightCard';

const Hexalignment = (hexalignment, hexknights) => (
  <div>
    <h3>{`Hexalignment: ${hexalignment}`}</h3>
    <Row />
    <Col m={6} s={12}>
      <Collection>
        <CollectionItem>Alvin</CollectionItem>
      </Collection>
    </Col>
    <List>
      {hexknights.map((knight, i) => (
        <HexknightCard key={i} hexknight={knight} />
      ))}
    </List>
  </div>
);

export default Hexalignment;
