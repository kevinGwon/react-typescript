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

function HeaderMenu({
  menu,
  name,
  favorite,
}: {
  menu: boolean;
  name: string;
  favorite: any[];
}) {
  return (
    <>
      {menu && <HeaderMenuDimlayer />}
      <StyledHeaderMenu className={menu ? 'is-active' : ''}>
        <StyledHeaderMenuLayout>
          <StyledHeaderUser>{name}님 반갑습니다.</StyledHeaderUser>
          <StyledHeaderLogoutBtn type="button" block invert>
            로그아웃
          </StyledHeaderLogoutBtn>
          <StyledHeaderFavorite>
            {favorite.length ? (
              favorite.map((item, i) => `<li key={${i}}>${i}</li>`)
            ) : (
              <li className="empty">Favorite 목록이 없습니다.</li>
            )}
          </StyledHeaderFavorite>
        </StyledHeaderMenuLayout>
      </StyledHeaderMenu>
    </>
  );
}

export default HeaderMenu;
