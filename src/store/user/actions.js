export const UserTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL"
};

export const login = (username, password) => {
  return {
    type: UserTypes.LOGIN,
    payload: { username, password }
  };
};

export const loginSuccess = user => {
  return {
    type: UserTypes.LOGIN,
    payload: user
  };
};

export const loginFail = errorMessage => {
  return {
    type: UserTypes.LOGIN_FAIL,
    error: errorMessage
  };
};
