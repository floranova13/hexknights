import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import { getHexknights, getEncryptionClass } from '../utils/hexknights';

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
      <h1 className='description mb-1'>{hexknight.description}</h1>
      {/* <div id='hexknight-page-container'>
        <h1 className='subheader hexknight-card-content'>{`Squad: ${hexknight.squadName}`}</h1>
      </div> */}
      <div id='hexknight-squad-container'>
        <h1 className='subheader hexknight-card-content'>{`Squad: ${hexknight.squadName}`}</h1>
      </div>
    </Page>
  );
};

export default HexknightPage;
