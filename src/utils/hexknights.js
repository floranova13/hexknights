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
