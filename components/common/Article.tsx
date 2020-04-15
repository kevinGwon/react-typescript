import React from 'react';

// Components
import HeaderContainer from '../../containers/header/HeaderContainer';
import Footer from './Footer';

// Styled
import { StyledArticle } from './Article.style';

function Article({
  children,
  page,
}: {
  children: React.ReactNode;
  page?: string;
}) {
  return (
    <>
      <StyledArticle page={page}>{children}</StyledArticle>
    </>
  );
}

export default Article;
