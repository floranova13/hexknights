import React from 'react';
import Page from '../components/Page';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import info from '../common/resources/generalInformation.json';

const ChannelerPage = () => {
  return (
    <Page>
      <div className='page-container'>
        <h1 className='page-title'>Channeler</h1>
        <div id='channeler-name-container' className='mb-4'>
          <FontAwesomeIcon size='2x' icon={faMoon} />
          <h1 className='header inline mr-2 ml-2'>
            {info.religion.channeler.name}
          </h1>
          <FontAwesomeIcon size='2x' icon={faMoon} />
        </div>
        <h1 className='description mb-4'>
          {info.religion.channeler.description}
        </h1>
      </div>
    </Page>
  );
};

export default ChannelerPage;
