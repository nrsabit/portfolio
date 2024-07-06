import { jwtDecode } from "jwt-decode";

export const storeUserInfo = (accessToken: string) => {
  return localStorage.setItem("user", accessToken);
};

export const getUserInfo = () => {
  const authToken = localStorage.getItem("user");
  if (authToken) {
    const decodedData: any = decodedToken(authToken);

    return decodedData;
  } else {
    return null;
  }
};

export const getToken = () => {
  return localStorage.getItem("user");
};

export const isLoggedIn = () => {
  const authToken = localStorage.getItem("user");
  if (authToken) {
    return !!authToken;
  }
};

export const removeUserInfo = () => {
  return localStorage.removeItem("user");
};

export const decodedToken = (token: string) => {
  if (token) {
    return jwtDecode(token);
  }
};
