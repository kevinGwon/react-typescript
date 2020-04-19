import axios from 'axios';
import { API_CONFIG } from './api.config';

export const GET_USER = (username: string, password: string, token: string) => {
  return axios.post(
    `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=${API_CONFIG.key}`,
    {
      username,
      password,
      request_token: token,
    },
  );
};

export const GET_TOKEN = () => {
  return axios.get(
    `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_CONFIG.key}`,
  );
};

export const GET_SESSION = (token: string) => {
  return axios.post(
    `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_CONFIG.key}`,
    {
      request_token: token,
    },
  );
};

export const GET_ACCOUNT = (session: string) => {
  return axios.get(
    `https://api.themoviedb.org/3/account?api_key=1e006c1e39b26bfadaa6f757bc1435cf&session_id=${session}`,
  );
};

export const GET_FAVORITE = (account: number, session: string) => {
  return axios.get(
    `https://api.themoviedb.org/3/account/${account}/favorite/movies?api_key=${API_CONFIG.key}&session_id=${session}&language=${API_CONFIG.lang}&sort_by=created_at.asc&page=1`,
  );
};
