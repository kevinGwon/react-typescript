import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

// Components
import List from '../components/List';

// Modules
import { API_LIST, GET_URL } from '../modules/api/list';
import extend from '../modules/extend';

// Types
import { RootState } from '../redux/reducers';
import { CategoryType, LIST_STATE } from '../redux/reducers/list';
import { API_CONFIG } from '../modules/api/api.config';
import { IndexType } from '../types';
import { ExtendType } from '../types/modules/extend';

const Index = ({ API, scrollMotion }: IndexType) => {
  const { genres }: { genres: CategoryType } = useSelector(
    (store: RootState) => store.list,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    scrollMotion.init();
    Object.keys(API).map(category => {
      !genres[category].isLoading &&
        API_LIST({ dispatch, category, data: API[category] });
    });
    return () => {
      scrollMotion.destroy();
    };
  }, []);

  return (
    <>
      <Head>
        <title>Themovie | Home</title>
      </Head>
      {Object.keys(genres).map(category => {
        if (category !== 'search')
          return <List key={genres[category].category} {...genres[category]} />;
      })}
    </>
  );
};

Index.getInitialProps = async ctx => {
  const opt: ExtendType = extend(API_CONFIG, {
    year: LIST_STATE.year,
    month: LIST_STATE.month,
    day: LIST_STATE.day,
  });
  const { genres } = LIST_STATE;
  const action = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.action.code,
    }),
  });
  const thriller = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.thriller.code,
    }),
  });
  const crime = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.crime.code,
    }),
  });
  const war = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.war.code,
    }),
  });
  const horror = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.horror.code,
    }),
  });
  const romance = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.romance.code,
    }),
  });
  const animation = await axios({
    method: 'get',
    url: GET_URL({
      key: opt.key,
      lang: opt.lang,
      year: opt.year,
      month: opt.month,
      day: opt.day,
      code: genres.animation.code,
    }),
  });
  return {
    API: {
      action: action.data.results,
      thriller: thriller.data.results,
      crime: crime.data.results,
      war: war.data.results,
      horror: horror.data.results,
      romance: romance.data.results,
      animation: animation.data.results,
    },
  };
};

export default Index;
