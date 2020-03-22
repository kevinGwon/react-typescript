import { Provider } from 'react-redux';
import { initStore } from '../redux';
import withRedux from 'next-redux-wrapper';
import Article from '../components/Article';
import Main from '../components/main/Main';

// Styled
import StyledReset from '../components/styled/global/StyledReset.style';
import StyledHelper from '../components/styled/global/StyledHelper.style';
import StyledForm from '../components/styled/global/StyledForm.style';

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <Main>
          <Article>
            <Component {...pageProps} />
          </Article>
        </Main>
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
