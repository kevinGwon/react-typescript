import { CommonType } from '../../../types/redux/common';
import { LOADING_ON, LOADING_OFF, LOADING_ON_SAGA } from './action';

const COMMON_STATE: CommonType = {
  loading: false,
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
    case LOADING_ON_SAGA:
      return {
        ...state,
      };
  }
  return state;
};

export default common;
