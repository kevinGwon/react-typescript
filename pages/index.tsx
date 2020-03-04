import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

// Components
import List from '../components/List';

// Modules
import {
  API_LIST,
  GET_ACTION,
  GET_THRILLER,
  GET_CRIME,
  GET_WAR,
  GET_HORROR,
  GET_ROMANCE,
  GET_ANIMATION,
} from '../modules/api/list';
import extend from '../modules/extend';
import { API_CONFIG } from '../modules/api/api.config';

// Redux
import { LIST_STATE } from '../redux/reducers/list';

// Types
import { IndexType } from '../types';
import { ExtendType } from '../types/modules/extend';
import { RootState } from '../types/redux/reducer';
import { CategoryType } from '../types/redux/list';

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
  let genres = null;
  const data = await Promise.all([
    GET_ACTION,
    GET_THRILLER,
    GET_CRIME,
    GET_WAR,
    GET_HORROR,
    GET_ROMANCE,
    GET_ANIMATION,
  ]).then(res => {
    genres = res;
  });
  if (genres === null) {
    return null;
  }
  return {
    API: {
      action: genres[0].data.results,
      thriller: genres[1].data.results,
      crime: genres[2].data.results,
      war: genres[3].data.results,
      horror: genres[4].data.results,
      romance: genres[5].data.results,
      animation: genres[6].data.results,
    },
  };
};

export default Index;
