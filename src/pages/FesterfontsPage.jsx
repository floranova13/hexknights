import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Page from '../components/Page';
import FesterfontsTabs from '../components/FesterfontsTabs';
import FesterfontsGeneral from '../components/FesterfontsGeneral';
import FesterfontsClasses from '../components/FesterfontsClasses';
import FesterfontsSaturations from '../components/FesterfontsSaturations';
import FesterfontsConfigurations from '../components/FesterfontsConfigurations';
import FesterfontsBiomes from '../components/FesterfontsBiomes';
import KnownFesterfonts from '../components/KnownFesterfonts';

export default function BlightsourcesPage() {
  const { activeTab } = useParams();
  const [tab, setTab] = useState(activeTab || 'General');

  return (
    <Page>
      <FesterfontsTabs tab={tab} setTab={setTab} />
      <div className='page-container'>
        <div>
          {tab === 'General' && <FesterfontsGeneral />}
          {tab === 'Classes' && <FesterfontsClasses />}
          {tab === 'Saturations' && <FesterfontsSaturations />}
          {tab === 'Configurations' && <FesterfontsConfigurations />}
          {tab === 'Biomes' && <FesterfontsBiomes />}
          {tab === 'Festerfonts' && <KnownFesterfonts />}
        </div>
      </div>
    </Page>
  );
}
