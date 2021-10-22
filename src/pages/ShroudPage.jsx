import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import { Link } from 'react-router-dom';
import shroud from '../common/resources/shroud.json';

const ShroudPage = () => {
  return (
    <Page>
      <div id='shroud-page-container'>
        <h1 className='page-title'>Shroud</h1>
        <Text paragraphs={shroud.shroudDescription} classes='text' />
        <h1 className='header-left'>The Channeler</h1>
        <Text paragraphs={shroud.channelerIntro} classes='text' />
        <Link className='shroud-button text' to='/channeler'>
          Channeler
        </Link>
        <h1 className='header-left'>The Paragons</h1>
        <Text paragraphs={shroud.paragonsIntro} classes='text' />
        <Link className='shroud-button text' to='/paragons'>
          Paragons
        </Link>
        <h1 className='header-left'>The Hexknights</h1>
        <Text paragraphs={shroud.hexknightsIntro} classes='text' />
        <Link className='shroud-button text' to='/hexknights'>
          Hexknights
        </Link>
      </div>
    </Page>
  );
};

export default ShroudPage;
