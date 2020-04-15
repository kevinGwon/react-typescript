import React, { useEffect } from 'react';
import { connect } from 'react-redux';

// Components
import Search from '../../components/search/Search';
import { RootState } from '../../types/redux/reducer';

// Modules
import submit from '../../modules/submit';

// Action
import { SEARCH_RESET } from '../../redux/reducers/common';

function SearchContainer(props) {
  const { runResetSearch } = props;
  useEffect(() => {
    return () => {
      // 검색어 초기화
      runResetSearch();
    };
  }, []);
  return <Search {...props} />;
}

const mapStateToProps = (store: RootState) => ({
  search: store.common.search,
});
const mapDispatchToProps = dispatch => ({
  runSubmit: e => submit({ e, dispatch }),
  runResetSearch: () => {
    dispatch({ type: SEARCH_RESET });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);
