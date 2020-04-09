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

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <StyledGlobal />
        <HeaderContainer />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <LoginContainer />
        <Loading />
        {/* PersistGate는 persisted된 상태가 Redux에 저장될때 까지 렌더링을 지연시킴으로서 SSR에 영향을 준다. */}
        <PersistGate loading={null} persistor={store.__persistor} />
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
