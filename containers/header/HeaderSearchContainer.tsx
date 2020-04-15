import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { useDispatch, useSelector, connect } from 'react-redux';
// import Router from 'next/router';

// Components
import HeaderSearch from '../../components/common/header/HeaderSearch';

// Modules
import submit from '../../modules/submit';

// Action
import { SEARCH_VALUE } from '../../redux/reducers/common';

// Types
import { RootState } from '../../types/redux/reducer';

let pageType = null;

function HeaderSearchContainer(props) {
  const { isServer } = props;
  const [searchActive, setSearchActive] = useState(false);
  useEffect(() => {
    pageType = document.querySelector('article').getAttribute('data-page');
  }, [isServer]);
  useEffect(() => {
    return () => {
      pageType = null;
    };
  }, []);

  return (
    <HeaderSearch
      {...props}
      pageType={pageType}
      searchActive={searchActive}
      setSearchActive={setSearchActive}
    />
  );
}

const mapStateToProps = (store: RootState) => ({
  isServer: store.common.isServer,
  search: store.common.search,
});
const mapDispatchToProps = dispatch => ({
  runSubmit: (e, setSearchActive) => submit({ e, setSearchActive, dispatch }),
  runCloseSearch: setSearchActive => {
    setSearchActive(false);
  },
  runSearchActive: (setSearchActive, searchActive) => {
    let $searchInput: HTMLInputElement = null;
    setSearchActive(!searchActive);
    if (!searchActive) {
      setTimeout(() => {
        $searchInput = document.querySelector('#search');
        $searchInput.focus();
      }, 0);
    } else {
      $searchInput = null;
    }
  },
  runCloseBlock: (e: React.MouseEvent) => {
    e.stopPropagation();
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderSearchContainer);
