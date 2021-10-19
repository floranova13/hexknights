import React from 'react';
import Text from './Text';
import KnownFesterfontCard from './KnownFesterfontCard';
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
      <div className='known-festerfonts-inner-container'>
        {font.festerfonts.map((f, i) => {
          return (
            <KnownFesterfontCard key={i} className='mb-1' festerfont={f} />
          );
        })}
      </div>
    </div>
  );
}
