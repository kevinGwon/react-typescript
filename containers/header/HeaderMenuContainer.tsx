import React from 'react';
import { connect } from 'react-redux';

// Components
import HeaderMenu from '../../components/common/header/HeaderMenu';

// actions
import {
  MENU_CLOSE,
  LOADING_SAGA,
  INTRO_OFF,
} from '../../redux/reducers/common';
import {
  USER_LOGOUT_SAGA,
  USER_FAVORITE_SAGA,
} from '../../redux/reducers/user';

// types
import { RootState } from '../../types/redux/reducer';

function HeaderMenuContainer(props) {
  return <HeaderMenu {...props} />;
}

const mapStateToProps = (store: RootState) => ({
  account: Number(store.user.account),
  session: store.user.session,
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
  runRemoveFavorite: async (account, session, id, active) => {
    const data = {
      account,
      session,
      id,
      active,
    };
    dispatch({
      type: USER_FAVORITE_SAGA,
      data,
    });
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HeaderMenuContainer);
