import React from 'react';
import Text from './Text';
import IconItem from './IconItem';
import ItemTable from './ItemTable';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';

export default function KnownFesterfonts() {
  return (
    <div id='known-festerfonts-container'>
      <h1 className='page-title'>Discovered Festerfonts</h1>
      <Text
        paragraphs={font.information.knownFesterfontsDescription}
        classes='text'
      />
      <h1 className='header mb-1'>Festerfonts</h1>
      <Text paragraphs={font.information.filterDescription} classes='text' />
      <ItemTable>
        {font.festerfonts.map((f, i) => {
          return (
            <IconItem
              key={i}
              pageString={`/festerfonts/${f.name}`}
              label={f.name}
              icon={faGem}
            />
          );
        })}
      </ItemTable>
    </div>
  );
}
