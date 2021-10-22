export const encryptParagraph = (s) => {
  const splits = s.split('_');

  return splits.map((str) => {
    const split = str.split('-');

    if (split.length === 3 && split[0] === 'introduced') {
      return { encrypt: true, introduced: parseInt(split[1]), text: split[2] };
    }

    return { encrypt: false, text: str };
  });
};
