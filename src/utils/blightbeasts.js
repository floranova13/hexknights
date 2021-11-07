import beasts from '../common/resources/blightbeasts.json';

export const getBlightbeastSeeds = () => {
  return beasts.information.taxonomy.seeds;
};

export const getBlightbeastSeed = (seed) => {
  return getBlightbeastSeeds().find((s) => s.name === seed);
};

export const getBlightbeastRoots = (seedName = '') => {
  return getBlightbeastSeeds().reduce((roots, seed) => {
    return !seedName || seed.name === seedName
      ? [...roots, ...seed.roots]
      : roots;
  }, []);
};

export const getBlightbeastRoot = (rootName) => {
  return getBlightbeastRoots().find((root) => root.name === rootName);
};

export const getBlightbeastStems = (seedName = '', rootName = '') => {
  return getBlightbeastSeeds().reduce((stems, seed) => {
    if (seedName && seedName !== seed.name) return stems;

    for (let i = 0; i < seed.roots.length; i++) {
      if (!rootName || seed.roots[i].name === rootName)
        stems.push(seed.roots[i].stems);
    }

    return stems;
  }, []);
};

export const getBlightbeastStem = (stemName) => {
  return getBlightbeastStems().find((stem) => stem.name === stemName);
};
