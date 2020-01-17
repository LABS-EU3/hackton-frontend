import Axios from "axios";

const baseURL = process.env.REACT_APP_API_URL;

export const axiosWithAuth = token =>
  Axios.create({
    baseURL,
    headers: {
      Authorization: token
    }
  });

export const axios = Axios.create({ baseURL });
