import React from 'react';

// Components
import SearchUI from '../common/SearchUI';

// Styled
import { StyledSearchForm } from './Search.style';

function SearchForm({
  query,
  runSubmit,
}: {
  query: string;
  runSubmit: (e: React.FormEvent) => void;
}) {
  return (
    <StyledSearchForm onSubmit={e => runSubmit(e)}>
      <SearchUI
        id="search-sub"
        placeholder="검색어를 입력하세요"
        query={query}
      />
    </StyledSearchForm>
  );
}

export default React.memo(SearchForm);
