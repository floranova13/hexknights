import React from 'react';
import { Row, Col, Icon, Card, CollectionItem } from 'react-materialize';

const HexknightCard = (hexknight) => (
  <CollectionItem>
    <Row>
      <Col m={6} s={12}>
        <Card
          actions={[
            <a key='1' href='#'>
              This is a link
            </a>,
            <a key='2' href='#'>
              This is a link
            </a>,
          ]}
          className='blue-grey darken-1'
          closeIcon={<Icon>close</Icon>}
          revealIcon={<Icon>more_vert</Icon>}
          textClassName='white-text'
          title={hexknight.name}
        >
          {hexknight.description}
        </Card>
      </Col>
    </Row>
    <Card variant='outlined'>
      <Card.Header subheader={`Squad: ${hexknight.squad}`}>
        {hexknight.name}
      </Card.Header>
      <Card.Header>{`Squad: ${hexknight.squadName}`}</Card.Header>
      <Card.Content>{hexknight.description}</Card.Content>
      {hexknight.name}
    </Card>
  </CollectionItem>
);

export default HexknightCard;
