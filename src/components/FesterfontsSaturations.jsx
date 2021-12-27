import React from 'react';
import Text from './Text';
import IconItem from './IconItem';
import ItemTable from './ItemTable';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsSaturations() {
  return (
    <div id='festerfonts-saturations-container'>
      <h1 className='page-title'>Festerfont Accumulation</h1>
      <Text
        paragraphs={font.information.saturation.description}
        classes='text'
      />
      <ItemTable title='Saturation Levels'>
        <IconItem
          pageString='/festerfonts/saturations/Placid'
          label='Placid'
          icon={faGem}
        />
        <IconItem
          pageString='/festerfonts/saturations/Rippling'
          label='Rippling'
          icon={faTint}
        />
        <IconItem
          pageString='/festerfonts/saturations/Violent'
          label='Violent'
          icon={faWind}
        />
      </ItemTable>
    </div>
  );
}
