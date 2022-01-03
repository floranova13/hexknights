/* eslint-disable react/prop-types */
import { IconName1 } from 'react-icons/ai'; //Ant Design Icons
import { IconName2 } from 'react-icons/bs'; //Bootstrap Icons
import { IconName3 } from 'react-icons/bi'; //Boxicons
import { IconName4 } from 'react-icons/di'; //Devicon Icons
import { IconName5 } from 'react-icons/fi'; //Feather
import { IconName6 } from 'react-icons/fc'; //Flat Color Icons
import { IconName7 } from 'react-icons/fa'; //Font Awesome Icons
import { IconName8 } from 'react-icons/gi'; //Game Icons
import { IconName9 } from 'react-icons/go'; //Github Octicons Icons
import { IconName10 } from 'react-icons/gr'; //Grommet-Icons
import { IconName11 } from 'react-icons/hi'; //HeroIcons
import { IconName12 } from 'react-icons/im'; //IcoMoon Free
import { IconName13 } from 'react-icons/io'; //Ionicon4
import { IconName14 } from 'react-icons/io5'; //Ionicon5
import { IconName15 } from 'react-icons/md'; //Material Design Icons
import { IconName16 } from 'react-icons/ri'; //Remix Icons
import { IconName17 } from 'react-icons/si'; //Simple Icons
import { IconName18 } from 'react-icons/ti'; //Typicons
import { IconName19 } from 'react-icons/vsc'; //VS Code Icons
import { IconName20 } from 'react-icons/wi'; //Weather Icons
import { IconName21 } from 'react-icons/cg'; //css.gg
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import '../css/variables.css';

const StyledIcon = styled.svg`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const GetIcon = (iconName) => {
  switch (iconName) {
    case 'home':
      return false;
    case 'shroud':
      return false;
    case 'blight':
      return false;
    case 'shroud-channeler':
      return false;
    case 'shroud-paragon':
      return false;
    case 'shroud-hexknight':
      return false;
    case 'shroud-knight':
      return false;
    case 'hexalignment-sacrifice':
      return false;
    case 'hexalignment-progress':
      return false;
    case 'hexalignment-judgement':
      return false;
    case 'hexalignment-expedition':
      return false;
    case 'hexalignment-mercy':
      return false;
    case 'hexalignment-resilience':
      return false;
    case 'festerfont':
      return false;
    case 'festerfont-classes-clarion':
      return false;
    case 'festerfont-classes-umbra':
      return false;
    case 'festerfont-classes-nihil':
      return false;
    case 'festerfont-saturations-placid':
      return false;
    case 'festerfont-saturations-rippling':
      return false;
    case 'festerfont-saturations-violent':
      return false;
    case 'festerfont-configurations-generic':
      return false;
    case 'festerfont-configurations-command':
      return false;
    case 'festerfont-configurations-waypoint':
      return false;
    case 'festerfont-configurations-infection':
      return false;
    case 'festerfont-configurations-invasion':
      return false;
    case 'festerfont-configurations-failsafe':
      return false;
    case 'festerfont-biomes-forest':
      return false;
    case 'festerfont-biomes-grassland':
      return false;
    case 'festerfont-biomes-desert':
      return false;
    case 'festerfont-biomes-tundra':
      return false;
    case 'festerfont-biomes-freshwater':
      return false;
    case 'festerfont-biomes-marine':
      return false;
    case 'blightbeast':
      return false;
    case 'blightbeast-threat':
      return false;
    case 'threat-tier-shallow':
      return false;
    case 'threat-tier-sunken':
      return false;
    case 'threat-tier-abyssal':
      return false;
    case 'threat-rank-minor':
      return false;
    case 'threat-rank-major':
      return false;
    case 'threat-rank-superior':
      return false;
    case 'threat-tier-unfathomable':
      return false;
    case 'blightbeast-taxonomy':
      return false;
    case 'blightbeast-seed-arth':
      return false;
    case 'blightbeast-seed-botan':
      return false;
    case 'blightbeast-seed-chorth':
      return false;
    case 'blightbeast-root-titarche':
      return false;
    case 'blightbeast-root-medimite':
      return false;
    case 'blightbeast-root-fellchital':
      return false;
    case 'blightbeast-root-marole':
      return false;
    case 'blightbeast-root-coreplet':
      return false;
    case 'blightbeast-root-felldrasil':
      return false;
    case 'blightbeast-root-piscel':
      return false;
    case 'blightbeast-root-elfirmant':
      return false;
    case 'blightbeast-root-fellmal':
      return false;
    case 'blightsource':
      return false;
    case 'blightsource-blightstones':
      return false;
    case 'blightsource-blightichors':
      return false;
    case 'blightsource-blightfumes':
      return false;
    case 'blightsource-blightflora':
      return false;
    case 'blightsource-blightfungi':
      return false;
    case 'blightsource-blightanomalies':
      return false;
    case 'blightsource-blightstones-blightfoils':
      return false;
    case 'blightsource-blightstones-crystali':
      return false;
    case 'blightsource-blightstones-lylodes':
      return false;
    case 'blightsource-blightichors-lifeblight':
      return false;
    case 'blightsource-blightichors-blightvenoms':
      return false;
    case 'blightsource-blightichors-blightmares':
      return false;
    case 'blightsource-blightfumes-rushblight':
      return false;
    case 'blightsource-blightfumes-miasmeta':
      return false;
    case 'blightsource-blightfumes-blightmists':
      return false;
    case 'blightsource-blightflora-blightblooms':
      return false;
    case 'blightsource-blightflora-blightpillars':
      return false;
    case 'blightsource-blightflora-blightsnarls':
      return false;
    case 'blightsource-blightfungi-blightshrooms':
      return false;
    case 'blightsource-blightfungi-blightbleeds':
      return false;
    case 'blightsource-blightfungi-sporesprawls':
      return false;
    case 'blightsource-blightanomalies-tokens':
      return false;
    case 'blightsource-blightanomalies-loci':
      return false;
    case 'blightsource-blightanomalies-vestiges':
      return false;
    case 'blightsource-rarity-common':
      return false;
    case 'blightsource-rarity-uncommon':
      return false;
    case 'blightsource-rarity-rare':
      return false;
    case 'book':
      return false;
    case 'info':
      return false;
    case 'glossary':
      return false;
    default:
      return true;
  }
};

const Icon = ({ iconLabel, routerPath = '' }) => {
  let history = useNavigate();

  const handleClick = () => {
    if (routerPath) history(routerPath);
  };

  const ChosenIcon = GetIcon(iconLabel);

  return <ChosenIcon className='' onClick={() => handleClick()} />;
};

export default Icon;
