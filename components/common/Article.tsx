import React from 'react';

// Components
import HeaderContainer from '../../containers/header/HeaderContainer';
import Footer from './Footer';

// Styled
import { StyledArticle } from './Article.style';

function Article({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledArticle>{children}</StyledArticle>
    </>
  );
}

export default Article;
