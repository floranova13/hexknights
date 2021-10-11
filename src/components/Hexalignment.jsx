/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import HexknightCard from './HexknightCard';

const Hexalignment = ({ hexalignment, hexknights }) => {
  useEffect(() => {
    console.log('"Hexalignment" Type: ' + typeof hexalignment);
    console.log('"Hexknights" Type: ' + typeof hexknights);
  });

  const knightList = hexknights.map((knight, i) => {
    return <HexknightCard key={i} hexknight={knight} />;
  });

  return (
    <div id='hexalignment-container'>
      <h1 className='header hexalignment-title'>{`Hexalignment: ${hexalignment}`}</h1>
      <div id='hexalignment-hexknight-container'>{knightList}</div>
    </div>
  );
};

export default Hexalignment;
