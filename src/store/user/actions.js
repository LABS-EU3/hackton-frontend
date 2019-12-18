export const UserTypes = {
  LOGIN: "LOGIN",
  LOGIN_SUCCESS: "LOGIN_SUCCESS",
  LOGIN_FAIL: "LOGIN_FAIL",
  REGISTER: "REGISTER",
  REGISTER_SUCCESS: "REGISTER_SUCCESS",
  REGISTER_FAIL: "REGISTER_FAIL"
};

export const login = (email, password) => {
  return {
    type: UserTypes.LOGIN,
    payload: { email, password }
  };
};

export const loginSuccess = user => {
  return {
    type: UserTypes.LOGIN_SUCCESS,
    payload: user
  };
};

export const loginFail = errorMessage => {
  return {
    type: UserTypes.LOGIN_FAIL,
    error: errorMessage
  };
};

export const register = (email, password) => {
  return {
    type: UserTypes.REGISTER,
    payload: { email, password }
  };
};

export const registerSuccess = user => {
  return {
    type: UserTypes.REGISTER_SUCCESS,
    payload: user
  };
};

export const registerFail = errorMessage => {
  return {
    type: UserTypes.REGISTER_FAIL,
    error: errorMessage
  };
};
