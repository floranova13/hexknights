import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import KnightCard from '../components/KnightCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFire,
  faMoon,
  faFlask,
  faEye,
  faShieldAlt,
  faBurn,
} from '@fortawesome/free-solid-svg-icons';
import { getHexknights } from '../utils/hexknights';

const HexknightPage = () => {
  const { knightName } = useParams(); // hexknight id for retrieving specific info
  const [isLoaded, setIsLoaded] = useState(false);
  const [hexknight, setHexknight] = useState(getHexknights()[0]);
  const [iconClass, setIconClass] = useState('fas fa-fire fa-2x');

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setHexknight(
        getHexknights().find((knight) => knight.name === knightName)
      );
      setIconClass(
        getHexalignmentIconClass(
          getHexknights().find((knight) => knight.name === knightName)
            .hexalignment
        )
      );
      console.log('Hexalignment Class: ' + iconClass);
    }
  }, [isLoaded]);

  const getIcon = (hexalignment) => {
    switch (hexalignment) {
      case 'Judgement':
        return faFire;
      case 'Mercy':
        return faMoon;
      case 'Progress':
        return faFlask;
      case 'Expedition':
        return faEye;
      case 'Resilience':
        return faShieldAlt;
      default:
        return faBurn;
    }
  };

  // TODO: Add an icon beside hexalignment that corresponds with one of six values.

  return (
    <Page>
      <div id='hexknight-page-container'>
        <h1 className='page-title'>{hexknight.name}</h1>
        <div id='alignment-container'>
          <FontAwesomeIcon size='2x' icon={getIcon(hexknight.hexalignment)} />
          <h1 className='header mr-2 ml-2'>{hexknight.hexalignment}</h1>
          <FontAwesomeIcon size='2x' icon={getIcon(hexknight.hexalignment)} />
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
