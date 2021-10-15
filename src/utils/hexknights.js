import hexknights from '../common/resources/hexknights.json';

export const getHexknights = (hexalignment = '') => {
  console.log(hexalignment);

  const knights = hexknights.hexknights.filter(
    (knight) => !hexalignment || knight.hexalignment === hexalignment
  );

  console.log(knights);

  return knights || [];
};

export const getEncryptionClass = (chapter, requiredChapter) => {
  return chapter >= requiredChapter ? '' : 'encrypted';
};

export const getHexalignmentIconClass = (hexalignment) => {
  switch (hexalignment) {
    case 'Judgement':
      return 'fas fa-fire fa-2x';
    case 'Mercy':
      return 'fas fa-moon fa-2x';
    case 'Progress':
      return 'fas fa-flask fa-2x';
    case 'Expedition':
      return 'fas fa-moon fa-2x';
    case 'Resilience':
      return 'fas fa-shield-alt fa-2x';
    default:
      return 'fas fa-burn fa-2x';
  }
};
