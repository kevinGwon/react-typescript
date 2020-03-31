import Head from 'next/head';
import { useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';

// Components
import MainListContainer from '../containers/main/MainListContainer';
import MainSectionBox from '../components/main/MainSectionBox';
import Article from '../components/common/Article';
import MainSection from '../components/main/MainSection';

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
import Main from '../components/common/Main';
import { USER_LOGIN_ON } from '../redux/reducers/user';
import { RootState } from '../types/redux/reducer';

const scrollMotion = new ScrollMotion();

const Index = ({ API }: IndexType) => {
  const { menu } = useSelector((store: RootState) => store.common);
  const { token } = useSelector((store: RootState) => store.user);

  useEffect(() => {
    token && !menu && scrollMotion.init();
    menu && scrollMotion.destroy();
  }, [token, menu]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        scrollMotion.destroy();
      }, 500);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Themovie | Home</title>
      </Head>
      <Article>
        <h2 className="a11y">영화정보 리스트</h2>
        <MainSectionBox API={API} />
      </Article>
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
