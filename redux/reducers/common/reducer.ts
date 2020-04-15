import { CommonType } from '../../../types/redux/common';
import {
  SERVER,
  INTRO_ON,
  INTRO_OFF,
  LOADING_ON,
  LOADING_OFF,
  MENU_OPEN,
  MENU_CLOSE,
  SEARCH_VALUE,
  SEARCH_RESET,
} from './action';

const COMMON_STATE: CommonType = {
  isServer: false,
  intro: false,
  loading: false,
  menu: false,
  search: '',
};

const common = (state: CommonType = COMMON_STATE, action): CommonType => {
  switch (action.type) {
    case SERVER:
      console.log('SERVER !!' + action.isServer);
      return {
        ...state,
        isServer: action.isServer,
      };
    case INTRO_ON:
      return {
        ...state,
        intro: true,
      };
    case INTRO_OFF:
      return {
        ...state,
        intro: false,
      };
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };
    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };
    case MENU_OPEN:
      return {
        ...state,
        menu: true,
      };
    case MENU_CLOSE:
      return {
        ...state,
        menu: false,
      };
    case SEARCH_VALUE:
      return {
        ...state,
        search: action.search,
      };
    case SEARCH_RESET:
      return {
        ...state,
        search: '',
      };
  }
  return state;
};

export default common;
