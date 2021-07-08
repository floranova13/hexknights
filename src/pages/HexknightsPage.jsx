import React from 'react';
import Hexalignment from '../components/Hexalignment';
import { getHexknights } from '../utils/hexknights';

export default function HexknightsPage() {
  console.log(getHexknights());
  return (
    <div>
      <Hexalignment
        hexalignment={'Judgement'}
        hexknights={getHexknights('Judgement')}
      />
      <Hexalignment
        hexalignment={'Mercy'}
        hexknights={getHexknights('Mercy')}
      />
      <Hexalignment
        hexalignment={'Progress'}
        hexknights={getHexknights('Progress')}
      />
      <Hexalignment
        hexalignment={'Exploration'}
        hexknights={getHexknights('Exploration')}
      />
      <Hexalignment
        hexalignment={'Resiliance'}
        hexknights={getHexknights('Resiliance')}
      />
      <Hexalignment
        hexalignment={'Sacrifice'}
        hexknights={getHexknights('Sacrifice')}
      />
      <p>hexknights</p>
    </div>
  );
}
