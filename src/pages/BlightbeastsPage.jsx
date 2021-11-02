import React, { useState } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import FesterfontsTabs from '../components/FesterfontsTabs';
import FesterfontsGeneral from '../components/FesterfontsGeneral';
import FesterfontsClasses from '../components/FesterfontsClasses';
import FesterfontsSaturations from '../components/FesterfontsSaturations';
import FesterfontsBiomes from '../components/FesterfontsBiomes';
import KnownFesterfonts from '../components/KnownFesterfonts';

export default function BlightbeastsPage() {
  const { activeTab } = useParams();
  const [tab, setTab] = useState(activeTab || 'General');

  return (
    <Page>
      <h1 className='page-title'>Festerfonts</h1>
      <FesterfontsTabs tab={tab} setTab={setTab} />
      <div>
        {tab === 'General' && <FesterfontsGeneral />}
        {tab === 'Classes' && <FesterfontsClasses />}
        {tab === 'Saturations' && <FesterfontsSaturations />}
        {tab === 'Biomes' && <FesterfontsBiomes />}
        {tab === 'Festerfonts' && <KnownFesterfonts />}
      </div>
    </Page>
  );
}
