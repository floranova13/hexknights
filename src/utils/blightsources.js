import blightsources from '../common/resources/blightsources.json';

export const getRarity = (n) => {
  if (n < 9) {
    return 'Rare';
  } else if (n < 27) {
    return 'Uncommon';
  }
  return 'Common';
};

export const getBlightsourceCategories = () => {
  return blightsources.information;
};

export const getBlightsourceSubategories = (category = '') => {
  if (category) {
    return getBlightsourceCategories().first((c) => c.name === category);
  }

  return getBlightsourceCategories().reduce((arr, c) => {
    arr.push(...c.subcategories);
    return arr;
  }, []);
};

export const getBlightsources = (category = '', subcategory = '') => {
  const blightsources = [];

  for (category in blightsources.blightsources.values()) {
    for (subcategory in category.values()) {
      blightsources.push(...subcategory);
    }
  }

  return blightsources.where(
    (b) =>
      (!category || c.category === category) &&
      (!subcategory || b.subcategory === subcategory)
  );
};
