import React from 'react';

// Components
import DimLayer from '../DimLayer';

// Svg
import IconSearch from '../../svg/IconSearch';

// Styled
import {
  StyledHeaderSearch,
  StyledHeaderForm,
  StyledHeaderSearchInputGroup,
  StyledHeaderSearchBtn,
} from './Header.style';
import { StyledSearchUI } from '../SearchUI.style';
import SearchUI from '../SearchUI';

function HeaderSearch({
  search,
  searchActive,
  runSubmit,
  runSearchActive,
  runCloseSearch,
  runCloseBlock,
}: {
  search: string;
  searchActive: boolean;
  runSubmit: (e: React.FormEvent) => void;
  runSearchActive: () => void;
  runCloseSearch: () => void;
  runCloseBlock: (e: React.MouseEvent) => void;
}) {
  return (
    <StyledHeaderSearch>
      <StyledHeaderForm onSubmit={e => runSubmit(e)}>
        <StyledHeaderSearchInputGroup>
          {searchActive && (
            <DimLayer callback={runCloseSearch}>
              <label htmlFor="search" className="a11y">
                search
              </label>
              <div className="DimLayer-inner" onClick={runCloseBlock}>
                <SearchUI id="search" placeholder="검색어를 입력하세요" />
              </div>
            </DimLayer>
          )}
          {!search.length && (
            <StyledHeaderSearchBtn type="button" onClick={runSearchActive}>
              <IconSearch />
              <span className="a11y">검색열기</span>
            </StyledHeaderSearchBtn>
          )}
        </StyledHeaderSearchInputGroup>
      </StyledHeaderForm>
    </StyledHeaderSearch>
  );
}

export default HeaderSearch;
