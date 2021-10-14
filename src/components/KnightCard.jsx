/* eslint-disable react/prop-types */
import React from 'react';

const KnightCard = ({ knight }) => (
  <div id='knight-card-container'>
    <h1 className='subheader'>{knight.name}</h1>
    {knight.weapon && <h1 className='text'>{`Weapon: ${knight.weapon}`}</h1>}
    {knight.armor && <h1 className='text'>{`Armor: ${knight.armor}`}</h1>}
    {knight.equipment && (
      <h1 className='text'>{`Equipment: ${knight.equipment}`}</h1>
    )}
    {knight.description && (
      <h1 className='description'>{`Weapon: ${knight.description}`}</h1>
    )}
  </div>
);

export default KnightCard;
