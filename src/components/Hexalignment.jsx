/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import HexknightCard from './HexknightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusSquare, faMinusSquare } from '@fortawesome/free-solid-svg-icons';

const Hexalignment = ({
  hexalignment,
  hexknights,
  expanded,
  toggleExpansion,
}) => {
  useEffect(() => {});

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
          inline
        />
        <h1 className='header hexalignment-title'>{`Hexalignment: ${hexalignment}`}</h1>
      </div>
      <div id='hexalignment-hexknight-container'>
        {expanded ? knightList : []}
      </div>
    </div>
  );
};

export default Hexalignment;
