import fonts from '../common/resources/festerfonts.json';

export const getFesterfontClasses = () => {
  return fonts.information.class.classifications;
};

export const getFesterfontClass = (className) => {
  return getFesterfontClasses().find((c) => c.name === className);
};

export const getFesterfontSaturations = () => {
  return fonts.information.saturation.saturations;
};

export const getFesterfontSaturation = (saturationName) => {
  return getFesterfontSaturations().find((s) => s.name === saturationName);
};

export const getFesterfontConfigurations = () => {
  return fonts.information.configuration.configurations;
};

export const getFesterfontConfiguration = (configurationName) => {
  return getFesterfontConfigurations().find(
    (c) => c.name === configurationName
  );
};

export const getFesterfontBiomes = () => {
  return fonts.information.biome.biomes;
};

export const getFesterfontBiome = (biomeName) => {
  return getFesterfontBiomes().find((c) => c.name === biomeName);
};

export const getFesterfonts = (
  className = '',
  saturation = '',
  biome = '',
  configuration = '',
  region = '',
  introduced = 0
) => {
  const fontArray = fonts.festerfonts;

  return fontArray.filter(
    (f) =>
      (!className || f.class === className) &&
      (!saturation || f.saturation === saturation) &&
      (!biome || f.biome === biome) &&
      (!configuration || f.configuration === configuration) &&
      (!category || f.category === region) &&
      (!region || f.region === subcategory) &&
      (!introduced || f.introduced <= introduced)
  );
};
