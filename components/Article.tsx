import * as React from 'react';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';

// Styled
import { StyledArticle } from './main/MainSection.style';

function Article({ children }) {
  return (
    <>
      <StyledArticle>{children}</StyledArticle>
    </>
  );
}

export default Article;
