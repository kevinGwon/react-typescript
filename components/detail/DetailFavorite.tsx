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
        <span className="text">찜하기</span>
        <svg viewBox="0 0 24 24">
          <g id="favorite">
            <path d="M12,21.4L10.6,20C5.4,15.4,2,12.3,2,8.5C2,5.4,4.4,3,7.5,3c1.7,0,3.4,0.8,4.5,2.1C13.1,3.8,14.8,3,16.5,3C19.6,3,22,5.4,22,8.5c0,3.8-3.4,6.9-8.6,11.5L12,21.4z"></path>
          </g>
        </svg>
      </StyledDetailFavoriteBtn>
    </StyledDetailFavoriteWrap>
  );
}

export default DetailFavorite;
