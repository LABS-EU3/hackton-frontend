import jwtDecode from "jwt-decode";

export const UserTypes = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  SOCIAL_AUTH: "SOCIAL_AUTH",
  SET_USER: "SET_USER",
  RESET_USER: "RESET_USER",
  USER_ERROR: "USER_ERROR"
};

export const login = (email, password, history) => {
  return {
    type: UserTypes.LOGIN,
    payload: { email, password },
    history
  };
};

export const register = (email, password, history) => {
  return {
    type: UserTypes.REGISTER,
    payload: { email, password },
    history
  };
};

export const socialAuthLoad = () => {
  return {
    type: UserTypes.SOCIAL_AUTH
  };
};

export const setUser = token => {
  const { email, userId } = jwtDecode(token);

  return {
    type: UserTypes.SET_USER,
    payload: { token, email, userId }
  };
};

export const resetUser = () => {
  return { type: UserTypes.RESET_USER };
};

export const userError = error => {
  console.error("ERROR: ", error.message);
  return {
    type: UserTypes.USER_ERROR
  };
};
