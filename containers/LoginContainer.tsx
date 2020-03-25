import React, { useEffect, useState } from 'react';
import { connect, useSelector } from 'react-redux';
import Login from '../components/Login';

import {
  USER_LOGIN_SAGA,
  USER_LOGIN_ON,
  USER_TOKEN,
} from '../redux/reducers/user/index';
import { userSuccess } from '../redux/reducers/user/reducer';
import Loading from '../components/Loading';

function LoginContainer({
  token,
  runGetToken,
  runSubmit,
}: {
  token: string;
  runGetToken: (token: string) => void;
  runSubmit: (e: React.FormEvent) => void;
}) {
  return <>{!token && <Login runSubmit={runSubmit} />}</>;
}

export default connect(
  store => ({
    token: store.user.token,
  }),
  dispatch => ({
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
  }),
)(LoginContainer);
