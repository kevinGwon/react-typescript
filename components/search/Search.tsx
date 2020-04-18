import React from 'react';
import Link from 'next/link';
import { API_CONFIG } from '../../modules/api/api.config';

// Styled
import { StyledLayout } from '../../styled/global/StyledLayout.style';
import { StyledSearchUI } from '../common/SearchUI.style';
import { StyledSearchForm, StyledSearchList } from './Search.style';

// Components
import SearchUI from '../common/SearchUI';
import { ListType } from '../../types/redux/list';

// Modules
import filterImages from '../../modules/filterImages';
import Pagination from '../common/Pagination';

function Search({
  query,
  queryList,
  pager,
  pagerArr,
  page,
  runLoading,
  runSubmit,
  runPageChange,
  runPrev,
  runNext,
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
  runPrev: () => void;
  runNext: () => void;
}) {
  return (
    <StyledLayout>
      {/* Search Form */}
      <StyledSearchForm onSubmit={e => runSubmit(e)}>
        <SearchUI
          id="search-sub"
          placeholder="검색어를 입력하세요"
          query={query}
        />
      </StyledSearchForm>

      {/* Search List */}
      <StyledSearchList>
        {queryList.length ? (
          queryList.map(item => {
            const imageURL = `${API_CONFIG.basePostImageUrl}/${item.poster_path}`;
            return (
              <li key={item.id}>
                <Link href={`/detail?id=${item.id}`}>
                  <a onClick={runLoading}>
                    <img
                      src={
                        filterImages(imageURL)
                          ? imageURL
                          : 'http://placehold.it/500x747?text=Not Found'
                      }
                      alt=""
                    />
                  </a>
                </Link>
              </li>
            );
          })
        ) : (
          <li className="no-item">검색결과가 없습니다.</li>
        )}
      </StyledSearchList>

      {/* Pagination */}
      <Pagination
        arr={pagerArr}
        page={page}
        pager={pager}
        runChange={runPageChange}
        runPrev={runPrev}
        runNext={runNext}
      />
    </StyledLayout>
  );
}

export default React.memo(Search);
