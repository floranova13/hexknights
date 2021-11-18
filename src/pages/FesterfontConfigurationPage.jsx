import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import NavButton from '../components/NavButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import {
  getFesterfontConfigurations,
  getFesterfontConfiguration,
} from '../utils/festerfonts';

export default function FesterfontConfigurationPage() {
  const { configurationName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [configuration, setConfiguration] = useState(
    getFesterfontConfigurations()[0]
  );

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setConfiguration(getFesterfontConfiguration(configurationName));
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (configurationName) {
      case 'Generic':
        return faGem;
      case 'Command':
        return faTint;
      case 'Waypoint':
        return faGem;
      case 'Infection':
        return faTint;
      case 'Invasion':
        return faGem;
      default:
        return faWind;
    }
  };

  return (
    <Page>
      <div className='page-container'>
        <div className='back-button-flex'>
          <NavButton pageString='/festerfonts/Configurations' />
          <NavButton pageString='/festerfonts?General' label='Festerfonts' />
        </div>
        <div className='festerfont-configuration-page-container'>
          <div className='festerfont-configuration-page-name-container'>
            <FontAwesomeIcon size='2x' icon={getIcon()} />
            <h1 className='page-title festerfont-configuration-name'>
              {configuration.name}
            </h1>
            <FontAwesomeIcon size='2x' icon={getIcon()} />
          </div>
          <Text paragraphs={configuration.description} classes='text' />
        </div>
      </div>
    </Page>
  );
}
