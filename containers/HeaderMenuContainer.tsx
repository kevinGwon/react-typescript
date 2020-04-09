import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from '../components/common/header/HeaderMenu';

// actions
import { MENU_CLOSE, LOADING_SAGA, INTRO_OFF } from '../redux/reducers/common';
import { USER_LOGOUT_SAGA } from '../redux/reducers/user';

// types
import { RootState } from '../types/redux/reducer';

function HeaderMenuContainer(props) {
  return <HeaderMenu {...props} />;
}

const mapStateToProps = (store: RootState) => ({
  login: store.user.login,
  menu: store.common.menu,
  name: store.user.name,
  favorite: store.user.favorite,
});

const mapDispatchToProps = dispatch => ({
  runMenuClose: () => {
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
    dispatch({ type: MENU_CLOSE });
  },
  runLogin: () => {
    dispatch({ type: INTRO_OFF });
  },
  runLogout: () => {
    dispatch({ type: LOADING_SAGA, dispatch: dispatch });
    dispatch({ type: USER_LOGOUT_SAGA });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuContainer);
