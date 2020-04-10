import { ExtendType } from '../../types/modules/extend';
import { LIST_STATE } from '../../redux/reducers/list';
import { API_CONFIG } from './api.config';
import extend from '../extend';
import axios from 'axios';
import { IndexType } from '../../types';

const opt: ExtendType = extend(API_CONFIG, {
  year: LIST_STATE.year,
  month: LIST_STATE.month,
  day: LIST_STATE.day,
});

export const GET_URL = (category: null | string, id: number) => {
  return `https://api.themoviedb.org/3/movie/${id}${
    category ? `/${category}` : ''
  }?api_key=${opt.key}&language=${opt.lang}&page=1`;
};

export const GET_DETAIL = async (id: number) => {
  return await axios({
    method: 'get',
    url: GET_URL(null, id),
  });
};

export const GET_CAST = async (id: number) => {
  return await axios({
    method: 'get',
    url: GET_URL('credits', id),
  });
};

export const GET_SIMILAR = async (id: number) => {
  return await axios({
    method: 'get',
    url: GET_URL('similar', id),
  });
};

export const GET_FAVORITE = async (account_id: number, session_id: number) => {
  let url = `https://api.themoviedb.org/3/account/${account_id}/favorite/movies?api_key=${opt.key}&session_id=${session_id}&language=${opt.lang}&sort_by=created_at.desc`;

  console.log('account_id = ', account_id);
  console.log('session_id = ', session_id);
  console.log('url = ', url);

  return await axios({
    method: 'get',
    url: url,
  });
};
export const POST_FAVORITE = async (
  account_id: number,
  session_id: string,
  id: number,
  active: boolean,
) => {
  let url = `https://api.themoviedb.org/3/account/${account_id}/favorite?api_key=${opt.key}&session_id=${session_id}`;

  return await axios({
    method: 'post',
    url: url,
    data: {
      media_type: 'movie',
      media_id: id,
      favorite: active,
    },
  });
};

export const API_DEDAILT_FILTER = API => {
  let _API = {};
  return (_API = {
    title: API[0].data.title,
    id: API[0].data.id,
    genres: API[0].data.genres,
    average: API[0].data.vote_average,
    overview: API[0].data.overview,
    backdrop_path: `${opt.baseBgImageUrl}${API[0].data.backdrop_path}`,
    posterImage: `${opt.basePostImageUrl}${API[0].data.poster_path}`,
    bgImage: `${opt.baseBgImageUrl}${API[0].data.backdrop_path}`,
    date: API[0].data.release_date,
    cast: API[1].data.cast.slice(0, 10),
    similar: API[2].data.results.slice(0, 10),
  });
};
