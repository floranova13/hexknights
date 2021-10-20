import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import font from '../common/resources/festerfonts.json';
import blight from '../common/resources/blight.json';

export default function FesterfontsGeneral() {
  return (
    <div id='festerfonts-general-container'>
      <div id='festerfonts-general-page-container'>
        <h1 className='page-title'>Festerfonts</h1>
        <Text paragraphs={blight.festerfontsIntro} classes='text' />
        <Text paragraphs={font.information.description} classes='text' />
      </div>
    </div>
  );
}
