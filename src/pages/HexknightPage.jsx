import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import KnightCard from '../components/KnightCard';
import { getHexknights } from '../utils/hexknights';

const HexknightPage = () => {
  const { knightName } = useParams(); // hexknight id for retrieving specific info
  const [hexknight, setHexknight] = useState(getHexknights()[0]);

  useEffect(() => {
    console.log('Trying to get Hexknight: ' + knightName);
    setHexknight(getHexknights().find((knight) => knight.name === knightName));
  });

  return (
    <Page>
      <h1 className='page-title'>{hexknight.name}</h1>
      <h1 className='description mb-4'>{hexknight.description}</h1>
      <div id='hexknight-squad-container'>
        <h1 className='subheader hexknight-card-content mb-1'>
          {hexknight.squadName}
        </h1>
        {hexknight &&
          hexknight.squad.map((k, i) => {
            return <KnightCard className='mb-1' key={i} knight={k} />;
          })}
      </div>
    </Page>
  );
};

export default HexknightPage;
