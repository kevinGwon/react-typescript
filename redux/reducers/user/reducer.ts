import {
  USER_LOGIN,
  USER_LOGOUT,
  USER_INFO,
  USER_PENDING,
  USER_SUCCESS,
  USER_ERROR,
  USER_TOKEN,
} from './action';
import { UserStateType } from '../../../types/redux/user';

export const userSuccess = payload => ({
  type: USER_SUCCESS,
  name: payload.name,
  token: payload.token,
  session: payload.session,
});

export const USER_STATE: UserStateType = {
  login: false,
  name: null,
  id: null,
  favorite: [],
  token: null,
  session: null,
  loading: false,
  error: null,
};

const user = (state: UserStateType = USER_STATE, action) => {
  switch (action.type) {
    case USER_PENDING: {
      return {
        ...state,
        loading: true,
        error: null,
      };
    }
    case USER_SUCCESS: {
      return {
        ...state,
        loading: false,
        name: action.name,
        id: action.id,
        favorite: action.favorite,
        token: action.token,
        session: action.session,
      };
    }
    case USER_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    }
    case USER_LOGIN:
      return {
        ...state,
        login: true,
      };
    case USER_LOGOUT:
      return {
        ...state,
        login: false,
        favorite: [],
        token: null,
        session: null,
        id: null,
        name: null,
      };
    case USER_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    default:
      return state;
  }
};

export default user;
