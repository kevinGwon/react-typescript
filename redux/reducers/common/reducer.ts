import { CommonType } from '../../../types/redux/common';
import { LOADING_ON, LOADING_OFF, MENU_OPEN, MENU_CLOSE } from './action';

const COMMON_STATE: CommonType = {
  loading: false,
  menu: false,
};

const common = (state: CommonType = COMMON_STATE, action): CommonType => {
  switch (action.type) {
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
  }
  return state;
};

export default common;
