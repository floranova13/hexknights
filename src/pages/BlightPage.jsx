import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import { Link } from 'react-router-dom';
import blight from '../common/resources/blight.json';

const BlightPage = () => {
  return (
    <Page>
      <div className='blight-page-container page-container'>
        <h1 className='page-title'>Blight</h1>
        <Text paragraphs={blight.blightIntro} classes='text' />
        <Text paragraphs={blight.blightDescription} classes='text' />
        <div className='blight-festerfonts-container blight-section-container'>
          <h1 className='header-left blight-section-title'>Festerfonts</h1>
          <div className='blight-inner-section-container'>
            <div className='blight-subsection-container'>
              <Text paragraphs={blight.festerfontsIntro} classes='text' />
            </div>
            <div className='blight-subsection-right-container'>
              <div className='subsection-image festerfonts-image'></div>
              <Link className='blight-button text' to='/festerfonts'>
                Festerfonts
              </Link>
            </div>
          </div>
        </div>
        <div className='blight-blightbeasts-container blight-section-container'>
          <h1 className='header-left blight-section-title'>Blightbeasts</h1>
          <div className='blight-inner-section-container'>
            <div className='blight-subsection-container'>
              <Text paragraphs={blight.blightbeastsIntro} classes='text' />
            </div>
            <div className='blight-subsection-right-container'>
              <div className='subsection-image blightbeasts-image'></div>
              <Link className='blight-button text' to='/blightbeasts'>
                Blightbeasts
              </Link>
            </div>
          </div>
        </div>
        <div className='blight-blightsources-container blight-section-container'>
          <h1 className='header-left blight-section-title'>Blightsources</h1>
          <div className='blight-inner-section-container'>
            <div className='blight-subsection-container'>
              <Text paragraphs={blight.blightsourcesIntro} classes='text' />
            </div>
            <div className='blight-subsection-right-container'>
              <div className='subsection-image blightsources-image'></div>
              <Link className='blight-button text' to='/blightsources'>
                Blightsources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Page>
  );
};

export default BlightPage;
