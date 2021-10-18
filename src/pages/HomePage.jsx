import React, { useEffect, useState } from 'react';
import Page from '../components/Page';
import HomeTabs from '../components/HomeTabs';
import GeneralInfo from '../components/GeneralInfo';
import ShroudInfo from '../components/ShroudInfo';
import BlightsourcesInfo from '../components/BlightsourcesInfo';

const HomePage = () => {
  const [tab, setTab] = useState('General');
  useEffect(() => {});

  return (
    <Page>
      <HomeTabs tab={tab} setTab={setTab} />
      <div>
        {tab === 'General' && <GeneralInfo />}
        {tab === 'Shroud' && <ShroudInfo />}
        {tab === 'Blightsources' && <BlightsourcesInfo />}
      </div>
    </Page>
  );
};

export default HomePage;
