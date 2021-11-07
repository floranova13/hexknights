/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';

const BlightbeastRootCard = ({ blightbeastSeed, blightbeastRoot }) => {
  let history = useHistory();

  const handleClick = () => {
    history.push(
      `/blightbeasts/taxonomy/${blightbeastSeed}/${blightbeastRoot.name}`
    );
  };

  const getIcon = () => {
    switch (blightbeastRoot) {
      case 'Titarche':
        return faGenderless;
      case 'Medimite':
        return faCircleNotch;
      case 'Fellchital':
        return faGenderless;
      case 'Marole':
        return faCircleNotch;
      case 'Coreplet':
        return faGenderless;
      case 'Felldrasil':
        return faGenderless;
      case 'Piscel':
        return faCircleNotch;
      case 'Elfirmant':
        return faGenderless;
      default:
        return faAdjust;
    }
  };

  return (
    <div
      className='blightbeast-root-card-container'
      onClick={() => handleClick()}
    >
      <div className='blightbeast-root-title-container'>
        <FontAwesomeIcon
          className='blightbeast-root-icon'
          size='2x'
          icon={getIcon()}
        />
        <h1 className='header blightbeast-root-name'>{blightbeastRoot.name}</h1>
        <FontAwesomeIcon
          className='blightbeast-root-icon'
          size='2x'
          icon={getIcon()}
        />
      </div>
    </div>
  );
};

export default BlightbeastRootCard;
