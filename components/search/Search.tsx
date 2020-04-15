import React from 'react';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';
import { StyledSearchUI } from '../common/SearchUI.style';
import { StyledSearchForm, StyledSearchList } from './Search.style';

// Components
import SearchUI from '../common/SearchUI';

function Search({
  search,
  runSubmit,
}: {
  search: string;
  runSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <StyledLayout>
      <StyledSearchForm onSubmit={e => runSubmit(e)}>
        <SearchUI
          id="search-sub"
          placeholder="검색어를 입력하세요"
          search={search}
        />
      </StyledSearchForm>
      <StyledSearchList>
        <li>준비중</li>
      </StyledSearchList>
    </StyledLayout>
  );
}

export default React.memo(Search);
