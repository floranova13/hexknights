/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import '../css/variables.css';

const Row = styled.tr`
  @media screen and (max-width: 600px) {
    font-size: 8px;
  }

  &:hover {
    color: white;
  }
`;

const IconItem = ({ pageString, label, icon }) => {
  let history = useNavigate();

  const handleClick = () => {
    history(pageString);
  };

  return (
    <Row onClick={() => handleClick()}>
      <td colSpan='1'>
        <FontAwesomeIcon className='mr-1' size='2x' icon={icon} />
      </td>
      <td colSpan='12' className='header text-left'>
        {label}
      </td>
    </Row>
    // <ItemContainer onClick={() => handleClick()}>
    //   <FontAwesomeIcon className='mr-1' size='2x' icon={icon} />
    //   <h1 className='header'>{label}</h1>
    // </ItemContainer>
  );
};

export default IconItem;
