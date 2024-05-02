import baseAxios from "axios";

const axios = baseAxios.create({
  baseURL: "https://bootcamp-api.codeit.kr/api",
});

export default axios;
