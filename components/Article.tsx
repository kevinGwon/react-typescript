import * as React from 'react';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';

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
