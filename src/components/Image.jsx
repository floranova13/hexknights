/* eslint-disable react/prop-types */
import React from 'react';
// import ChannelerIcon from '../common/img/crown-3.png';
// import ParagonIcon from '../common/img/bishop-3.png';
// import HexknightIcon from '../common/img/helmet-3.png';
// import KnightIcon from '../common/img/swords-3';
import ChannelerSVG from '../common/img/ChannelerIcon';
import ParagonSVG from '../common/img/ParagonIcon';
import HexknightSVG from '../common/img/HexknightIcon';
import KnightSVG from '../common/img/KnightIcon';

const Image = ({ icon, classes }) => {
  const getIcon = () => {
    switch (icon) {
      case 'Knight':
        return (
          <KnightSVG
            fill={'rgba(137, 123, 175, 1)'}
            className={
              classes ? `${getIconClass()} ${classes}` : getIconClass()
            }
          />
        );
      case 'Hexknight':
        return (
          <HexknightSVG
            fill={'rgba(137, 123, 175, 1)'}
            className={
              classes ? `${getIconClass()} ${classes}` : getIconClass()
            }
          />
        );
      case 'Paragon':
        return (
          <ParagonSVG
            fill={'rgba(137, 123, 175, 1)'}
            className={
              classes ? `${getIconClass()} ${classes}` : getIconClass()
            }
          />
        );
      default:
        return (
          <ChannelerSVG
            fill={'rgba(137, 123, 175, 1)'}
            className={
              classes ? `${getIconClass()} ${classes}` : getIconClass()
            }
          />
        );
    }
  };

  const getIconAlt = () => {
    switch (icon) {
      case 'Knight':
        return 'Crossed Swords Icon';
      case 'Hexknight':
        return 'Knight Helmet Icon';
      case 'Paragon':
        return 'Bishop Icon';
      default:
        return 'Crown Icon';
    }
  };

  const getIconClass = () => {
    switch (icon) {
      case 'Knight':
        return 'icon-xs icon-color';
      case 'Hexknight':
        return 'icon-md icon-color';
      case 'Paragon':
        return 'icon-lg icon-color';
      default:
        return 'icon-xl icon-color';
    }
  };

  return <div>{getIcon()}</div>;

  // return (
  //   <img
  //     className={classes ? `${getIconClass()} ${classes}` : getIconClass()}
  //     src={getIcon()}
  //     alt={getIconAlt()}
  //   />
  // );
};

export default Image;
