import React from 'react';
import Page from '../components/Page';
import Text from '../components/Text';
import Image from '../components/Image';
import { Link } from 'react-router-dom';
import shroud from '../common/resources/shroud.json';

const ShroudPage = () => {
  return (
    <Page>
      <div className='page-container shroud-page-container'>
        <h1 className='page-title'>Shroud</h1>
        <Text paragraphs={shroud.general.shroudDescription} classes='text' />
        <h1 className='header-left'>The Channeler</h1>
        <div className='shroud-page-icon-container channeler-icon-container'>
          <Image icon='Channeler' />
        </div>
        <Text paragraphs={shroud.general.channelerIntro} classes='text' />
        <Link className='shroud-button text' to='/channeler'>
          Channeler
        </Link>
        <h1 className='header-left'>The Paragons</h1>
        <div className='shroud-page-icon-container paragon-icon-container'>
          {[...Array(6)].map((e, i) => (
            <Image key={`paragon ${i}`} icon='Paragon' classes='paragon-icon' />
          ))}
        </div>
        <Text paragraphs={shroud.general.paragonsIntro} classes='text' />
        <Link className='shroud-button text' to='/paragons'>
          Paragons
        </Link>
        <h1 className='header-left'>The Hexknights</h1>
        <div className='shroud-page-icon-container hexknight-icon-container'>
          {[...Array(6)].map((e, i) => (
            <div
              key={`hexknight group ${i}`}
              className='paragon-hexknight-icon-container'
            >
              <div className='paragon-hexknight-inner-icon-container'>
                <Image key={`hexknight group ${i}-1`} icon='Hexknight' />
                <Image key={`hexknight group ${i}-2`} icon='Hexknight' />
                <Image key={`hexknight group ${i}-3`} icon='Hexknight' />
              </div>
              <div className='paragon-hexknight-inner-icon-container'>
                <Image key={`hexknight group ${i}-4`} icon='Hexknight' />
                <Image key={`hexknight group ${i}-5`} icon='Hexknight' />
                <Image key={`hexknight group ${i}-6`} icon='Hexknight' />
              </div>
            </div>
          ))}
        </div>
        <Text paragraphs={shroud.general.hexknightsIntro} classes='text' />
        <Link className='shroud-button text' to='/hexknights'>
          Hexknights
        </Link>
        <h1 className='header-left'>The Knights</h1>
        <Text paragraphs={shroud.general.knightsIntro} classes='text' />
        <div className='shroud-page-icon-container knight-icon-container'>
          {[...Array(72)].map((e, i) => (
            <Image key={`paragon ${i}`} icon='Knight' classes='knight-icon' />
          ))}
        </div>
        <div className='shroud-page-icon-container knight-icon-container'>
          {[...Array(72)].map((e, i) => (
            <Image key={`paragon ${i}`} icon='Knight' classes='knight-icon' />
          ))}
        </div>
        <div className='shroud-page-icon-container knight-icon-container'>
          {[...Array(72)].map((e, i) => (
            <Image key={`paragon ${i}`} icon='Knight' classes='knight-icon' />
          ))}
        </div>
      </div>
    </Page>
  );
};

export default ShroudPage;
