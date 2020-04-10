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
import { USER_KEEP_LOGIN_SAGA } from '../redux/reducers/user';

const App = ({ Component, pageProps, store }) => {
  const dispatch = store.dispatch;
  useEffect(() => {
    const token = localStorage.getItem('token');
    token && dispatch({ type: USER_KEEP_LOGIN_SAGA });
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
