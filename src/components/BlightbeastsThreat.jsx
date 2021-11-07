import React from 'react';
import Text from './Text';
import beasts from '../common/resources/blightbeasts.json';

export default function BlightbeastsThreat() {
  return (
    <div className='blightbeasts-threat-container'>
      <div className='blightbeasts-threat-inner-container'>
        <h1 className='page-title'>Blightbeast Threat Judgements</h1>
        <Text
          paragraphs={beasts.information.threat.description}
          classes='text'
        />
        <h1 className='header'>Threat Tiers</h1>
        <div className='blightbeasts-threat-tiers-container'>
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
        </div>
      </div>
    </div>
  );
}
