import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';

// Components
import ListContainer from '../containers/ListContainer';

// Type
import { RootState } from '../redux/reducers';
import {
  CategoryType,
  ListType,
  LIST_STATE,
  API_LIST,
} from '../redux/reducers/list';
import extend, { ExtendType } from '../modules/extend';
import { API_CONFIG } from '../modules/api/api.config';

interface IndexType {
  API: {
    action: ListType[];
    thriller: ListType[];
    crime: ListType[];
    war: ListType[];
    horror: ListType[];
    romance: ListType[];
    animation: ListType[];
  };
  scrollMotion?: {
    init: () => void;
    destroy: () => void;
  };
}
const Index: NextPage<IndexType> = ({ API, scrollMotion }) => {
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
        <title>Portfolio of KevinGwon | Home</title>
      </Head>
      {Object.keys(genres).map(category => {
        if (category !== 'search') {
          return (
            <ListContainer
              key={genres[category].category}
              {...genres[category]}
            />
          );
        }
      })}
    </>
  );
};

Index.getInitialProps = async ctx => {
  let getUrl = payload => {
    return `https://api.themoviedb.org/3/discover/movie?api_key=${payload.key}&language=${payload.lang}&release_date.gte=${payload.year}-${payload.month}-${payload.day}&with_genres=${payload.code}&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;
  };
  const opt: ExtendType = extend(API_CONFIG, {
    year: LIST_STATE.year,
    month: LIST_STATE.month,
    day: LIST_STATE.day,
  });
  const { genres } = LIST_STATE;
  const action = await axios({
    method: 'get',
    url: getUrl({
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
    url: getUrl({
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
    url: getUrl({
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
    url: getUrl({
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
    url: getUrl({
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
    url: getUrl({
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
    url: getUrl({
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
