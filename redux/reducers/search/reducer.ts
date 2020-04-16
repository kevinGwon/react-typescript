import { SearchType } from '../../../types/redux/search';
import { SEARCH_QUERY, SEARCH_RESET, SEARCH_QUERY_LIST } from './action';

const SEARCH_STATE: SearchType = {
  query: '',
  queryList: [],
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
  }
  return state;
};

export default search;
