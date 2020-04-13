import React from 'react';
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
  StyledHeaderLogo,
} from './Header.style';
import HeaderSearchContainer from '../../../containers/HeaderSearchContainer';
import HeaderMenuContainer from '../../../containers/HeaderMenuContainer';
import Logo from '../../svg/Logo';
import Link from 'next/link';

function Header({
  runOpenMenu,
  runGoHome,
}: {
  runOpenMenu: () => void;
  runGoHome: () => void;
}) {
  return (
    <StyledHeader>
      <StyledLayoutHeader>
        <h1 className="a11y">The movie</h1>
        <StyledHeaderLogo>
          <Link href="/">
            <a onClick={runGoHome}>
              <Logo />
            </a>
          </Link>
        </StyledHeaderLogo>
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

export default React.memo(Header);
