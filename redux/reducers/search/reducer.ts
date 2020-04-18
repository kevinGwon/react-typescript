import { SearchType } from '../../../types/redux/search';
import {
  SEARCH_QUERY,
  SEARCH_RESET,
  SEARCH_QUERY_LIST,
  SEARCH_TOTAL_PAGE,
  SEARCH_PAGE,
} from './action';

const SEARCH_STATE: SearchType = {
  query: '',
  queryList: [],
  page: {
    number: 1,
    totalPage: 1,
  },
  pager: {
    per: 10,
    start: 1,
    end: 10,
  },
};

const search = (state: SearchType = SEARCH_STATE, action): SearchType => {
  switch (action.type) {
    case SEARCH_QUERY:
      return {
        ...state,
        query: action.query,
      };
    case SEARCH_RESET:
      return {
        ...state,
        query: '',
      };
    case SEARCH_QUERY_LIST:
      return {
        ...state,
        queryList: action.queryList,
      };
    case SEARCH_TOTAL_PAGE:
      return {
        ...state,
        page: {
          ...state.page,
          totalPage: action.totalPage,
        },
      };
    case SEARCH_PAGE:
      return {
        ...state,
        page: {
          ...state.page,
          number: action.number,
        },
      };
  }
  return state;
};

export default search;
