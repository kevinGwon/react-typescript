import React from 'react';
import {
  StyledHeaderMenu,
  StyledHeaderLogoutBtn,
  StyledHeaderMenuLayout,
  StyledHeaderUser,
  StyledHeaderFavorite,
} from './HeaderMenu.style';
import { StyledHeaderMenuBtn } from './Header.style';
import HeaderMenuDimlayer from './HeaderMenuDimlayer';
import { API_CONFIG } from '../../../modules/api/api.config';
import Link from 'next/link';

function HeaderMenu({
  login,
  menu,
  name,
  favorite,
  runMenuClose,
  runLogin,
  runLogout,
}: {
  login: boolean;
  menu: boolean;
  name: string;
  favorite: any[];
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
                  <Link href="/detail/[id]" as={`/detail/${item.id}`}>
                    <a onClick={runMenuClose}>
                      <img
                        src={`${API_CONFIG.baseBgImageUrl}${item.poster_path}`}
                        alt=""
                      />
                      <strong>{item.title}</strong>
                    </a>
                  </Link>
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
