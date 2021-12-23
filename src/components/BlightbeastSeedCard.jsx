/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';

const BlightbeastSeedCard = ({ blightbeastSeed }) => {
  let history = useNavigate();

  const handleClick = () => {
    history(`/blightbeasts/taxonomy/${blightbeastSeed}`);
  };

  const getIcon = () => {
    switch (blightbeastSeed) {
      case 'Arth':
        return faGenderless;
      case 'Botan':
        return faCircleNotch;
      default:
        return faAdjust;
    }
  };

  return (
    <div
      className='blightbeast-seed-card-container'
      onClick={() => handleClick()}
    >
      <div className='blightbeast-seed-title-container'>
        <FontAwesomeIcon
          className='blightbeast-seed-icon'
          size='2x'
          icon={getIcon()}
        />
        <h1 className='header blightbeast-seed-name'>{blightbeastSeed}</h1>
        <FontAwesomeIcon
          className='blightbeast-seed-icon'
          size='2x'
          icon={getIcon()}
        />
      </div>
    </div>
  );
};

export default BlightbeastSeedCard;
