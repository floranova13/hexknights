import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import FesterfontClassCard from './FesterfontClassCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGem,
  faTint,
  faWind,
  faLeaf,
  faViruses,
  faDiceD20,
} from '@fortawesome/free-solid-svg-icons';
import font from '../common/resources/festerfonts.json';
import { getFesterfontClasses } from '../utils/festerfonts';

export default function FesterfontsClasses() {
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
    <div id='festerfonts-classes-container'>
      <h1 className='page-title'>Classifications</h1>
      <div className='subcategory-category-container'>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
        <h1 id='subcategory-category-title' className='header'>
          {subcategory.category}
        </h1>
        <FontAwesomeIcon size='2x' icon={getIcon()} />
      </div>
      <Text paragraphs={font.class.description} classes='text' />
      <h1 className='header mb-1'>Classes</h1>
      <div className='festerfonts-classes-inner-container'>
        <FesterfontClassCard
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
        />
      </div>
    </div>
  );
}
