import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Search from '../../components/search/Search';
import { RootState } from '../../types/redux/reducer';

// Modules
import submit from '../../modules/submit';

// Action
import { SEARCH_RESET } from '../../redux/reducers/search';
import { LOADING_SAGA } from '../../redux/reducers/common';

function SearchContainer(props) {
  const { runResetSearch, totalPage } = props;
  const pager = [];
  useEffect(() => {
    return () => {
      // 검색어 초기화
      runResetSearch();
    };
  }, []);
  return <Search {...props} pager={pager} />;
}

const mapStateToProps = (store: RootState) => ({
  query: store.search.query,
  queryList: store.search.queryList,
  totalPage: store.search.page.totalPage,
});
const mapDispatchToProps = dispatch => ({
  runSubmit: e => submit({ e, dispatch }),
  runResetSearch: () => {
    dispatch({ type: SEARCH_RESET });
  },
  runLoading: () => {
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
