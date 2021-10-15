import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import KnightCard from '../components/KnightCard';
import { getHexknights, getHexalignmentIconClass } from '../utils/hexknights';

const HexknightPage = () => {
  const { knightName } = useParams(); // hexknight id for retrieving specific info
  const [hexknight, setHexknight] = useState(getHexknights()[0]);

  useEffect(() => {
    console.log('Trying to get Hexknight: ' + knightName);
    setHexknight(getHexknights().find((knight) => knight.name === knightName));
  });

  // TODO: Add an icon beside hexalignment that corresponds with one of six values.

  return (
    <Page>
      <div id='hexknight-page-container'>
        <h1 className='page-title'>{hexknight.name}</h1>
        <div id='alignment-container'>
          <i className={getHexalignmentIconClass(hexknight.hexalignment)}></i>
          <h1 className='header mr-2 ml-2'>{hexknight.hexalignment}</h1>
          <i className={getHexalignmentIconClass(hexknight.hexalignment)}></i>
        </div>

        {hexknight.combatStyle && (
          <h1 className='subheader mb-1'>{hexknight.combatStyle}</h1>
        )}
        {hexknight.weapon && (
          <h1 className='text'>{`Weapon: ${hexknight.weapon}`}</h1>
        )}
        {hexknight.armor && (
          <h1 className='text'>{`Armor: ${hexknight.armor}`}</h1>
        )}
        {hexknight.equipment && (
          <h1 className='text'>{`Equipment: ${hexknight.equipment}`}</h1>
        )}
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
      </div>
    </Page>
  );
};

export default HexknightPage;
