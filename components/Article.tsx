import * as React from 'react';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

// Styled
import {
  StyledMovieSectionBox,
  StyleArticle,
} from '../styled/components/StyledMain';

function Article({ children }) {
  return (
    <>
      <HeaderContainer />
      <StyleArticle>
        <h1 className="a11y">영화정보 리스트</h1>
        <StyledMovieSectionBox>{children}</StyledMovieSectionBox>
      </StyleArticle>
      <FooterContainer />
    </>
  );
}

export default Article;
