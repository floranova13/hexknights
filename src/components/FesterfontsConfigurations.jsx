import React from 'react';
import Text from './Text';
import IconItem from './IconItem';
import ItemTable from './ItemTable';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function FesterfontsConfigurations() {
  return (
    <div id='festerfonts-configurations-container'>
      <h1 className='page-title'>Festerfont Configurations</h1>
      <Text
        paragraphs={font.information.configuration.description}
        classes='text'
      />
      <ItemTable title='Configurations'>
        <IconItem
          pageString='/festerfonts/configurations/Generic'
          label='Generic'
          icon={faGem}
        />
        <IconItem
          pageString='/festerfonts/configurations/Command'
          label='Command'
          icon={faTint}
        />
        <IconItem
          pageString='/festerfonts/configurations/Waypoint'
          label='Waypoint'
          icon={faWind}
        />
        <IconItem
          pageString='/festerfonts/configurations/Infection'
          label='Infection'
          icon={faGem}
        />
        <IconItem
          pageString='/festerfonts/configurations/Invasion'
          label='Invasion'
          icon={faTint}
        />
        <IconItem
          pageString='/festerfonts/configurations/Failsafe'
          label='Failsafe'
          icon={faWind}
        />
      </ItemTable>
    </div>
  );
}
