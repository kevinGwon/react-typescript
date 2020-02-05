import { createStandardAction, ActionType } from 'typesafe-actions';
import { put, delay, takeLatest } from 'redux-saga/effects';

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

const date = new Date();
let year: string | number, month: string | number, day: string | number;

year = date.getFullYear();

month =
  String(date.getMonth() + 1).length === 1
    ? '0' + (date.getMonth() + 1)
    : date.getMonth() + 1;
day =
  String(date.getDate()).length === 1
    ? '0' + date.getDate()
    : date.getDate() + 1;

// Saga
function* runTestSaga() {
  yield delay(500);
  yield put({
    type: LIST_RESET,
  });
}

export function* testSaga() {
  yield takeLatest(ACTION, runTestSaga);
}

const actions = {
  actionList,
  thrillerList,
  crimeList,
  warList,
  horrorList,
  romanceList,
  animationList,
  searchList,
  loadingList,
  allReset,
  listReset,
  listSort,
};

export type ListAction = ActionType<typeof actions>;

type CategoryDefaultType = {
  type?: string;
  code?: number;
  search?: string;
  category: string;
  isLoading: boolean;
  list: string[];
};

type InitState = {
  year: string | number;
  month: string | number;
  day: string | number;
  sort: boolean;
  genres: {
    [key: string]: CategoryDefaultType;
  };
};

const initState: InitState = {
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

const list = (
  state: InitState = initState,
  action: CategoryDefaultType,
): InitState => {
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
    case SEARCH_LIST:
      return {
        ...state,
        genres: {
          ...state.genres,
          search: {
            ...state.genres.search,
            list: [...state.genres.search.list, action.search],
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
    case LIST_RESET:
      console.log(`Reset ${action.category}`);
      return {
        ...state,
        genres: {
          ...state.genres,
          [action.category]: {
            ...state.genres[action.category],
            isLoading: false,
            list: [],
          },
        },
      };
    case LIST_SORT:
      return {
        ...state,
        sort: !state.sort,
      };
    case ALL_RESET:
      return {
        ...state,
        genres: {
          ...state.genres,
        },
      };
    default:
      return state;
  }
};

export default list;
