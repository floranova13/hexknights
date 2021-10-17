import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import BlightsourceSubcategoryCard from '../components/BlightsourceSubcategoryCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faTint,
  faWind,
  faLeaf,
  faViruses,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import { getBlightsourceCategories } from '../utils/blightsources';

export default function BlightsourceCategoryPage() {
  const { categoryName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [category, setCategory] = useState(getBlightsourceCategories()[0]);

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setCategory(
        getBlightsourceCategories().first((c) => c.category === categoryName)
      );
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (category.category) {
      case 'Blightstones':
        return faGem;
      case 'Blightichors':
        return faTint;
      case 'Blightfumes':
        return faWind;
      case 'Blightflora':
        return faLeaf;
      case 'Blightfungi':
        return faViruses;
      default:
        return faDiceD20;
    }
  };

  return (
    <Page>
      <div id='blightsource-category-page-container'>
        <div className='blightsource-category-title-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='header'>{category.category}</h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={category.description} classes='text' />
        <div id='blightsource-subcategory-container'>
          <h1 className='subheader mb-1'>Subcategories</h1>
          {hexknight.squad.map((subcategory, i) => {
            return (
              <BlightsourceSubcategoryCard
                className='mb-1 subcategory'
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
