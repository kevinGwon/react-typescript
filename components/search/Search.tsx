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

function Search({
  query,
  queryList,
  runLoading,
  runSubmit,
}: {
  query: string;
  queryList: any[];
  runLoading: () => void;
  runSubmit: (e: React.FormEvent) => void;
}) {
  console.log(queryList[0]);
  return (
    <StyledLayout>
      <StyledSearchForm onSubmit={e => runSubmit(e)}>
        <SearchUI
          id="search-sub"
          placeholder="검색어를 입력하세요"
          query={query}
        />
      </StyledSearchForm>
      <StyledSearchList>
        {queryList.length
          ? queryList.map(item => {
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
          : '검색결과가 없습니다.'}
      </StyledSearchList>
    </StyledLayout>
  );
}

export default React.memo(Search);
