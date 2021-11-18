import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import HomeTabs from '../components/HomeTabs';
import GeneralInfo from '../components/GeneralInfo';
import ShroudInfo from '../components/ShroudInfo';
import BlightInfo from '../components/BlightInfo';
import { getParagons } from '../utils/religion';

const HomePage = () => {
  const [tab, setTab] = useState('General');
  console.log(getParagons());

  return (
    <Page>
      <HomeTabs tab={tab} setTab={setTab} />
      <div className='home-page-container page-container'>
        {tab === 'General' && <GeneralInfo />}
        {tab === 'Shroud' && <ShroudInfo />}
        {tab === 'Blight' && <BlightInfo />}
      </div>
    </Page>
  );
};

export default HomePage;
