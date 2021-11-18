/* eslint-disable react/prop-types */
import React from 'react';
import HexknightCard from './HexknightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlusSquare,
  faMinusSquare,
  faFire,
  faMoon,
  faFlask,
  faEye,
  faShieldAlt,
  faBurn,
} from '@fortawesome/free-solid-svg-icons';

const Hexalignment = ({
  hexalignment,
  hexknights,
  expanded,
  toggleExpansion,
}) => {
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

  const knightList = hexknights.map((knight, i) => {
    return <HexknightCard key={i} hexknight={knight} />;
  });

  return (
    <div id='hexalignment-container'>
      <div
        className='hexalignment-title-container'
        onClick={() => toggleExpansion(!expanded)}
      >
        <FontAwesomeIcon
          size='2x'
          icon={expanded ? faMinusSquare : faPlusSquare}
        />
        <h1 className='header hexalignment-title'>{`Hexalignment: ${hexalignment}`}</h1>
        <FontAwesomeIcon size='2x' icon={getIcon(hexalignment)} />
      </div>
      <div id='hexalignment-hexknight-container'>
        {expanded ? knightList : []}
      </div>
    </div>
  );
};

export default Hexalignment;
