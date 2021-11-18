import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Hexalignment from '../components/Hexalignment';
import { getHexknights } from '../utils/hexknights';

export default function HexknightsPage() {
  const [judgementKnights, setJudgementKnights] = useState([]);
  const [mercyKnights, setMercyKnights] = useState([]);
  const [progressKnights, setProgressKnights] = useState([]);
  const [expeditionKnights, setExpeditionKnights] = useState([]);
  const [resilienceKnights, setResilienceKnights] = useState([]);
  const [sacrificeKnights, setSacrificeKnights] = useState([]);
  const [judgementExpanded, setJudgementToggle] = useState(false);
  const [mercyExpanded, setMercyToggle] = useState(false);
  const [progressExpanded, setProgressToggle] = useState(false);
  const [expeditionExpanded, setExpeditionToggle] = useState(false);
  const [resilienceExpanded, setResilienceToggle] = useState(false);
  const [sacrificeExpanded, setSacrificeToggle] = useState(false);
  const [chapter, setChapter] = useState(1);

  useEffect(() => {
    setJudgementKnights(getHexknights('Judgement'));
    setMercyKnights(getHexknights('Mercy'));
    setProgressKnights(getHexknights('Progress'));
    setExpeditionKnights(getHexknights('Expedition'));
    setResilienceKnights(getHexknights('Resilience'));
    setSacrificeKnights(getHexknights('Sacrifice'));
  }, []);

  return (
    <Page>
      <div className='page-container'>
        <h1 className='page-title'>Hexknights</h1>
        <Hexalignment
          hexalignment='Judgement'
          hexknights={judgementKnights}
          expanded={judgementExpanded}
          toggleExpansion={setJudgementToggle}
        />
        <Hexalignment
          hexalignment='Mercy'
          hexknights={mercyKnights}
          expanded={mercyExpanded}
          toggleExpansion={setMercyToggle}
        />
        <Hexalignment
          hexalignment='Progress'
          hexknights={progressKnights}
          expanded={progressExpanded}
          toggleExpansion={setProgressToggle}
        />
        <Hexalignment
          hexalignment={'Expedition'}
          hexknights={expeditionKnights}
          expanded={expeditionExpanded}
          toggleExpansion={setExpeditionToggle}
        />
        <Hexalignment
          hexalignment={'Resilience'}
          hexknights={resilienceKnights}
          expanded={resilienceExpanded}
          toggleExpansion={setResilienceToggle}
        />
        <Hexalignment
          hexalignment={'Sacrifice'}
          hexknights={sacrificeKnights}
          expanded={sacrificeExpanded}
          toggleExpansion={setSacrificeToggle}
        />
      </div>
    </Page>
  );
}
