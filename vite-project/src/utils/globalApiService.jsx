import axiosInstance from "./apiinterceptor";

export const globalGetService = (url, params) => {
    return new Promise(function (resolve, reject) {
      axiosInstance({
        method: "get",
        url: url,
        params: params,
      })
        .then((response) => {
          resolve(response);
        })
        .catch((error) => {
          reject(error)
        });
    });
  };
