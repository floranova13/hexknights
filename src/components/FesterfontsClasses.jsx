import React from 'react';
import Text from '../components/Text';
import FesterfontClassCard from './FesterfontClassCard';
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
      <h1 className='header mb-1'>Classes</h1>
      <div className='festerfonts-classes-inner-container'>
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

        {/* <FesterfontClassCard
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
        /> */}
      </div>
    </div>
  );
}
