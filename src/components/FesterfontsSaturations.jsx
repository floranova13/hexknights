import React from 'react';
import Text from './Text';
import FesterfontSaturationCard from './FesterfontSaturationCard';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsSaturations() {
  return (
    <div id='festerfonts-saturations-container'>
      <h1 className='page-title'>Festerfont Accumulation</h1>
      <Text
        paragraphs={font.information.saturation.description}
        classes='text'
      />
      <h1 className='header mb-1'>Saturation Levels</h1>
      <div className='festerfonts-saturations-inner-container'>
        <FesterfontSaturationCard
          key='Placid'
          className='mb-1'
          festerfontBiome='Placid'
        />
        <FesterfontSaturationCard
          key='Rippling'
          className='mb-1'
          festerfontBiome='Rippling'
        />
        <FesterfontSaturationCard
          key='Violent'
          className='mb-1'
          festerfontBiome='Violent'
        />
      </div>
    </div>
  );
}
