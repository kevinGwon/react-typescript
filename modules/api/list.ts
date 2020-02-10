import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

import {
  // ACTION
  // loadingList,
  // listError,
  // listErrorClear,

  // CATEGORY
  ACTION,
  THRILLER,
  CRIME,
  WAR,
  HORROR,
  ROMANCE,
  ANIMATION,
  SEARCH,
} from '../../redux/reducers/list';

// Modules
import extend from '../extend';
import { API_CONFIG } from './api.config';
import { LIST_STATE } from '../../redux/reducers/list';
import { ExtendType } from '../extend';

export const API_LIST = async ({ dispatch, data }) => {
  /*
   * The Movie Database API - https://www.themoviedb.org/
   *
   * API Option - https://developers.themoviedb.org/3/getting-started/introduction
   * key - 1e006c1e39b26bfadaa6f757bc1435cf
   */

  const opt: ExtendType = extend(API_CONFIG, {
    year: LIST_STATE.year,
    month: LIST_STATE.month,
    day: LIST_STATE.day,
    category: data.category,
    categoryCode: data.code,
  });

  let getUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${opt.key}&language=${opt.lang}&release_date.gte=${opt.year}-${opt.month}-${opt.day}&with_genres=${opt.categoryCode}&sort_by=popularity.desc&include_adult=true&include_video=true&page=1`;

  try {
    const response = await axios({
      method: 'get',
      url: getUrl,
    });

    for (let i = 0; i < response.data.results.length; i++) {
      switch (opt.category.toUpperCase()) {
        case ACTION:
        case THRILLER:
        case CRIME:
        case WAR:
        case HORROR:
        case ROMANCE:
        case ANIMATION:
        case SEARCH:
          response.data.results[i] !== null &&
            dispatch({
              type: `list/${opt.category.toUpperCase()}_LIST`,
              category: opt.category,
              [opt.category]: {
                category: opt.category,
                title: response.data.results[i].title,
                id: response.data.results[i].id,
                genre: response.data.results[i].genre_ids,
                average: response.data.results[i].vote_average,
                overview: response.data.results[i].overview,
                posterImage: `${opt.basePostImageUrl}${response.data.results[i].poster_path}`,
                bgImage: `${opt.baseBgImageUrl}${response.data.results[i].backdrop_path}`,
                date: response.data.results[i].release_date,
              },
            });
          break;
        default:
          console.log('지정된 리스트가 없습니다.');
      }
    }
  } catch (error) {
    console.log(error);
  }
};
