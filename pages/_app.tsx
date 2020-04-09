import { Provider } from 'react-redux';
import { initStore } from '../redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/common/Footer';
import Article from '../components/common/Article';
import Main from '../components/common/Main';
import LoginContainer from '../containers/LoginContainer';

// Styled
import StyledGlobal from '../styled/global/StyledGlobal';
import Loading from '../components/common/Loading';
import { RootState } from '../types/redux/reducer';
import { useEffect } from 'react';

const App = ({ Component, pageProps, store }) => {
  useEffect(() => {
    localStorage.clear();
    sessionStorage.clear();
  }, []);
  return (
    <>
      <Provider store={store}>
        <StyledGlobal />
        <HeaderContainer />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <Loading />
        <LoginContainer />
      </Provider>
    </>
  );
};

App.getInitialProps = async ({ Component, ctx }) => {
  return {
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default withRedux(initStore)(App);
