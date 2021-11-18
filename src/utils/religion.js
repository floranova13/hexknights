import info from '../common/resources/generalInformation.json';

export const getParagons = () => {
  return info.religion.paragons;
};

export const getParagon = (hexalignment) => {
  return info.religion.paragons.find(
    (paragon) => paragon.hexalignment === hexalignment
  );
};
