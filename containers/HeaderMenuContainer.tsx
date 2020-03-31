import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from '../components/common/header/HeaderMenu';
import { RootState } from '../types/redux/reducer';
import { MENU_CLOSE, LOADING_SAGA } from '../redux/reducers/common';

function HeaderMenuContainer(props) {
  return <HeaderMenu {...props} />;
}

const mapStateToProps = (store: RootState) => ({
  menu: store.common.menu,
  name: store.user.name,
  favorite: store.user.favorite,
});

const mapDispatchToProps = dispatch => ({
  runMenuClose: () => {
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
    dispatch({ type: MENU_CLOSE });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuContainer);
