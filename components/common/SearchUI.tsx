import React from 'react';

// Styled
import { StyledSearchUI } from './SearchUI.style';
import IconSearch from '../svg/IconSearch';

function SearchUI({
  id,
  placeholder,
  search,
}: {
  id: string;
  placeholder: string;
  search?: string;
}) {
  return (
    <>
      <StyledSearchUI id={id} placeholder={placeholder} defaultValue={search} />
      <IconSearch />
    </>
  );
}

export default SearchUI;
