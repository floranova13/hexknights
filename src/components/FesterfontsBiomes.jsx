import React from 'react';
import Text from './Text';
import IconItem from '../components/IconItem';
import ItemTable from '../components/ItemTable';
import {
  faTree,
  faSeedling,
  faWind,
  faIcicles,
  faTint,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsBiomes() {
  return (
    <div id='festerfonts-biomes-container'>
      <h1 className='page-title'>Festerfont Biomes</h1>
      <ItemTable title='Biomes'>
        <IconItem
          pageString='/festerfonts/biomes/Forest'
          label='Forest'
          icon={faTree}
        />
        <IconItem
          pageString='/festerfonts/biomes/Grassland'
          label='Grassland'
          icon={faSeedling}
        />
        <IconItem
          pageString='/festerfonts/biomes/Desert'
          label='Desert'
          icon={faWind}
        />
        <IconItem
          pageString='/festerfonts/biomes/Tundra'
          label='Tundra'
          icon={faIcicles}
        />
        <IconItem
          pageString='/festerfonts/biomes/Freshwater'
          label='Freshwater'
          icon={faTint}
        />
        <IconItem
          pageString='/festerfonts/biomes/Marine'
          label='Marine'
          icon={faWater}
        />
      </ItemTable>
    </div>
  );
}
