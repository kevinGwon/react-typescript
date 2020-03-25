import {
  USER_LOGIN_ON,
  USER_LOGIN_OFF,
  USER_INFO,
  USER_PENDING,
  USER_SUCCESS,
  USER_ERROR,
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
        login: true,
        loading: false,
        name: action.name,
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
    case USER_LOGIN_ON:
      return {
        ...state,
        login: true,
      };
    case USER_LOGIN_OFF:
      return {
        ...state,
        login: false,
      };
    case USER_INFO:
      return {
        ...state,
        name: action.name,
        email: action.email,
        uid: action.uid,
      };
    default:
      return state;
  }
};

export default user;
