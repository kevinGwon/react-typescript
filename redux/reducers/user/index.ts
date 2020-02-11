export const USER_INFO = 'user/INFO' as const;

export const USER_STATE = {
  name: null,
  email: null,
  uid: null,
};

const user = (state = USER_STATE, action) => {
  switch (action.type) {
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
