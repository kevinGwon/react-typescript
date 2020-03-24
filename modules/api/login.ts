import axios from 'axios';

export const GET_LOGIN = async (token: string) => {
  try {
    return await axios.post(
      `https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=1e006c1e39b26bfadaa6f757bc1435cf`,
      {
        username: 'godyel7',
        password: 'kevingwon',
        request_token: token,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const GET_TOKEN = async () => {
  try {
    return await axios.get(
      'https://api.themoviedb.org/3/authentication/token/new?api_key=1e006c1e39b26bfadaa6f757bc1435cf',
    );
  } catch (error) {
    console.log(error);
  }
};

export const GET_SESSION = async (token: string) => {
  try {
    return await axios.post(
      `https://api.themoviedb.org/3/authentication/session/new?api_key=1e006c1e39b26bfadaa6f757bc1435cf`,
      {
        request_token: token,
      },
    );
  } catch (error) {
    console.log(error);
  }
};

export const LOGIN = async () => {
  try {
    let token, session;

    // Token
    const getToken = await GET_TOKEN();
    token = getToken.data.request_token;

    // Login
    const login = await GET_LOGIN(token);

    // Session
    const getSession = await GET_SESSION(token);
    session = getSession.data.session_id;

    // Set Token, Session
    localStorage.setItem('token', token);
    localStorage.setItem('session', session);
  } catch (error) {
    console.log(error);
  }
};
