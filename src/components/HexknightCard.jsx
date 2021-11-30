/* eslint-disable react/prop-types */
import React from 'react';
import { useHistory } from 'react-router-dom';
import { getEncryptionClass } from '../utils/hexknights';

const HexknightCard = ({ hexknight }) => {
  let history = useHistory();

  const handleClick = (knightName) => {
    if (
      !getEncryptionClass(localStorage.getItem('chapter'), hexknight.introduced)
    ) {
      history.push(`/hexknights/${knightName}`);
    }
  };

  return (
    <div
      className={
        getEncryptionClass(
          localStorage.getItem('chapter'),
          hexknight.introduced
        ) + ' hexknight-card-container'
      }
      onClick={() => handleClick(hexknight.name)}
    >
      <h4 className='header hexknight-card-content'>{hexknight.name}</h4>
      <h4 className='description hexknight-card-content'>
        {hexknight.description}
      </h4>
      <h4 className='subheader hexknight-card-content'>{`Squad: ${hexknight.squadName}`}</h4>
    </div>
  );
};

export default HexknightCard;
