import Head from 'next/head';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

// Components
import MainListContainer from '../containers/main/MainListContainer';
import MainSectionBox from '../components/main/MainSectionBox';
import Article from '../components/Article';
import MainSection from '../components/main/MainSection';
import LoginContainer from '../containers/LoginContainer';

// Modules
import {
  API_FILTER,
  GET_ACTION,
  GET_THRILLER,
  GET_CRIME,
  GET_WAR,
  GET_HORROR,
  GET_ROMANCE,
  GET_ANIMATION,
} from '../modules/api/list';
import ScrollMotion from '../modules/scroll-motion';

// Types
import { IndexType } from '../types';
import Main from '../components/Main';

const scrollMotion = new ScrollMotion();

const Index = ({ API }: IndexType) => {
  const { isLogin } = useSelector(store => store.user);

  useEffect(() => {
    isLogin && scrollMotion.init();
    return () => {
      setTimeout(() => {
        isLogin && scrollMotion.destroy();
      }, 0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLogin]);

  return (
    <>
      <Head>
        <title>Themovie | Home</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 리스트</h2>
        <MainSectionBox API={API} />
      </Article>
      {!isLogin && <LoginContainer />}
    </>
  );
};

Index.getInitialProps = async context => {
  let API = null;
  try {
    const data = await axios.all([
      GET_ACTION,
      GET_THRILLER,
      GET_CRIME,
      GET_WAR,
      GET_HORROR,
      GET_ROMANCE,
      GET_ANIMATION,
    ]);
    API = {
      action: data[0].data.results,
      thriller: data[1].data.results,
      crime: data[2].data.results,
      war: data[3].data.results,
      horror: data[4].data.results,
      romance: data[5].data.results,
      animation: data[6].data.results,
    };
  } catch (error) {
    console.log(error);
  }
  return {
    API: API_FILTER(API),
  };
};

export default Index;
