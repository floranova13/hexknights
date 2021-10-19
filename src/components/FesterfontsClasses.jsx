import React from 'react';
import Text from '../components/Text';
import FesterfontClassCard from './FesterfontClassCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsClasses() {
  return (
    <div id='festerfonts-classes-container'>
      <h1 className='page-title'>Festerfont Base Classifications</h1>
      <Text paragraphs={font.class.description} classes='text' />
      <h1 className='header mb-1'>Classes</h1>
      <div className='festerfonts-classes-inner-container'>
        <FesterfontClassCard
          key='Clarion'
          className='mb-1'
          festerfontClass='Clarion'
        />
        <FesterfontClassCard
          key='Umbra'
          className='mb-1'
          festerfontClass='Umbra'
        />
        <FesterfontClassCard
          key='Nihil'
          className='mb-1'
          festerfontClass='Nihil'
        />
      </div>
    </div>
  );
}
