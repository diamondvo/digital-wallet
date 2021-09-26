import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';
import { STORAGE_VALUES } from 'src/constants';

export const getHttpClient = (baseUrl: string, params: AxiosRequestConfig): AxiosInstance => {
  const token = sessionStorage.getItem(STORAGE_VALUES.TOKEN);
  return axios.create({
    ...params,
    url: baseUrl,
    headers: {
      ...params?.headers,
      authorization: token
    }
  })
}