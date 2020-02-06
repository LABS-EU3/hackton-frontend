import jwtDecode from "jwt-decode";

export const UserTypes = {
  LOGIN: "LOGIN",
  REGISTER: "REGISTER",
  SOCIAL_AUTH: "SOCIAL_AUTH",
  SET_USER: "SET_USER",
  SET_USER_PROFILE: "SET_USER_PROFILE",
  PURGE: "PURGE",
  FETCH_USER_PROFILE: "FETCH_USER_PROFILE",
  UPDATE_USER_PROFILE: "UPDATE_USER_PROFILE",
  RESET_PASSWORD: 'RESET_PASSWORD',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  VERIFY_EMAIL: 'VERIFY_EMAIL'
};

export const login = (email, password) => {
  return {
    type: UserTypes.LOGIN,
    payload: { email, password }
  };
};

export const register = (email, password, role, team) => {
  return {
    type: UserTypes.REGISTER,
    payload: {
      email,
      password,
      role,
      team
    }
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

export const resetUser = (history) => {
  return { type: UserTypes.PURGE, history };
};

export const fetchUserProfile = userId => {
  return {
    type: UserTypes.FETCH_USER_PROFILE,
    payload: userId
  };
};

export const updateUserProfile = (updatedProfile, history) => {
  console.log("in action", updatedProfile);
  return {
    type: UserTypes.UPDATE_USER_PROFILE,
    payload: updatedProfile,
    history
  };
};

export const resetPassword = (password, history) => {
  return {
    type: UserTypes.RESET_PASSWORD,
    payload: password,
    history
  }
}

export const forgotPassword = (email, history) => {
  return {
    type: UserTypes.FORGOT_PASSWORD,
    payload: email,
    history
  }
}

export const verifyEmail = () => ({ type: UserTypes.VERIFY_EMAIL });
