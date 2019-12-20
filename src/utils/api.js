import Axios from "axios";

const baseURL = "https://hackton-staging.herokuapp.com";

export const axiosWithAuth = () =>
  Axios.create({
    baseURL
  });

export const axios = Axios.create({ baseURL });
