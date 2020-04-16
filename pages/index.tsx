import Head from 'next/head';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

// Components
import MainListContainer from '../containers/main/MainListContainer';
import MainSection from '../components/main/MainSection';
import Article from '../components/common/Article';
import Main from '../components/common/Main';

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

// Action
import { USER_LOGIN } from '../redux/reducers/user';

// Types
import { IndexType } from '../types';
import { RootState } from '../types/redux/reducer';

const scrollMotion = new ScrollMotion();

const Index = ({ API }: IndexType) => {
  const { intro, menu } = useSelector((store: RootState) => store.common);

  useEffect(() => {
    intro && !menu ? scrollMotion.init() : scrollMotion.destroy();
  }, [intro, menu]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        scrollMotion.destroy();
      }, 500);
    };
  }, []);

  useEffect(() => {
    const $footer = document.querySelector('footer');
    $footer.classList.add('is-fixed');

    return () => {
      setTimeout(() => {
        $footer.classList.remove('is-fixed');
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
        <MainSection API={API} />
      </Article>
    </>
  );
};

Index.getInitialProps = async ctx => {
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
