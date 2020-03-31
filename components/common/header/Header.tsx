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

function Header({ runOpenMenu }: { runOpenMenu: () => void }) {
  return (
    <StyledHeader>
      <StyledLayoutHeader>
        <h1 className="a11y">The movie</h1>
        <StyledHeaderUtils>
          <StyledHeaderMenuBtn type="button" onClick={runOpenMenu}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <g>
                <rect className="rect-1"></rect>
                <rect className="rect-2"></rect>
                <rect className="rect-3"></rect>
              </g>
            </svg>
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
