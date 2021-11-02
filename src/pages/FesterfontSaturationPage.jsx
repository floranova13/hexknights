import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import Text from '../components/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem, faTint, faWind } from '@fortawesome/free-solid-svg-icons';
import {
  getFesterfontSaturations,
  getFesterfontSaturation,
} from '../utils/festerfonts';

export default function FesterfontSaturationPage() {
  const { saturationName } = useParams();
  const [isLoaded, setIsLoaded] = useState(false);
  const [saturation, setSaturation] = useState(getFesterfontSaturations()[0]);

  useEffect(() => {
    setIsLoaded(true);
  });

  useEffect(() => {
    if (isLoaded) {
      setSaturation(getFesterfontSaturation(saturationName));
    }
  }, [isLoaded]);

  const getIcon = () => {
    switch (saturationName) {
      case 'Placid':
        return faGem;
      case 'Rippling':
        return faTint;
      default:
        return faWind;
    }
  };

  return (
    <Page>
      <div className='festerfont-saturation-page-container'>
        <div className='festerfont-saturation-page-name-container'>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
          <h1 className='page-title festerfont-saturation-name'>
            {saturation.name}
          </h1>
          <FontAwesomeIcon size='2x' icon={getIcon()} />
        </div>
        <Text paragraphs={saturation.description} classes='text' />
        <div>
          <h1 className='header'>Blightsource Distribution</h1>
          <div className='festerfont-saturation-blightsources'>
            {saturation.blightsources.map((blightsource, i) => {
              return (
                <h1
                  key={i}
                  className='subheader festerfont-saturation-blightsource'
                >
                  {blightsource}
                </h1>
              );
            })}
          </div>
        </div>
        <div>
          <h1 className='header'>Configurations</h1>
          <div className='festerfont-saturation-configurations'>
            {saturation.blightsources.map((configuration, i) => {
              return (
                <h1
                  key={i}
                  className='subheader festerfont-saturation-configuration'
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
