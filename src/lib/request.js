import axios from "axios";

const request = axios.create({
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

request.interceptors.response.use((resp) => {
  return resp.data;
});

export default request;