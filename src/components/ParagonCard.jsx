/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faMoon,
  faFlask,
  faEye,
  faShieldAlt,
  faBurn,
} from '@fortawesome/free-solid-svg-icons';
import { getEncryptionClass } from '../utils/hexknights';
import '../css/variables.css';
import styled from 'styled-components';

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 270px;
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

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ParagonCard = ({ paragon }) => {
  let history = useNavigate();

  const handleClick = () => {
    if (
      !getEncryptionClass(localStorage.getItem('chapter'), paragon.introduced)
    ) {
      history(`/paragons/${paragon.hexalignment}`);
    }
  };

  const getIcon = () => {
    switch (paragon.hexalignment) {
      case 'Judgement':
        return faFire;
      case 'Mercy':
        return faMoon;
      case 'Progress':
        return faFlask;
      case 'Expedition':
        return faEye;
      case 'Resilience':
        return faShieldAlt;
      default:
        return faBurn;
    }
  };

  return (
    <StyledCard className='m-1' onClick={() => handleClick()}>
      <h1 className='header'>{paragon.name}</h1>
      <TitleContainer>
        <FontAwesomeIcon
          size='2x'
          className='paragon-card-icon'
          icon={getIcon()}
        />
        <h1 className='subheader mr-1 ml-1'>{paragon.hexalignment}</h1>
        <FontAwesomeIcon
          size='2x'
          className='paragon-card-icon'
          icon={getIcon()}
        />
      </TitleContainer>
    </StyledCard>
  );
};

export default ParagonCard;
