import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';

// Components
import Login from '../../components/common/Login';

// Action
import {
  USER_LOGIN_SAGA,
  USER_LOGIN,
  USER_TOKEN,
} from '../../redux/reducers/user/index';

// Types
import { RootState } from '../../types/redux/reducer';

function LoginContainer(props) {
  const { intro } = props;
  return <>{!intro && <Login {...props} />}</>;
}

const mapStateToProps = (store: RootState) => ({
  intro: store.common.intro,
  login: store.user.login,
  error: store.user.error,
});
const mapDispatchToProps = dispatch => ({
  runGetToken: (token: string) => {
    dispatch({
      type: USER_TOKEN,
      token,
    });
  },
  runSubmit: (e: React.FormEvent) => {
    e.preventDefault();
    const $form = e.currentTarget;
    const $id: HTMLInputElement = $form.querySelector('#id');
    const $password: HTMLInputElement = $form.querySelector('#password');
    const id: string = $id.value;
    const user: {
      username: string;
      password: string;
    } = {
      username: $id.value,
      password: $password.value,
    };

    // Login
    dispatch({ type: USER_LOGIN_SAGA, user });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
