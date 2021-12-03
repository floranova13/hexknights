/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
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
import { getParagon } from '../utils/religion';
import Card from './Card';

const ParagonCard = ({ paragon }) => {
  let history = useHistory();

  const handleClick = () => {
    if (
      !getEncryptionClass(localStorage.getItem('chapter'), paragon.introduced)
    ) {
      history.push(`/paragons/${paragon.hexalignment}`);
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
    <Card width={[250, 600]} classes='' handleClick={() => handleClick()}>
      <h1 className='header paragon-card-name'>{paragon.name}</h1>
      <div className='paragon-card-title-container'>
        <FontAwesomeIcon
          size='2x'
          className='paragon-card-icon'
          icon={getIcon()}
        />
        <h1 className='subheader paragon-card-hexalignment'>
          {paragon.hexalignment}
        </h1>
        <FontAwesomeIcon
          size='2x'
          className='paragon-card-icon'
          icon={getIcon()}
        />
      </div>
    </Card>
  );
};

export default ParagonCard;
