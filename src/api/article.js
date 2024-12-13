import request from "@/lib/request";

export const count = () => {

};

export const getList = (page = 1, size = 10) => {
  return request.get(`/article?page=${page}&size=${size}`);
};

export const getDetail = (id) => {
  return request.get(`/article/${id}`);
};