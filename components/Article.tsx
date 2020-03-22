import * as React from 'react';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

// Styled
import { StyledMainSectionBox, StyleArticle } from './main/MainSection.style';

function Article({ children }) {
  return (
    <>
      <HeaderContainer />
      <StyleArticle>
        <h1 className="a11y">영화정보 리스트</h1>
        <StyledMainSectionBox>{children}</StyledMainSectionBox>
      </StyleArticle>
      <FooterContainer />
    </>
  );
}

export default Article;
