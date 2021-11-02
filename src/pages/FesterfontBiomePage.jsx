import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import BackButton from '../components/BackButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTree,
  faSeedling,
  faWind,
  faIcicles,
  faTint,
  faWater,
} from '@fortawesome/free-solid-svg-icons';
import { getFesterfontBiomes, getFesterfontBiome } from '../utils/festerfonts';

export default function FesterfontBiomePage() {
  const { biomeName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [biome, setBiome] = useState(getFesterfontBiomes()[0]);

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setBiome(getFesterfontBiome(biomeName));
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (biomeName) {
      case 'Forest':
        return faTree;
      case 'Grassland':
        return faSeedling;
      case 'Desert':
        return faWind;
      case 'Tundra':
        return faIcicles;
      case 'Freshwater':
        return faTint;
      default:
        return faWater;
    }
  };

  return (
    <Page>
      <BackButton pageString='/festerfonts/Biomes' />
      <div className='festerfont-biome-page-container'>
        <div className='festerfont-biome-page-name-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='page-title festerfont-biome-name'>{biome.name}</h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={biome.description} classes='text' />
        <div>
          <h1 className='header'>Blightsource Distribution</h1>
          <div className='festerfont-biome-blightsources'>
            {biome.blightsources.map((blightsource, i) => {
              return (
                <h1 key={i} className='subheader festerfont-biome-blightsource'>
                  {blightsource}
                </h1>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='header'>Configurations</h1>
          <div className='festerfont-biome-configurations'>
            {biome.blightsources.map((configuration, i) => {
              return (
                <h1
                  key={i}
                  className='subheader festerfont-biome-configuration'
                >
                  {configuration}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </Page>
  );
}
