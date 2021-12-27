/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import '../css/variables.css';

const Container = styled.div`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  width: 30em;
  margin: 0 auto;
`;

const Table = styled.table`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  border-collapse: collapse;
  width: 12em;
`;

const ItemTable = ({ children, title }) => {
  return (
    <Container>
      <h1 className='header'>{title}</h1>
      <Table>
        <tbody>{children}</tbody>
      </Table>
    </Container>
  );
};

export default ItemTable;
