import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Header from '../components/common/header/Header';

// Types
import { RootState } from '../types/redux/reducer';
import { MENU_OPEN, LOADING_SAGA } from '../redux/reducers/common';

function HeaderContainer() {
  const dispatch = useDispatch();
  const runOpenMenu = useCallback(() => {
    dispatch({
      type: MENU_OPEN,
    });
  }, []);
  const runGoHome = useCallback(() => {
    dispatch({
      type: LOADING_SAGA,
      dispatch: dispatch,
    });
  }, []);
  return <Header runOpenMenu={runOpenMenu} runGoHome={runGoHome} />;
}

export default React.memo(HeaderContainer);
