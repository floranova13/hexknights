import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';

export default function FesterfontsGeneral() {
  return (
    <Page>
      <div id='festerfonts-general-page-container'>
        <h1 className='page-title'>Festerfonts</h1>
        <Text paragraphs={font.information.description} classes='text' />
      </div>
    </Page>
  );
}
