/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import HexknightCard from './HexknightCard';

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
    <div id='hexalignment-container' onClick={() => toggleExpansion(!expanded)}>
      <h1 className='header hexalignment-title'>{`Hexalignment: ${hexalignment}`}</h1>
      <div id='hexalignment-hexknight-container'>
        {expanded ? knightList : []}
      </div>
    </div>
  );
};

export default Hexalignment;
