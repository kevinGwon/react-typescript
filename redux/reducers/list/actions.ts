import { createStandardAction } from 'typesafe-actions';

import extend, { ExtendType } from '../../../modules/extend';
import { API_CONFIG } from '../../../modules/api/api.config';
import { LIST_STATE } from './reducer';

// CATEGORY
export const ACTION = 'ACTION' as const;
export const THRILLER = 'THRILLER' as const;
export const CRIME = 'CRIME' as const;
export const WAR = 'WAR' as const;
export const HORROR = 'HORROR' as const;
export const ROMANCE = 'ROMANCE' as const;
export const ANIMATION = 'ANIMATION' as const;
export const SEARCH = 'SEARCH' as const;

// ACTION
export const ACTION_LIST = 'list/ACTION_LIST' as const;
export const THRILLER_LIST = 'list/THRILLER_LIST' as const;
export const CRIME_LIST = 'list/CRIME_LIST' as const;
export const WAR_LIST = 'list/WAR_LIST' as const;
export const HORROR_LIST = 'list/HORROR_LIST' as const;
export const ROMANCE_LIST = 'list/ROMANCE_LIST' as const;
export const ANIMATION_LIST = 'list/ANIMATION_LIST' as const;
export const SEARCH_LIST = 'list/SEARCH_LIST' as const;
export const LOADING_LIST = 'list/LOADING_LIST' as const;
export const ALL_RESET = 'list/ALL_RESET' as const;
export const LIST_RESET = 'list/LIST_RESET' as const;
export const LIST_SORT = 'list/LIST_SORT' as const;

export const actionList = createStandardAction(ACTION_LIST)();
export const thrillerList = createStandardAction(THRILLER_LIST)();
export const crimeList = createStandardAction(CRIME_LIST)();
export const warList = createStandardAction(WAR_LIST)();
export const horrorList = createStandardAction(HORROR_LIST)();
export const romanceList = createStandardAction(ROMANCE_LIST)();
export const animationList = createStandardAction(ANIMATION_LIST)();
export const searchList = createStandardAction(SEARCH_LIST)();
export const loadingList = createStandardAction(LOADING_LIST)<
  string | boolean
>();

export const allReset = createStandardAction(ALL_RESET)();
export const listReset = createStandardAction(LIST_RESET)();
export const listSort = createStandardAction(LIST_SORT)();

// Modules
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
      setTimeout(() => {
        dispatch({
          type: LOADING_LIST,
          category: opt.category,
          isLoading: true,
        });
      }, 1500);
    }
  }
};
