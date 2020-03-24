import React, { useCallback, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Logo from './svg/Logo';

// Modules
import { LOGIN } from '../modules/api/login';

// Styled
import { StyledForm, StyledFormLogo } from './Login.style';
import DimLayer from './common/DimLayer';
import { StyledBtn } from './common/Btn.style';
import Input from './common/Input';

// Types
import { USER_LOGIN } from '../redux/reducers/user/index';

function Login() {
  let token = null;
  const dispatch = useDispatch();
  const runSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    const $form = e.currentTarget;
    const $id: HTMLInputElement = $form.querySelector('#id');
    const $password: HTMLInputElement = $form.querySelector('#password');
    const id = $id.value;
    const data = {
      id: $id.value,
      password: $password.value,
    };
    if (!token) {
      (async () => {
        try {
          await LOGIN(data);
          dispatch({
            type: USER_LOGIN,
          });
          return false;
        } catch (error) {
          alert('로그인에 실패하였습니다.');
        }
      })();
      // (async () => {
      //   try {
      //     const res = await axios.get(
      //       `https://api.themoviedb.org/3/account?api_key=1e006c1e39b26bfadaa6f757bc1435cf&session_id=${session}`,
      //     );
      //   } catch (error) {
      //     console.log(error);
      //   }
      // })();
    }
  }, []);
  useEffect(() => {
    token = localStorage.getItem('token');
    token &&
      dispatch({
        type: USER_LOGIN,
      });
  }, []);
  return (
    <DimLayer>
      <StyledForm>
        <StyledFormLogo>
          <Logo />
        </StyledFormLogo>
        <form onSubmit={runSubmit}>
          <Input id="id" type="text" block defaultValue="godyel7" />
          <Input id="password" type="password" defaultValue="kevingwon" block />
          <StyledBtn submit invert block>
            로그인
          </StyledBtn>
        </form>
      </StyledForm>
    </DimLayer>
  );
}

export default Login;
