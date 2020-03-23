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
export const API_FILTER = API => {
  const opt: ExtendType = extend(API_CONFIG, {
    year: LIST_STATE.year,
    month: LIST_STATE.month,
    day: LIST_STATE.day,
  });
  const _API: any = {
    action: [],
    thriller: [],
    crime: [],
    war: [],
    horror: [],
    romance: [],
    animation: [],
  };
  Object.keys(API).map(category => {
    for (let i = 0; i < API[category].length; i++) {
      _API[category] = _API[category].concat([
        {
          category: category,
          title: API[category][i].title,
          id: API[category][i].id,
          genre: API[category][i].genre_ids,
          average: API[category][i].vote_average,
          overview: API[category][i].overview,
          posterImage: `${opt.basePostImageUrl}${API[category][i].poster_path}`,
          bgImage: `${opt.baseBgImageUrl}${API[category][i].backdrop_path}`,
          date: API[category][i].release_date,
        },
      ]);
    }
  });
  return _API;
};
