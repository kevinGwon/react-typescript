import React from 'react';
import Link from 'next/link';

// Components
import HeaderSearchContainer from '../../../containers/header/HeaderSearchContainer';
import HeaderMenuContainer from '../../../containers/header/HeaderMenuContainer';

// Icon
import IconLogo from '../../svg/IconLogo';
import IconSearch from '../../svg/IconSearch';
import IconMenu from '../../svg/IconMenu';

// Styled
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
              <IconLogo />
            </a>
          </Link>
        </StyledHeaderLogo>
        <StyledHeaderUtils>
          <HeaderSearchContainer />
          <StyledHeaderMenuBtn type="button" onClick={runOpenMenu}>
            <IconMenu />
            <span className="a11y">메뉴 열기</span>
          </StyledHeaderMenuBtn>
        </StyledHeaderUtils>
        <HeaderMenuContainer />
      </StyledLayoutHeader>
    </StyledHeader>
  );
}

Header.displayName = 'Header';

export default React.memo(Header);
