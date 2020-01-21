import jwtDecode from "jwt-decode";

export const UserTypes = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  SOCIAL_AUTH: "SOCIAL_AUTH",
  SET_USER: "SET_USER",
  SET_USER_PROFILE: "SET_USER_PROFILE",
  RESET_USER: "RESET_USER",
  USER_ERROR: "USER_ERROR",
  FETCH_USER_PROFILE: "FETCH_USER_PROFILE",
  UPDATE_USER_PROFILE: "UPDATE_USER_PROFILE"
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

export const setUserProfile = details => {
  return {
    type: UserTypes.SET_USER_PROFILE,
    payload: details
  };
};

export const resetUser = () => {
  return { type: UserTypes.RESET_USER };
};

export const fetchUserProfile = (userId) => {
  return {
    type: UserTypes.FETCH_USER_PROFILE,
    payload: userId
  };
};


export const updateUserProfile = (updatedProfile, history) => {
  return {
    type: UserTypes.UPDATE_PROFILE,
    payload: updatedProfile,
    history
  };
};

export const userError = error => {
  return {
    type: UserTypes.USER_ERROR
  };
};
