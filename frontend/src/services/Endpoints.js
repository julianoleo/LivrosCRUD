import http from "../http-common";

export const getAll = () => {
  return http.get("/livro");
};

export const get = id => {
  return http.get(`/livro/${id}`);
};

export const create = data => {
  return http.put("/livro", data);
};

export const update = (id, data) => {
  return http.post(`/livro/${id}`, data);
};

export const remove = id => {
  return http.delete(`/livro/${id}`);
};