import Axios from "axios";

const baseURL = process.env.REACT_APP_STAGING_API || process.env.REACT_APP_PRODUCTION_API;

export const axiosWithAuth = token =>
  Axios.create({
    baseURL,
    headers: {
      Authorization: token
    }
  });

export const axios = Axios.create({ baseURL });
