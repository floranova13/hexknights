import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import IconItem from '../components/IconItem';
import ItemTable from '../components/ItemTable';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import NavButton from '../components/NavButton';
import { useParams } from 'react-router';
import { getBlightbeastStems, getBlightbeastRoot } from '../utils/blightbeasts';

export default function BlightbeastsStemsPage() {
  const { blightbeastSeed, blightbeastRoot } = useParams();

  return (
    <Page>
      <div className='back-button-flex'>
        <NavButton pageString={`/blightbeasts/taxonomy/${blightbeastSeed}`} />
        <NavButton pageString='/blightbeasts' label='Blightbeasts' />
      </div>

      <div className='blightbeasts-stems-container page-container'>
        <div className='blightbeasts-stems-inner-container'>
          <h1 className='page-title'>{blightbeastSeed}</h1>
          <h1 className='header'>{blightbeastRoot}</h1>
          <Text
            paragraphs={getBlightbeastRoot(blightbeastRoot).description}
            classes='text'
          />
          <ItemTable title='Stems'>
            {getBlightbeastStems(blightbeastSeed, blightbeastRoot).map(
              (stem, i) => {
                return (
                  <IconItem
                    key={i}
                    pageString={`/blightbeasts/taxonomy/${blightbeastSeed}/${blightbeastRoot}/${stem.name}`}
                    label={stem.name}
                    icon={faGenderless}
                  />
                );
              }
            )}
          </ItemTable>
        </div>
      </div>
    </Page>
  );
}
