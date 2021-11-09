/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';

const BlightbeastStemCard = ({
  blightbeastSeed,
  blightbeastRoot,
  blightbeastStem,
}) => {
  let history = useHistory();

  console.log(blightbeastStem);

  const handleClick = () => {
    history.push(
      `/blightbeasts/taxonomy/${blightbeastSeed}/${blightbeastRoot}/${blightbeastStem.name}`
    );
  };

  return (
    <div
      className='blightbeast-stem-card-container'
      onClick={() => handleClick()}
    >
      <div className='blightbeast-stem-title-container'>
        <h1 className='header blightbeast-stem-name'>{blightbeastStem.name}</h1>
      </div>
    </div>
  );
};

export default BlightbeastStemCard;
