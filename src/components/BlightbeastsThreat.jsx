import React, { useState } from 'react';
import Text from './Text';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import '../css/variables.css';
import beasts from '../common/resources/blightbeasts.json';

const ThreatButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 2em;
  margin-bottom: 1em;
`;

const TierButton = styled.button`
  font-weight: 900;
  font-size: 0.5em;
  margin: 0.35rem;
  height: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--primary-darkest);
  color: var(--primary-lighter);
  height: 2.25em;
  width: 8em;
  border: 0.5rem solid var(--primary-darker);
  border-radius: 6px;
  text-decoration: none;
  transition: color 0.25s;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const ThreatTable = styled.table`
  border-collapse: collapse;
  width: 38em;
  text-align: center;
  margin: 0 auto;
`;

const Row = styled.tr`
  font-weight: 600;
`;

// const TD = styled.td``;

const ThreatButton = styled.div`
  font-weight: 400;
  background-color: var(--primary-darkest);
  color: var(--primary-lighter);
  /* border: 0.5rem solid var(--primary-darker); */
  width: 9em;
  border-radius: 12px;
  margin: 0 auto;
  transition: color 0.25s, background-color 0.25s;

  &:hover {
    cursor: pointer;
    color: white;
    background-color: black;
  }
`;

export default function BlightbeastsThreat() {
  const [tier, setTier] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);
  let history = useNavigate();

  const handleClick = (threat) => {
    history(`/blightbeasts/threat/${threat.threat}`);
  };

  return (
    <div className='blightbeasts-threat-container'>
      <div className='blightbeasts-threat-inner-container'>
        <h1 className='page-title'>Blightbeast Threat Judgements</h1>
        <Text
          paragraphs={beasts.information.threat.description}
          classes='text'
        />
        <h1 className='header'>Threat Tiers</h1>
        <ThreatButtonContainer>
          <TierButton onClick={() => setTier(0)}>
            {beasts.information.threat.tiers[0].name}
          </TierButton>
          <TierButton onClick={() => setTier(1)}>
            {beasts.information.threat.tiers[1].name}
          </TierButton>
          <TierButton onClick={() => setTier(2)}>
            {beasts.information.threat.tiers[2].name}
          </TierButton>
          {isRevealed && (
            <TierButton onClick={() => setTier(3)}>
              {beasts.information.threat.tiers[3]}
            </TierButton>
          )}
        </ThreatButtonContainer>
        <ThreatTable>
          <thead>
            <tr>
              <th className='subheader' colSpan='3'>
                {beasts.information.threat.tiers[tier].name}
              </th>
            </tr>
          </thead>
          <tbody>
            <Row>
              <td className='text-center'>
                <ThreatButton>
                  {beasts.information.threat.tiers[tier].threats[0].threat}
                </ThreatButton>
              </td>
              <td className='text-center'>
                <ThreatButton>
                  {beasts.information.threat.tiers[tier].threats[1].threat}
                </ThreatButton>
              </td>
              <td className='text-center'>
                <ThreatButton>
                  {beasts.information.threat.tiers[tier].threats[2].threat}
                </ThreatButton>
              </td>
            </Row>
          </tbody>
        </ThreatTable>
        {/* <div className='blightbeasts-threat-tiers-container'>
          <div className='blightbeasts-threat-tier-container'>
            <h1 className='subheader'>
              {beasts.information.threat.tiers[0].name}
            </h1>
            <div className='blightbeasts-threat-tier-threats-container'>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[0].threats[0].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[0].threats[1].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[0].threats[2].threat}
              </h1>
            </div>
          </div>
          <div className='blightbeasts-threat-tier-container'>
            <h1 className='subheader'>
              {beasts.information.threat.tiers[1].name}
            </h1>
            <div className='blightbeasts-threat-tier-threats-container'>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[1].threats[0].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[1].threats[1].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[1].threats[2].threat}
              </h1>
            </div>
          </div>
          <div className='blightbeasts-threat-tier-container'>
            <h1 className='subheader'>
              {beasts.information.threat.tiers[2].name}
            </h1>
            <div className='blightbeasts-threat-tier-threats-container'>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[2].threats[0].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[2].threats[1].threat}
              </h1>
              <h1 className='text-center'>
                {beasts.information.threat.tiers[2].threats[2].threat}
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
