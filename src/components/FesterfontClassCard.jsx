/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';

const FesterfontClassCard = ({ festerfontClass }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(`/festerfonts/classes/${festerfontClass}`);
  };

  const getIcon = () => {
    switch (festerfontClass) {
      case 'Clarion':
        return faGenderless;
      case 'Umbra':
        return faCircleNotch;
      default:
        return faAdjust;
    }
  };

  return (
    <div
      className='festerfont-class-card-container'
      onClick={() => handleClick()}
    >
      <div className='festerfont-class-title-container'>
        <FontAwesomeIcon
          className='festerfont-class-icon'
          size='2x'
          icon={getIcon()}
        />
        <h1 className='header ml-1 mr-1 festerfont-class-name'>
          {festerfontClass}
        </h1>
        <FontAwesomeIcon
          className='festerfont-class-icon'
          size='2x'
          icon={getIcon()}
        />
      </div>
    </div>
  );
};

export default FesterfontClassCard;
