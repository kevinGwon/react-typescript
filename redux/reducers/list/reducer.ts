// types
import { CategoryType, ListStateType } from '../../../types/redux/list';

// actions
import {
  ACTION_LIST,
  THRILLER_LIST,
  CRIME_LIST,
  WAR_LIST,
  HORROR_LIST,
  ROMANCE_LIST,
  ANIMATION_LIST,
  SEARCH_LIST,
  LOADING_LIST,
  LIST_RESET,
  LIST_SORT,
  ALL_RESET,
  ACTION,
} from './actions';

const date = new Date();
let year: string | number, month: string | number, day: string | number;

year = date.getFullYear();

month =
  String(date.getMonth() + 1).length === 1
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1;
day =
  String(date.getDate()).length === 1 ? '0' + date.getDate() : date.getDate();

export const LIST_STATE: ListStateType = {
  year: year,
  month: month,
  day: day,
  sort: false,
  genres: {
    action: {
      category: 'action',
      code: 28,
      isLoading: false,
      list: [],
    },
    thriller: {
      category: 'thriller',
      code: 53,
      isLoading: false,
      list: [],
    },
    crime: {
      category: 'crime',
      code: 80,
      isLoading: false,
      list: [],
    },
    war: {
      category: 'war',
      code: 10752,
      isLoading: false,
      list: [],
    },
    horror: {
      category: 'horror',
      code: 27,
      isLoading: false,
      list: [],
    },
    romance: {
      category: 'romance',
      code: 10749,
      isLoading: false,
      list: [],
    },
    animation: {
      category: 'animation',
      code: 16,
      isLoading: false,
      list: [],
    },
    search: {
      category: 'search',
      isLoading: false,
      list: [],
    },
  },
};

const list = (state: ListStateType = LIST_STATE, action): ListStateType => {
  switch (action.type) {
    case ACTION_LIST:
    case THRILLER_LIST:
    case CRIME_LIST:
    case WAR_LIST:
    case HORROR_LIST:
    case ROMANCE_LIST:
    case ANIMATION_LIST:
      return {
        ...state,
        genres: {
          ...state.genres,
          [action.category]: {
            ...state.genres[action.category],
            list: [
              ...state.genres[action.category].list,
              action[action.category],
            ],
          },
        },
      };
    case LOADING_LIST:
      return {
        ...state,
        genres: {
          ...state.genres,
          [action.category]: {
            ...state.genres[action.category],
            isLoading: action.isLoading,
          },
        },
      };
    default:
      return state;
  }
};

export default list;
