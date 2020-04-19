import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Search from '../../components/search/Search';
import { RootState } from '../../types/redux/reducer';

// Modules
import submit from '../../modules/submit';

// Action
import {
  SEARCH_RESET,
  SEARCH_PAGE_CHANGE,
  SEARCH_PAGE_NEXT,
  SEARCH_PAGE_PREV,
  SEARCH_SAGA,
} from '../../redux/reducers/search';
import { LOADING_SAGA } from '../../redux/reducers/common';

function SearchContainer(props) {
  const { runResetSearch, page, runPager, pager } = props;
  return (
    <Search
      {...props}
      pagerArr={runPager(page.totalPage, pager.start, pager.end)}
    />
  );
}

const mapStateToProps = (store: RootState) => ({
  query: store.search.query,
  queryList: store.search.queryList,
  page: store.search.page,
  pager: store.search.pager,
});
const mapDispatchToProps = dispatch => ({
  runSubmit: e => submit({ e, dispatch }),
  runLoading: () => {
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
  },
  runPager: (totalPage, start, end) => {
    const pager = [];
    for (let i = start; i <= totalPage && i <= end; i++) {
      pager.push(i);
    }
    return pager;
  },
  runPageChange: current => {
    window.scrollTo(0, 0);
    dispatch({ type: SEARCH_PAGE_CHANGE, current: current });
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
    dispatch({ type: SEARCH_SAGA });
  },
  runPageArrowChange: dir => {
    window.scrollTo(0, 0);
    dir === 'prev'
      ? dispatch({ type: SEARCH_PAGE_PREV })
      : dispatch({ type: SEARCH_PAGE_NEXT });
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
    dispatch({ type: SEARCH_SAGA });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
