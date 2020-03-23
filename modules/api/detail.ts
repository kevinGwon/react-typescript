import { ExtendType } from '../../types/modules/extend';
import { LIST_STATE } from '../../redux/reducers/list';
import { API_CONFIG } from './api.config';
import extend from '../extend';
import axios from 'axios';

const opt: ExtendType = extend(API_CONFIG, {
  year: LIST_STATE.year,
  month: LIST_STATE.month,
  day: LIST_STATE.day,
});

export const GET_URL = id => {
  return `https://api.themoviedb.org/3/movie/${id}?api_key=${opt.key}&language=${opt.lang}$video=true`;
};

export const GET_DETAIL = async id => {
  return await axios({
    method: 'get',
    url: GET_URL(id),
  });
};

export const GET_CAST = async id => {
  const getUrl = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${opt.key}&language=${opt.lang}&page=1`;

  return await axios({
    method: 'get',
    url: getUrl,
  });
};

export const GET_SIMILAR = async id => {
  let getUrl = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${opt.key}&language=${opt.lang}&page=1`;

  return await axios({
    method: 'get',
    url: getUrl,
  });
};

export const API_DEDAILT_FILTER = API => {
  let _API: any = {};
  console.log(API);
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
