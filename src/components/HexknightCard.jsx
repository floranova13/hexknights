/* eslint-disable react/prop-types */
import React from 'react';
import { getEncryptionClass } from '../utils/hexknights';

const HexknightCard = ({ hexknight }) => {
  return (
    <div
      id='hexknight-card-container'
      className={getEncryptionClass(
        localStorage.getItem('chapter'),
        hexknight.introduced
      )}
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
