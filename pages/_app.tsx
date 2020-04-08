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
import StyledReset from '../styled/global/StyledReset.style';
import StyledHelper from '../styled/global/StyledHelper.style';
import StyledForm from '../styled/global/StyledForm.style';
import Loading from '../components/common/Loading';
import StyledStateStyle from '../styled/global/StyledState.style';

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <HeaderContainer />
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
        <LoginContainer />
        <Loading />
        <StyledForm />
        <StyledReset />
        <StyledHelper />
        <StyledStateStyle />
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
