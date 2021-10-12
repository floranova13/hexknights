/* eslint-disable react/prop-types */
import React from 'react';

const HexknightCard = ({ hexknight }) => {
  const deciphered = "font-family: 'Libre Barcode 39 Extended', cursive;";

  return (
    <div id='hexknight-card-container'>
      <h4 className='header hexknight-card-content'>{hexknight.name}</h4>
      <h4 className='description hexknight-card-content'>
        {hexknight.description}
      </h4>
      <h4 className='subheader hexknight-card-content'>{`Squad: ${hexknight.squadName}`}</h4>
    </div>
  );
};

export default HexknightCard;
