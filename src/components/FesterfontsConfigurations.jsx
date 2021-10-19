import React from 'react';
import Text from './Text';
import FesterfontConfigurationCard from './FesterfontConfigurationCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsConfigurations() {
  return (
    <div id='festerfonts-configurations-container'>
      <h1 className='page-title'>Festerfont Configurations</h1>
      <Text paragraphs={font.configuration.description} classes='text' />
      <h1 className='header mb-1'>Configurations</h1>
      <div className='festerfonts-configurations-inner-container'>
        <FesterfontConfigurationCard
          key='Generic'
          className='mb-1'
          festerfontConfiguration='Generic'
        />
        <FesterfontConfigurationCard
          key='Command'
          className='mb-1'
          festerfontConfiguration='Command'
        />
        <FesterfontConfigurationCard
          key='Waypoint'
          className='mb-1'
          festerfontConfiguration='Waypoint'
        />
        <FesterfontConfigurationCard
          key='Infection'
          className='mb-1'
          festerfontConfiguration='Infection'
        />
        <FesterfontConfigurationCard
          key='Invasion'
          className='mb-1'
          festerfontConfiguration='Invasion'
        />
        <FesterfontConfigurationCard
          key='Failsafe'
          className='mb-1'
          festerfontConfiguration='Failsafe'
        />
      </div>
    </div>
  );
}
