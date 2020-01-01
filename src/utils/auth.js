import jwtDecode from 'jwt-decode';

export const isLoggedIn = () => {
  const { currentUser } = JSON.parse(localStorage.getItem('persist:hackton'));
  const { token } = JSON.parse(currentUser);
  if (token) {
    const decodedToken = jwtDecode(token);

    const currentTime = Date.now() / 1000;

    if (decodedToken.exp < currentTime) {
      // Logout user
      return false;
    }
    return true;
  }

  return false;
};