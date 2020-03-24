import axios from 'axios';
import { API_CONFIG } from './api.config';

export const GET_LOGIN = async (
  data: { id: string; password: string },
  token: string,
) => {
  try {
    return await axios.post(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_CONFIG.key}`,
      {
        username: data.id,
        password: data.password,
        request_token: token,
      },
    );
  } catch (error) {
    alert('Login 정보가 일치하지 않습니다.');
  }
};

export const GET_TOKEN = async () => {
  try {
    return await axios.get(
      `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_CONFIG.key}`,
    );
  } catch (error) {
    console.log('Token을 받아오는데 실패했습니다.');
  }
};

export const GET_SESSION = async (token: string) => {
  try {
    return await axios.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_CONFIG.key}`,
      {
        request_token: token,
      },
    );
  } catch (error) {
    console.log('Session을 받아오는데 실패했습니다.');
  }
};

export const LOGIN = async data => {
  try {
    let token, session;

    // Token
    const getToken = await GET_TOKEN();
    token = getToken.data.request_token;

    // Login
    const login = await GET_LOGIN(data, token);

    // Session
    const getSession = await GET_SESSION(token);
    session = getSession.data.session_id;

    // Set Token, Session
    localStorage.setItem('token', token);
    sessionStorage.setItem('session', session);
  } catch (error) {
    console.log('Token or Session을 받아오는데 실패했습니다.');
  }
};
