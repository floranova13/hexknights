import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import BlightsourceCard from '../components/BlightsourceCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faTint,
  faWind,
  faLeaf,
  faViruses,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import {
  getBlightsourceSubcategories,
  getBlightsources,
} from '../utils/blightsources';

export default function FesterfontsGeneral() {
  const { subcategoryName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [subcategory, setSubcategory] = useState(
    getBlightsourceSubcategories()[0]
  );

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setSubcategory(
        getBlightsourceSubcategories().find(
          (s) => s.subcategory === subcategoryName
        )
      );
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (subcategory.category) {
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
      <div id='blightsource-subcategory-page-container'>
        <h1 className='page-title'>{subcategory.subcategory}</h1>
        <div className='subcategory-category-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 id='subcategory-category-title' className='header'>
            {subcategory.category}
          </h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={subcategory.description} classes='text' />
        <h1 className='header mb-1'>Blightsources</h1>
        <div className='blightsources-container'>
          {getBlightsources(subcategory.category, subcategory.subcategory).map(
            (blightsource, i) => {
              return (
                <BlightsourceCard
                  key={i}
                  className='mb-1'
                  blightsource={blightsource}
                />
              );
            }
          )}
        </div>
      </div>
    </Page>
  );
}
