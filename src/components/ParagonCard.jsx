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

const ParagonCard = ({ festerfontSaturation }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/saturations/${festerfontSaturation}`);
  };

  const getIcon = (hexalignment) => {
    switch (hexalignment) {
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
    <div
      className='festerfont-saturation-card-container'
      onClick={() => handleClick()}
    >
      <div className='festerfont-saturation-title-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 className='header festerfont-saturation-name'>
          {festerfontSaturation}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
    </div>
  );
};

export default ParagonCard;
