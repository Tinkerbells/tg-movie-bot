import axios from "axios";

export const omdbApi = () => {
  return axios.create({
    baseURL: "http://www.omdbapi.com",
    params: {
      apikey: Bun.env.OMDB_API_KEY,
    },
  });
};
