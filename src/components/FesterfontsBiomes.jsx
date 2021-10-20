import React from 'react';
import Text from './Text';
import FesterfontBiomeCard from './FesterfontBiomeCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsBiomes() {
  return (
    <div id='festerfonts-biomes-container'>
      <h1 className='page-title'>Festerfont Biomes</h1>
      <Text paragraphs={font.information.biome.description} classes='text' />
      <h1 className='header mb-1'>Biomes</h1>
      <div className='festerfonts-biomes-inner-container'>
        <FesterfontBiomeCard
          key='Forest'
          className='mb-1'
          festerfontBiome='Forest'
        />
        <FesterfontBiomeCard
          key='Grassland'
          className='mb-1'
          festerfontBiome='Grassland'
        />
        <FesterfontBiomeCard
          key='Desert'
          className='mb-1'
          festerfontBiome='Desert'
        />
        <FesterfontBiomeCard
          key='Tundra'
          className='mb-1'
          festerfontBiome='Tundra'
        />
        <FesterfontBiomeCard
          key='Freshwater'
          className='mb-1'
          festerfontBiome='Freshwater'
        />
        <FesterfontBiomeCard
          key='Marine'
          className='mb-1'
          festerfontBiome='Marine'
        />
      </div>
    </div>
  );
}
