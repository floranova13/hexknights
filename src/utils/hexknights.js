import hexknights from '../common/resources/hexknights.json';

export const getHexknights = (hexalignment = '') => {
  const knights = hexknights.hexknights.filter(
    (knight) => !hexalignment || knight.hexalignment === hexalignment
  );

  return knights || [];
};

export const getEncryptionClass = (chapter, requiredChapter) => {
  return chapter >= requiredChapter ? '' : 'encrypted';
};

export const getHexalignmentSpecialty = (hexalignment) => {
  switch (hexalignment) {
    case 'Judgement':
      return 'Knightmares';
    case 'Mercy':
      return 'Temple Guard';
    case 'Progress':
      return 'Breachers';
    case 'Expedition':
      return 'Tendril Cells';
    case 'Resilience':
      return 'Dominion Guard';
    default:
      return 'Bloodblades';
  }
};
