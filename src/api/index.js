import Axios from "axios";

export const axiosWithAuth = () =>
  Axios.create({
    baseURL: "https://hackton-staging.herokuapp.com"
  });

export const axios = (Axios.defaults.baseURL =
  "https://hackton-staging.herokuapp.com");
