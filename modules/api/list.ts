import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import {
  // CATEGORY
  ACTION,
  THRILLER,
  CRIME,
  WAR,
  HORROR,
  ROMANCE,
  ANIMATION,
  SEARCH,
  LOADING_LIST,
} from '../../redux/reducers/list';

// Modules
import extend from '../extend';
import { API_CONFIG } from './api.config';
import { LIST_STATE } from '../../redux/reducers/list';

// types
import { ExtendType } from '../../types/modules/extend';

// Options
const { genres } = LIST_STATE;
const opt: ExtendType = extend(API_CONFIG, {
  year: LIST_STATE.year,
  month: LIST_STATE.month,
  day: LIST_STATE.day,
});

// Modules
export const GET_URL = payload => {
  return `https://api.themoviedb.org/3/discover/movie?api_key=${payload.key}&language=${payload.lang}&release_date.gte=${payload.year}-${payload.month}-${payload.day}&with_genres=${payload.code}&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;
};

// GET API
export const GET_ACTION = axios({
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
export const GET_THRILLER = axios({
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
export const GET_CRIME = axios({
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
export const GET_WAR = axios({
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
export const GET_HORROR = axios({
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
export const GET_ROMANCE = axios({
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
export const GET_ANIMATION = axios({
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
export const API_LIST = ({ dispatch, category, data }) => {
  const opt: ExtendType = extend(API_CONFIG, {
    year: LIST_STATE.year,
    month: LIST_STATE.month,
    day: LIST_STATE.day,
    category: category,
  });

  for (let i = 0; i < data.length; i++) {
    switch (opt.category.toUpperCase()) {
      case ACTION:
      case THRILLER:
      case CRIME:
      case WAR:
      case HORROR:
      case ROMANCE:
      case ANIMATION:
      case SEARCH:
        data[i] !== null &&
          dispatch({
            type: `list/${opt.category.toUpperCase()}_LIST`,
            category: opt.category,
            [opt.category]: {
              category: opt.category,
              title: data[i].title,
              id: data[i].id,
              genre: data[i].genre_ids,
              average: data[i].vote_average,
              overview: data[i].overview,
              posterImage: `${opt.basePostImageUrl}${data[i].poster_path}`,
              bgImage: `${opt.baseBgImageUrl}${data[i].backdrop_path}`,
              date: data[i].release_date,
            },
          });
        break;
      default:
        console.log('지정된 리스트가 없습니다.');
    }
    if (i === data.length - 1) {
      dispatch({
        type: LOADING_LIST,
        category: opt.category,
        isLoading: true,
      });
    }
  }
};
