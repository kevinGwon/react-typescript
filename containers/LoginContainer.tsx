import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';

import { USER_LOGIN_SAGA } from '../redux/reducers/user/index';
import { userSuccess } from '../redux/reducers/user/reducer';
import Loading from '../components/Loading';

function LoginContainer({
  runLogin,
  runSubmit,
}: {
  runLogin: () => void;
  runSubmit: (e: React.FormEvent) => void;
}) {
  const [token, setToken] = useState(null);
  useEffect(() => {
    if (!token) {
      setToken(localStorage.getItem('token'));
      runLogin();
    }
  }, [token]);
  return <>{!token && <Login runSubmit={runSubmit} />}</>;
}

export default connect(
  state => ({}),
  dispatch => ({
    runLogin: () => {
      const name: string = localStorage.getItem('name');
      const token: string = localStorage.getItem('token');
      const session: string = sessionStorage.getItem('session');
      dispatch(userSuccess({ name, token, session }));
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
