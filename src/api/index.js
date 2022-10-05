import axios from "axios";
import { getBooks, getBookDetail, addBook, patchBook, delBook } from "./books";
import { ElLoading } from "element-plus";

const axioxInstance = axios.create({
  baseURL: "https://fe-interview-api.unnotech.com/",
});

const loadingEvent = {
  loading: () => {
    ElLoading.service({
      lock: true,
      text: "Loading",
      background: "rgba(0, 0, 0, 0.7)",
    })
  },
  closeLoaing: () => {
    ElLoading.service().close()
  }
}

axioxInstance.interceptors.request.use(
  (config) => {
    loadingEvent.loading();
    return config;
  },
  (error) => {
    loadingEvent.loading();
    return Promise.reject(error);
  }
);

axioxInstance.interceptors.response.use(
  (res) => {
    loadingEvent.closeLoaing()
    return res;
  },
  (error) => {
    loadingEvent.closeLoaing()
    return Promise.reject(error);
  }
);

export default axioxInstance;
export const apiGetBooks = getBooks;
export const apiGetBookDetail = getBookDetail;
export const apiAddBook = addBook;
export const apiPatchBook = patchBook;
export const apiDelBook = delBook;
