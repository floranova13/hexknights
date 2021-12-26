/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import '../css/variables.css';

const Table = styled.table`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  border-collapse: collapse;
  width: 12em;
`;

const ItemTable = ({ children, title }) => {
  return (
    <>
      <h1 className='header'>{title}</h1>
      <Table>
        <tbody>{children}</tbody>
      </Table>
    </>
  );
};

export default ItemTable;
