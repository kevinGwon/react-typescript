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
  pageType,
  search,
  searchActive,
  setSearchActive,
  runSubmit,
  runSearchActive,
  runCloseSearch,
  runCloseBlock,
}: {
  pageType: null | string;
  search: string;
  searchActive: boolean;
  setSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  runSubmit: (
    e: React.FormEvent,
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
  ) => any;
  runSearchActive: (
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
    searchActive: boolean,
  ) => any;
  runCloseSearch: (
    setSearchActive: React.Dispatch<React.SetStateAction<boolean>>,
  ) => any;
  runCloseBlock: (e: React.MouseEvent) => any;
}) {
  return (
    <StyledHeaderSearch>
      <StyledHeaderForm onSubmit={e => runSubmit(e, setSearchActive)}>
        <StyledHeaderSearchInputGroup>
          {searchActive && (
            <DimLayer callback={() => runCloseSearch(setSearchActive)}>
              <label htmlFor="search" className="a11y">
                search
              </label>
              <div className="DimLayer-inner" onClick={e => runCloseBlock(e)}>
                <SearchUI id="search" placeholder="검색어를 입력하세요" />
              </div>
            </DimLayer>
          )}
          {!search.length && (
            <StyledHeaderSearchBtn
              type="button"
              onClick={() => runSearchActive(setSearchActive, searchActive)}
            >
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
