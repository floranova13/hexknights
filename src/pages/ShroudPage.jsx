import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import { Link } from 'react-router-dom';
import blight from '../common/resources/blight.json';

const BlightPage = () => {
  return (
    <Page>
      <div id='hexknight-page-container'>
        <h1 className='page-title'>Blight</h1>
        <Text paragraphs={blight.blightDescription} classes='text' />
        <h1 className='header-left'>Festerfonts</h1>
        <Text paragraphs={blight.festerfontIntro} classes='text' />
        <Link className='blight-button text' to='/festerfonts'>
          Festerfonts
        </Link>
        <h1 className='header-left'>Blightbeasts</h1>
        <Text paragraphs={blight.blightbeastsIntro} classes='text' />
        <Link className='blight-button text' to='/blightbeasts'>
          Blightbeasts
        </Link>
        <h1 className='header-left'>Blightsources</h1>
        <Text paragraphs={blight.blightsourcesIntro} classes='text' />
        <Link className='blight-button text' to='/blightsources'>
          Blightsources
        </Link>
      </div>
    </Page>
  );
};

export default BlightPage;
