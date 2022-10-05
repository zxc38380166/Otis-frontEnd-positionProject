import axioxInstance from "@/api";

export const getBooks = () => {
  return axioxInstance({
    url: "/books",
    method: "get"
  });
}

export const getBookDetail = (params) => {
  return axioxInstance({
    url: `/books/${params}`,
    method: "get"
  });
}

export const addBook = (params) => {
  return axioxInstance({
    url: '/books',
    method: "post",
    data: params
  });
}

export const patchBook = (id, params) => {
  return axioxInstance({
    url: `/books/${id}`,
    method: "patch",
    data: params
  });
}

export const delBook = (id) => {
  return axioxInstance({
    url: `/books/${id}`,
    method: "delete"
  });
}
