import glossary from '../common/resources/glossary.json';
import { searchAnyCase } from '.';

export const getTerms = () => glossary.terms;

export const filterTerms = (
  searchString,
  isDescriptionSearch,
  isMultiSearch = false
) => {
  const searchArray = searchString.split(' ').filter((el) => el);

  return getTerms().filter((term) => {
    return (
      !searchString ||
      searchString === '' ||
      searchAnyCase(searchString, term.name) ||
      (isDescriptionSearch && searchAnyCase(searchString, term.description)) ||
      (isMultiSearch &&
        searchArray.some((el) => searchAnyCase(el, term.description)))
    );
  });
};
