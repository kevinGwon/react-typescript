import React from 'react';

// Styled
import {
  StyledDetailFavoriteWrap,
  StyledDetailFavoriteBtn,
} from './Detail.style';

function DetailFavorite({
  API,
  account,
  session,
  favorite,
  runAddFavorite,
}: {
  API: any;
  account: number;
  session: string;
  favorite: any[];
  runAddFavorite: (
    account: number,
    session: string,
    id: number,
    active: boolean,
  ) => void;
}) {
  const { id } = API;
  return (
    <StyledDetailFavoriteWrap>
      <StyledDetailFavoriteBtn
        onClick={() => {
          if (favorite.length === 20) {
            alert('20개이상 등록할 수 없습니다.');
            return;
          }
          runAddFavorite(account, session, id, true);
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30">
          <path
            strokeWidth="1"
            d="
        M 15 3
        l -2.833 8.718 
        h -9.167
        l 7.416 5.389 -2.833 8.718 7.417 -5.388 7.416 5.388 -2.833 -8.718 7.417 -5.389
        h -9.167
        l -2.833 -8.718
        z
      "
          />
        </svg>
        <span className="a11y">추가</span>
      </StyledDetailFavoriteBtn>
    </StyledDetailFavoriteWrap>
  );
}

export default DetailFavorite;
