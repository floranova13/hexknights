/* eslint-disable react/prop-types */
import '../css/variables.css';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const Card = ({ children, width, classes, handleClick }) => {
  const StyledCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: ${width[0]}px;
    border: 0.25em solid var(--primary-lighter);
    border-radius: 9px;

    &:hover {
      color: white;
      cursor: pointer;
    }

    @media screen and (max-width: 600px) {
      font-size: 8px;
    }
  `;

  const getClasses = () =>
    classes ? `${classes} mb-2 mr-1 ml-1` : 'mb-2 mr-1 ml-1';

  return (
    <StyledCard className={getClasses()} onClick={() => handleClick}>
      {children}
    </StyledCard>
  );
};

export default Card;
