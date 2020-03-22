import { Provider } from 'react-redux';
import { initStore } from '../redux';
import withRedux from 'next-redux-wrapper';

// Components
import HeaderContainer from '../containers/HeaderContainer';
import Footer from '../components/Footer';
import Article from '../components/Article';
import Main from '../components/Main';

// Styled
import StyledReset from '../styled/global/StyledReset.style';
import StyledHelper from '../styled/global/StyledHelper.style';
import StyledForm from '../styled/global/StyledForm.style';

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <HeaderContainer />
        <Main>
          <Article>
            <Component {...pageProps} />
          </Article>
        </Main>
        <Footer />
        <StyledReset />
        <StyledHelper />
        <StyledForm />
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
