import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGenderless,
  faCircleNotch,
  faAdjust,
} from '@fortawesome/free-solid-svg-icons';
import { getFesterfontClasses, getFesterfontClass } from '../utils/festerfonts';

export default function FesterfontClassPage() {
  const { festerfontClassName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [festerfontClass, setFesterfontClass] = useState(
    getFesterfontClasses()[0]
  );

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setFesterfontClass(getFesterfontClass(festerfontClassName));
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (festerfontClassName) {
      case 'Clarion':
        return faGenderless;
      case 'Umbra':
        return faCircleNotch;
      default:
        return faAdjust;
    }
  };

  return (
    <Page>
      <div className='festerfont-class-page-container'>
        <div className='festerfont-class-page-name-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='page-title festerfont-class-name'>
            {festerfontClass.name}
          </h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={festerfontClass.description} classes='text' />
        <div>
          <h1 className='header'>Blightsource Patterns</h1>
          <div className='festerfont-class-blightsources'>
            {festerfontClass.blightsources.map((blightsource, i) => {
              return (
                <h1 key={i} className='subheader festerfont-class-blightsource'>
                  {blightsource}
                </h1>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='header'>Biome Patterns</h1>
          <div className='festerfont-class-biomes'>
            {festerfontClass.biomes.map((biome, i) => {
              return (
                <h1 key={i} className='subheader festerfont-class-biome'>
                  {biome}
                </h1>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='header'>Blightsource Patterns</h1>
          <div className='festerfont-class-blightsources'>
            {festerfontClass.blightsources.map((blightsource, i) => {
              return (
                <h1 key={i} className='subheader festerfont-class-blightsource'>
                  {blightsource}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
