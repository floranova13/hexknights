import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faTint,
  faWind,
  faLeaf,
  faViruses,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { getParagon, getParagons } from '../utils/religion';

export default function BlightsourceSubcategoryPage() {
  const { paragonHexalignment } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [paragon, setParagon] = useState(getParagons()[0]);

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setCategory(getParagon(paragonHexalignment));
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (paragon.hexalignment) {
      case 'Sacrifice':
        return faGem;
      case 'Progress':
        return faTint;
      case 'Judgement':
        return faWind;
      case 'Expedition':
        return faLeaf;
      case 'Mercy':
        return faViruses;
      default:
        return faDiceD20;
    }
  };

  return (
    <Page>
      <div id='blightsource-category-page-container'>
        <div className='category-title-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='page-title'>{category.category}</h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={category.description} classes='text' />
        <h1 className='header mb-1'>Subcategories</h1>
        <div id='blightsource-subcategory-container'>
          {category.subcategories.map((subcategory, i) => {
            return (
              <BlightsourceSubcategoryCard
                className='mb-1'
                key={i}
                subcategory={subcategory}
              />
            );
          })}
        </div>
      </div>
    </Page>
  );
}
