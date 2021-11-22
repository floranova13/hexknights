import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import info from '../common/resources/generalInformation.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBalanceScaleLeft,
  faBalanceScaleRight,
} from '@fortawesome/free-solid-svg-icons';

const TeeteringScalesPage = () => {
  const [isLeft, toggleScale] = useState(true);

  const toggleScalePos = () => toggleScale(!isLeft);

  const getScalePos = () => (isLeft ? faBalanceScaleLeft : faBalanceScaleRight);

  useEffect(() => {
    const scaleInterval = setInterval(toggleScalePos, 500);

    return () => clearInterval(scaleInterval);
  });

  return (
    <Page>
      <div className='page-container'>
        <div id='faction-name-container' className='mb-4'>
          <FontAwesomeIcon
            className='scales-icon'
            size='2x'
            icon={getScalePos()}
          />
          <h1 className='page-title inline mr-2 ml-2'>Teetering Scales</h1>
          <FontAwesomeIcon
            className='scales-icon'
            size='2x'
            icon={getScalePos()}
          />
        </div>
        <Text
          paragraphs={[
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque minus fugiat laborum reprehenderit iusto, hic quam recusandae est. Molestiae ipsa sit facilis, nisi excepturi autem?',
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi perspiciatis eius quod labore consequuntur aliquid! Temporibus eius nemo fugiat odio quisquam. Iure incidunt asperiores ea quae officiis odio, pariatur ad fugit, perferendis corporis repellat cumque tenetur, non eligendi officia similique. Sit expedita quis aut sint delectus et ipsam nostrum cumque!',
          ]}
          classes='text'
        />
      </div>
    </Page>
  );
};

export default TeeteringScalesPage;
