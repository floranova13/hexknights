import glossary from '../common/resources/glossary.json';
import { searchAnyCase } from '.';

export const getTerms = () => glossary.terms;

export const filterTerms = (searchString, isDescriptionSearch) => {
  return getTerms().filter((term) => {
    return (
      !searchString ||
      searchString === '' ||
      searchAnyCase(searchString, term.name) ||
      (isDescriptionSearch && searchAnyCase(searchString, term.description))
    );
  });
};
