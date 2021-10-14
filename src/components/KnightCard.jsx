/* eslint-disable react/prop-types */
import React from 'react';

const KnightCard = ({ knight }) => (
  <div id='knight-card-container'>
    <h2>{knight.name}</h2>
  </div>
);

export default KnightCard;
