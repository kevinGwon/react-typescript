import React from 'react';

// Styled
import { StyledSearchUI } from './SearchUI.style';
import IconSearch from '../svg/IconSearch';

function SearchUI({
  id,
  placeholder,
  query,
}: {
  id: string;
  placeholder: string;
  query?: string;
}) {
  return (
    <>
      <StyledSearchUI id={id} placeholder={placeholder} defaultValue={query} />
      <IconSearch />
    </>
  );
}

export default SearchUI;
