/* eslint-disable react/prop-types */
import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlightbeastStemCard = ({
  blightbeastSeed,
  blightbeastRoot,
  blightbeastStem,
}) => {
  let history = useNavigate();

  const handleClick = () => {
    history(
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
