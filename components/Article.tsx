import * as React from 'react';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';

// Styled
import { StyledArticle } from './main/MainSection.style';

function Article({ children }) {
  return (
    <>
      <StyledArticle>
        <h2 className="a11y">영화정보 리스트</h2>
        {children}
      </StyledArticle>
    </>
  );
}

export default Article;
