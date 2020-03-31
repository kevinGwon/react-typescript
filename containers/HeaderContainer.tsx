import React, { useCallback, useState } from 'react';
import { connect } from 'react-redux';
import Header from '../components/common/header/Header';

// Types
import { RootState } from '../types/redux/reducer';
import { MENU_OPEN } from '../redux/reducers/common';

function HeaderContainer({
  open,
  runOpenMenu,
}: {
  open: boolean;
  runOpenMenu: () => void;
}) {
  return <Header open={open} runOpenMenu={runOpenMenu} />;
}

const mapStateToProps = (store: RootState) => ({
  open: store.common.menu,
});

const mapDispatchToProps = dispatch => ({
  runOpenMenu: () => {
    dispatch({
      type: MENU_OPEN,
    });
  },
});

export default React.memo(
  connect(mapStateToProps, mapDispatchToProps)(HeaderContainer),
);
