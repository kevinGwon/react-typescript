import { useEffect } from 'react';
import { Provider } from 'react-redux';
import { initStore } from '../redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';

// Components
import HeaderContainer from '../containers/header/HeaderContainer';
import Footer from '../components/common/Footer';
import Article from '../components/common/Article';
import Main from '../components/common/Main';
import LoginContainer from '../containers/login/LoginContainer';

// Action
import { USER_KEEP_LOGIN_SAGA } from '../redux/reducers/user';

// Styled
import StyledGlobal from '../styled/global/StyledGlobal';
import Loading from '../components/common/Loading';

// Types
import { RootState } from '../types/redux/reducer';
import { SERVER } from '../redux/reducers/common';

const App = ({ Component, pageProps, store, isServer }) => {
  const dispatch = store.dispatch;
  useEffect(() => {
    // Get Token
    const token = localStorage.getItem('token');
    token && dispatch({ type: USER_KEEP_LOGIN_SAGA });
  }, []);
  useEffect(() => {
    // Server Check
    dispatch({ type: SERVER, isServer: isServer });
  }, [isServer]);
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
    isServer: ctx.isServer,
    pageProps: {
      ...(Component.getInitialProps
        ? await Component.getInitialProps(ctx)
        : {}),
    },
  };
};

export default withRedux(initStore)(App);
