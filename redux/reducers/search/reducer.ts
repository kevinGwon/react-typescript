import { SearchType } from '../../../types/redux/search';
import {
  SEARCH_QUERY,
  SEARCH_RESET,
  SEARCH_QUERY_LIST,
  SEARCH_TOTAL_PAGE,
  SEARCH_PAGE,
  SEARCH_PAGE_CHANGE,
  SEARCH_PAGE_PREV,
  SEARCH_PAGE_NEXT,
  SEARCH_PAGE_RESET,
} from './action';

const SEARCH_STATE: SearchType = {
  query: '',
  queryList: [],
  page: {
    current: 1,
    totalPage: 1,
  },
  pager: {
    per: 20,
    start: 1,
    end: 5,
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
          current: action.current,
        },
      };
    case SEARCH_PAGE_CHANGE:
      return {
        ...state,
        page: {
          ...state.page,
          current: action.current,
        },
      };
    case SEARCH_PAGE_PREV:
      return {
        ...state,
        page: {
          ...state.page,
          current: --state.page.current,
        },
        pager: {
          ...state.pager,
          start: --state.pager.start,
          end: --state.pager.end,
        },
      };
    case SEARCH_PAGE_NEXT:
      return {
        ...state,
        page: {
          ...state.page,
          current: ++state.page.current,
        },
        pager: {
          ...state.pager,
          start: ++state.pager.start,
          end: ++state.pager.end,
        },
      };
    case SEARCH_PAGE_RESET:
      return {
        ...state,
        page: {
          current: 1,
          totalPage: 1,
        },
        pager: {
          per: 20,
          start: 1,
          end: 5,
        },
      };
  }
  return state;
};

export default search;
