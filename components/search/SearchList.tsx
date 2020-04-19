import React, { Fragment } from 'react';
import Link from 'next/link';

// Modules
import filterImages from '../../modules/filterImages';
import { API_CONFIG } from '../../modules/api/api.config';

// Styled
import { StyledSearchList } from './Search.style';

// Svg
import IconLogo from '../svg/IconLogo';

function SearchList({
  runLoading,
  queryList,
}: {
  queryList: any[];
  runLoading: () => void;
}) {
  return (
    <StyledSearchList>
      {queryList.length ? (
        queryList.map((item, i) => {
          const imageURL = `${API_CONFIG.basePostImageUrl}/${item.poster_path}`;
          return (
            <Fragment key={item.id}>
              <li>
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
              {i + 1 === 20 && (
                <li className="last-item">
                  <div className="last-item-border">
                    <IconLogo />
                  </div>
                </li>
              )}
            </Fragment>
          );
        })
      ) : (
        <li className="no-item">검색결과가 없습니다.</li>
      )}
    </StyledSearchList>
  );
}

export default SearchList;
