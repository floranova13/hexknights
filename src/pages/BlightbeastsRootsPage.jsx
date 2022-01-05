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
import { getBlightbeastRoots, getBlightbeastSeed } from '../utils/blightbeasts';

export default function BlightbeastsRootsPage() {
  const { blightbeastSeed } = useParams();

  return (
    <Page>
      <NavButton pageString='/blightbeasts' />
      <div className='blightbeasts-roots-outer-container page-container'>
        <div className='blightbeasts-roots-inner-container'>
          <h1 className='page-title'>{blightbeastSeed}</h1>
          <Text
            paragraphs={getBlightbeastSeed(blightbeastSeed).description}
            classes='text'
          />
          <ItemTable title='Roots'>
            {getBlightbeastRoots(blightbeastSeed).map((root, i) => {
              return (
                <IconItem
                  key={i}
                  pageString={`/blightbeasts/taxonomy/${blightbeastSeed}/${root.name}`}
                  label={root.name}
                  icon={faGenderless}
                />
              );
            })}
          </ItemTable>
        </div>
      </div>
    </Page>
  );
}
