import * as React from 'react';
// Components
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

function Article({ children }) {
  return (
    <>
      <HeaderContainer />
      <article className="movie-article">
        <h1 className="a11y">영화정보 리스트</h1>
        <div className="movie-section-box">{children}</div>
      </article>
      <FooterContainer />
    </>
  );
}

export default Article;
