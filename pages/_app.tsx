import { Provider } from 'react-redux';
import { initStore } from '../redux';
import withRedux from 'next-redux-wrapper';
import '../scss/style.scss';
import LayoutContainer from '../containers/LayoutContainer';
import withScroll from '../hoc/withScroll';

const App = ({ Component, pageProps, store, scrollMotion }) => {
  return (
    <>
      <Provider store={store}>
        <LayoutContainer>
          <Component {...pageProps} scrollMotion={scrollMotion} />
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

export default withScroll(withRedux(initStore, { debug: true })(App));
