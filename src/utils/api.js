import Axios from "axios";

const baseURL = process.env.PRODUCTION_API;

export const axiosWithAuth = token =>
  Axios.create({
    baseURL,
    headers: {
      Authorization: token
    }
  });

export const axios = Axios.create({ baseURL });
