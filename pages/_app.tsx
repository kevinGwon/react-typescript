import { Provider } from 'react-redux';
import { initStore } from '../redux';
import { PersistGate } from 'redux-persist/integration/react';
import withRedux from 'next-redux-wrapper';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';
import Article from '../components/Article';
import Main from '../components/Main';

// Styled
import StyledReset from '../styled/global/StyledReset.style';
import StyledHelper from '../styled/global/StyledHelper.style';
import Loading from '../components/Loading';

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={store.__persistor}>
          <HeaderContainer />
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
          <Loading />
          <StyledReset />
          <StyledHelper />
        </PersistGate>
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
