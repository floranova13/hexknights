import React from 'react';
import Text from './Text';
import IconItem from '../components/IconItem';
import ItemTable from '../components/ItemTable';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import beasts from '../common/resources/blightbeasts.json';

export default function BlightbeastsTaxonomy() {
  return (
    <div className='blightbeasts-taxonomy-container'>
      <div className='blightbeasts-taxonomy-inner-container'>
        <h1 className='page-title'>Blightbeast Taxonomy</h1>
        <Text
          paragraphs={beasts.information.taxonomy.description}
          classes='text'
        />
        <ItemTable title='Seeds'>
          <IconItem
            pageString='/blightbeasts/taxonomy/Arth'
            label='Arth'
            icon={faGenderless}
          />
          <IconItem
            pageString='/blightbeasts/taxonomy/Botan'
            label='Botan'
            icon={faCircleNotch}
          />
          <IconItem
            pageString='/blightbeasts/taxonomy/Chorth'
            label='Chorth'
            icon={faAdjust}
          />
        </ItemTable>
      </div>
    </div>
  );
}
