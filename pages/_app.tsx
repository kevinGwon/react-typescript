import { Provider } from 'react-redux';
import { initStore } from '../redux';
import withRedux from 'next-redux-wrapper';
import '../scss/style.scss';
import LayoutContainer from '../containers/LayoutContainer';

const App = ({ Component, pageProps, store }) => {
  return (
    <>
      <Provider store={store}>
        <LayoutContainer>
          <Component {...pageProps} />
        </LayoutContainer>
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

export default withRedux(initStore, { debug: true })(App);
