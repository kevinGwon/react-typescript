export const USER_INFO = 'user/INFO' as const;
export const USER_LOGIN = 'user/LOGIN' as const;

export const USER_STATE = {
  isLogin: false,
  name: null,
  token: null,
  session: null,
};

const user = (state = USER_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        isLogin: true,
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
