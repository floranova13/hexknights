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
