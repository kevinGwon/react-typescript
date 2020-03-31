import * as React from 'react';
import {
  StyledHeader,
  StyledLayoutHeader,
  StyledHeaderForm,
  StyledHeaderSearch,
  StyledHeaderSearchBtn,
  StyledHeaderSearchInput,
  StyledHeaderSearchInputGroup,
  StyledHeaderMenuBtn,
  StyledHeaderUtils,
} from './Header.style';
import HeaderSearchContainer from '../../../containers/HeaderSearchContainer';
import HeaderMenuContainer from '../../../containers/HeaderMenuContainer';

function Header({
  open,
  runOpenMenu,
}: {
  open: boolean;
  runOpenMenu: () => void;
}) {
  return (
    <StyledHeader>
      <StyledLayoutHeader>
        <h1 className="a11y">The movie</h1>
        <StyledHeaderUtils>
          <StyledHeaderMenuBtn
            type="button"
            className={open ? 'is-active' : ''}
            onClick={runOpenMenu}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="a11y">메뉴 열기</span>
          </StyledHeaderMenuBtn>
          {/* <HeaderSearchContainer /> */}
        </StyledHeaderUtils>
        <HeaderMenuContainer />
      </StyledLayoutHeader>
    </StyledHeader>
  );
}

Header.displayName = 'Header';

export default Header;
