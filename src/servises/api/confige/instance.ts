import axios from "axios";

export const apiRequest = axios.create({
  baseURL: "https://redux-cms.iran.liara.run/api",
  headers: {
    "Content-Type": "application/json",
  },
});
