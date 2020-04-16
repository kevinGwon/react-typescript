import React from 'react';
import Link from 'next/link';

// Components
import HeaderMenuDimlayer from './HeaderMenuDimlayer';

// Modules
import { API_CONFIG } from '../../../modules/api/api.config';

// Styled
import {
  StyledHeaderMenu,
  StyledHeaderLogoutBtn,
  StyledHeaderMenuLayout,
  StyledHeaderUser,
  StyledHeaderFavorite,
} from './HeaderMenu.style';
import { StyledBtn } from '../Btn.style';
import { StyledHeaderMenuBtn } from './Header.style';

function HeaderMenu({
  account,
  session,
  login,
  menu,
  name,
  favorite,
  runRemoveFavorite,
  runMenuClose,
  runLogin,
  runLogout,
}: {
  account: number;
  session: string;
  login: boolean;
  menu: boolean;
  name: string;
  favorite: any[];
  runRemoveFavorite: (
    account: number,
    session: string,
    id: number,
    active: boolean,
  ) => void;
  runMenuClose: () => void;
  runLogin: () => void;
  runLogout: () => void;
}) {
  return (
    <>
      {menu && <HeaderMenuDimlayer />}
      <StyledHeaderMenu className={menu ? 'is-active' : ''}>
        <StyledHeaderMenuLayout>
          {login && (
            <StyledHeaderUser>{`${name}님 반갑습니다.`}</StyledHeaderUser>
          )}
          <StyledHeaderLogoutBtn
            type="button"
            block
            invert
            onClick={() => {
              login ? runLogout() : runLogin();
            }}
          >
            {login ? '로그아웃' : '로그인'}
          </StyledHeaderLogoutBtn>
          <StyledHeaderFavorite>
            {favorite.length ? (
              favorite.map((item, i) => (
                <li key={item.id}>
                  <img
                    src={`${API_CONFIG.baseBgImageUrl}${item.poster_path}`}
                    alt=""
                  />
                  <div className="info">
                    <Link href={`/detail?id=${item.id}`}>
                      <a onClick={runMenuClose}>바로가기</a>
                    </Link>
                    <button
                      type="button"
                      onClick={() => {
                        runRemoveFavorite(account, session, item.id, false);
                      }}
                    >
                      제거
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <li className="empty">Favorite 목록이 없습니다.</li>
            )}
          </StyledHeaderFavorite>
        </StyledHeaderMenuLayout>
      </StyledHeaderMenu>
    </>
  );
}

export default React.memo(HeaderMenu);
