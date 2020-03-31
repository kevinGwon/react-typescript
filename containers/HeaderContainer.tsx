import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Components
import Header from '../components/common/header/Header';

// Types
import { RootState } from '../types/redux/reducer';
import { MENU_OPEN } from '../redux/reducers/common';

function HeaderContainer() {
  const dispatch = useDispatch();
  const runOpenMenu = useCallback(() => {
    dispatch({
      type: MENU_OPEN,
    });
  }, []);
  return <Header runOpenMenu={runOpenMenu} />;
}

export default React.memo(HeaderContainer);
