import React from 'react';
import Text from '../components/Text';
import font from '../common/resources/festerfonts.json';
import IconItem from '../components/IconItem';
import ItemTable from '../components/ItemTable';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';

export default function FesterfontsClasses() {
  return (
    <div id='festerfonts-classes-container'>
      <h1 className='page-title'>Festerfont Base Classifications</h1>
      <Text paragraphs={font.information.class.description} classes='text' />
      <ItemTable title='Classes'>
        <IconItem
          pageString='/festerfonts/classes/Clarion'
          label='Clarion'
          icon={faGenderless}
        />
        <IconItem
          pageString='/festerfonts/classes/Umbra'
          label='Umbra'
          icon={faCircleNotch}
        />
        <IconItem
          pageString='/festerfonts/classes/Nihil'
          label='Nihil'
          icon={faAdjust}
        />
      </ItemTable>
    </div>
  );
}
