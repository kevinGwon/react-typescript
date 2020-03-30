import * as React from 'react';
import {
  StyledHeader,
  StyledLayoutHeader,
  StyledHeaderForm,
  StyledHeaderSearch,
  StyledHeaderSearchBtn,
  StyledHeaderSearchInput,
  StyledHeaderSearchInputGroup,
} from './Header.style';
import HeaderSearchContainer from '../../../containers/HeaderSearchContainer';
import HeaderMenuContainer from '../../../containers/HeaderMenuContainer';

function Header() {
  return (
    <StyledHeader>
      <StyledLayoutHeader>
        <h1 className="a11y">The movie</h1>
        <HeaderMenuContainer />
        {/* <HeaderSearchContainer /> */}
      </StyledLayoutHeader>
    </StyledHeader>
  );
}

Header.displayName = 'Header';

export default Header;
