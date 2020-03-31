import React from 'react';
import { connect } from 'react-redux';
import HeaderMenu from '../components/common/header/HeaderMenu';
import { RootState } from '../types/redux/reducer';

function HeaderMenuContainer(props) {
  return <HeaderMenu {...props} />;
}

export default connect(
  (store: RootState) => ({
    menu: store.common.menu,
    name: store.user.name,
    favorite: store.user.favorite,
  }),
  dispatch => ({}),
)(HeaderMenuContainer);
