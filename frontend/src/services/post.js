import http from "./http_common";

const getAll = () => {
  return http.get("/home");
};

export default {
  getAll
};