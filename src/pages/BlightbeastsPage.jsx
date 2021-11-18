import React, { useState } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import BlightbeastsTabs from '../components/BlightbeastsTabs';
import BlightbeastsGeneral from '../components/BlightbeastsGeneral';
import BlightbeastsThreat from '../components/BlightbeastsThreat';
import BlightbeastsTaxonomy from '../components/BlightbeastsTaxonomy';

export default function BlightbeastsPage() {
  const { activeTab } = useParams();
  const [tab, setTab] = useState(activeTab || 'General');

  return (
    <Page className='blightbeasts-page-container'>
      <BlightbeastsTabs tab={tab} setTab={setTab} />
      <div className='page-container'>
        {tab === 'General' && <BlightbeastsGeneral />}
        {tab === 'Threat' && <BlightbeastsThreat />}
        {tab === 'Taxonomy' && <BlightbeastsTaxonomy />}
      </div>
    </Page>
  );
}
