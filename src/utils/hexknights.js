import hexknights from '../common/resources/hexknights.json';

export const getHexknights = (hexalignment = '') =>
  hexknights.hexknights.filter(
    (knight) => !hexalignment || knight.hexalignment === hexalignment
  );
