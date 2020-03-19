import Head from 'next/head';
import Link from 'next/link';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';

// Components
import ListContainer from '../containers/ListContainer';
import Loading from '../components/Loading';

// Hoc
import ScrollMotion from '../modules/scroll-motion';

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
import extend from '../modules/extend';
import { API_CONFIG } from '../modules/api/api.config';

// Redux
import { LIST_STATE } from '../redux/reducers/list';
import { LOADING_ON, LOADING_ON_SAGA } from '../redux/reducers/common';

// Types
import { IndexType } from '../types';
import { ExtendType } from '../types/modules/extend';
import { RootState } from '../types/redux/reducer';
import { CategoryType } from '../types/redux/list';
import { CommonType } from '../types/redux/common';

const scrollMotion = new ScrollMotion();

const Index = ({ API }: IndexType) => {
  useEffect(() => {
    scrollMotion.init();
    return () => {
      setTimeout(() => {
        scrollMotion.destroy();
      }, 0);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <Head>
        <title>Themovie | Home</title>
      </Head>
      {Object.keys(API).map(category => {
        if (category !== 'search')
          return <ListContainer key={category} data={API[category]} />;
      })}
    </>
  );
};

Index.getInitialProps = async context => {
  let API = null;
  const data = await Promise.all([
    GET_ACTION,
    GET_THRILLER,
    GET_CRIME,
    GET_WAR,
    GET_HORROR,
    GET_ROMANCE,
    GET_ANIMATION,
  ])
    .then(res => {
      API = {
        action: res[0].data.results,
        thriller: res[1].data.results,
        crime: res[2].data.results,
        war: res[3].data.results,
        horror: res[4].data.results,
        romance: res[5].data.results,
        animation: res[6].data.results,
      };
    })
    .catch(error => {
      console.log(error);
    });
  return {
    API: API_FILTER(API),
  };
};

export default Index;
