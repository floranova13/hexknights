import React, { useState, useEffect } from 'react';
import Page from '../components/Page';
import Hexalignment from '../components/Hexalignment';
import { getHexknights } from '../utils/hexknights';

export default function HexknightsPage() {
  const [judgementKnights, setJudgementKnights] = useState([]);
  const [mercyKnights, setMercyKnights] = useState([]);
  const [progressKnights, setProgressKnights] = useState([]);
  const [explorationKnights, setExplorationKnights] = useState([]);
  const [resilienceKnights, setResilienceKnights] = useState([]);
  const [sacrificeKnights, setSacrificeKnights] = useState([]);

  useEffect(() => {
    setJudgementKnights(getHexknights('Judgement'));
    setMercyKnights(getHexknights('Mercy'));
    setProgressKnights(getHexknights('Progress'));
    setExplorationKnights(getHexknights('Expedition'));
    setResilienceKnights(getHexknights('Resilience'));
    setSacrificeKnights(getHexknights('Sacrifice'));
  }, []);

  console.log(getHexknights());
  return (
    <Page>
      <h1 className='page-title'>Hexknights</h1>
      <Hexalignment hexalignment='Judgement' hexknights={judgementKnights} />
      <Hexalignment hexalignment='Mercy' hexknights={mercyKnights} />
      <Hexalignment hexalignment='Progress' hexknights={progressKnights} />
      <Hexalignment
        hexalignment={'Exploration'}
        hexknights={explorationKnights}
      />
      <Hexalignment
        hexalignment={'Resilience'}
        hexknights={resilienceKnights}
      />
      <Hexalignment hexalignment={'Sacrifice'} hexknights={sacrificeKnights} />
    </Page>
  );
}
