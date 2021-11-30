import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import NavButton from '../components/NavButton';
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
      setParagon(getParagon(paragonHexalignment));
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
      <div className='page-container'>
        <NavButton pageString='/paragons' />
        <h1 className='page-title'>{paragon.name}</h1>
        <div className='paragon-hexalignment-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='header paragon-hexalignment'>
            {paragon.hexalignment}
          </h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={paragon.description} classes='text' />
      </div>
    </Page>
  );
}
