import * as React from 'react';
// Components
import HeaderContainer from '../containers/HeaderContainer';
import FooterContainer from '../containers/FooterContainer';

function Layout({ children }) {
  return (
    <>
      <HeaderContainer />
      <main id="main">
        <article className="movie-article">{children}</article>
      </main>
      <FooterContainer />
    </>
  );
}

export default Layout;
