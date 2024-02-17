import axios, { AxiosResponse } from 'axios';
// import { QueryFunction, QueryKey, useQuery } from '@tanstack/react-query'

const api = axios.create({
  baseURL: 'http://localhost:5173'
});

api.interceptors.request.use(async (config) => {
  return config
});

const useHttp = () => {
  return {
    // get: <Data = any, Error = any>(
    //   url: string | null,
    //   fetcher: QueryFunction<Data, QueryKey, never> | undefined
    // ) => {
    //   return useQuery<Data, AxiosError<Error>>(
    //     { queryKey: [url], queryFn: fetcher }
    //   );
    // },
    getOnce: <RES = any, DATA = any>(
      url: string,
      errorProcess?: (err: any) => void
    ) => {
      return new Promise<AxiosResponse<RES>>((resolve, reject) => {
        api
          .get<RES, AxiosResponse<RES>, DATA>(url)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            if (errorProcess) {
              errorProcess(err);
            } else {
              // alert.openError(getErrorMessage(err));
            }
            reject(err);
          });
      });
    },
    post: <RES = any, DATA = any>(
      url: string,
      data: DATA,
      responseType: 'json' | 'arraybuffer' | 'blob' | 'document' | 'text' = 'json',
      errorProcess?: (err: any) => void
    ) => {
      return new Promise<AxiosResponse<RES>>((resolve, reject) => {
        api
          .post<RES, AxiosResponse<RES>, DATA>(url, data, { responseType })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            if (errorProcess) {
              errorProcess(err);
            } else {
              // alert.openError(getErrorMessage(err));
            }
            reject(err);
          });
      });
    },
    put: <RES = any, DATA = any>(
      url: string,
      data: DATA,
      errorProcess?: (err: any) => void
    ) => {
      return new Promise<AxiosResponse<RES>>((resolve, reject) => {
        api
          .put<RES, AxiosResponse<RES>, DATA>(url, data)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            if (errorProcess) {
              errorProcess(err);
            } else {
              // alert.openError(getErrorMessage(err));
            }
            reject(err);
          });
      });
    },
    delete: <RES = any, DATA = any>(
      url: string,
      data?: DATA,
      errorProcess?: (err: any) => void
    ) => {
      return new Promise<AxiosResponse<RES>>((resolve, reject) => {
        api
          .delete<RES, AxiosResponse<RES>, DATA>(url, { data })
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            if (errorProcess) {
              errorProcess(err);
            } else {
              // alert.openError(getErrorMessage(err));
            }
            reject(err);
          });
      });
    },
    patch: <RES = any, DATA = any>(
      url: string,
      data: DATA,
      errorProcess?: (err: any) => void
    ) => {
      return new Promise<AxiosResponse<RES>>((resolve, reject) => {
        api
          .patch<RES, AxiosResponse<RES>, DATA>(url, data)
          .then((data) => {
            resolve(data);
          })
          .catch((err) => {
            if (errorProcess) {
              errorProcess(err);
            } else {
              // alert.openError(getErrorMessage(err));
            }
            reject(err);
          });
      });
    },
  };
};

export default useHttp;
