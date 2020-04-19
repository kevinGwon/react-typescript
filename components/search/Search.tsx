import React from 'react';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';

// Modules
import Pagination from '../common/Pagination';
import SearchForm from './SearchForm';
import SearchList from './SearchList';

function Search({
  query,
  queryList,
  pager,
  pagerArr,
  page,
  runLoading,
  runSubmit,
  runPageChange,
  runPageArrowChange,
}: {
  query: string;
  queryList: any[];
  pager: {
    per: number;
    start: number;
    end: number;
  };
  pagerArr: number[];
  page: {
    current: number;
    totalPage: number;
  };
  runLoading: () => void;
  runSubmit: (e: React.FormEvent) => void;
  runPageChange: (current: number) => void;
  runPageArrowChange: (dir: string) => void;
}) {
  return (
    <StyledLayout>
      {/* Search Form */}
      <SearchForm query={query} runSubmit={runSubmit} />

      {/* Search List */}
      <SearchList queryList={queryList} runLoading={runLoading} />

      {/* Pagination */}
      <Pagination
        arr={pagerArr}
        page={page}
        pager={pager}
        runChange={runPageChange}
        runPageArrowChange={runPageArrowChange}
      />
    </StyledLayout>
  );
}

export default React.memo(Search);
