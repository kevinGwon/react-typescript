import React from 'react';
import {
  StyledHeaderSearch,
  StyledHeaderForm,
  StyledHeaderSearchInputGroup,
  StyledHeaderSearchInput,
  StyledHeaderSearchBtn,
} from './Header.style';
import DimLayer from '../DimLayer';
import IconSearch from '../../svg/IconSearch';

function HeaderSearch({
  searchActive,
  runSubmit,
  runSearchActive,
  runCloseSearch,
  runCloseBlock,
}: {
  searchActive: boolean;
  runSubmit: (e: React.FormEvent) => void;
  runSearchActive: () => void;
  runCloseSearch: () => void;
  runCloseBlock: (e: React.MouseEvent) => void;
}) {
  return (
    <StyledHeaderSearch>
      <StyledHeaderForm onSubmit={runSubmit}>
        <StyledHeaderSearchInputGroup>
          {searchActive && (
            <DimLayer callback={runCloseSearch}>
              <label htmlFor="search" className="a11y">
                search
              </label>
              <div className="DimLayer-inner" onClick={runCloseBlock}>
                <StyledHeaderSearchInput
                  id="search"
                  placeholder="검색어를 입력하세요"
                />
                <IconSearch />
              </div>
            </DimLayer>
          )}
          <StyledHeaderSearchBtn type="button" onClick={runSearchActive}>
            <IconSearch />
            <span className="a11y">검색열기</span>
          </StyledHeaderSearchBtn>
        </StyledHeaderSearchInputGroup>
      </StyledHeaderForm>
    </StyledHeaderSearch>
  );
}

export default HeaderSearch;
