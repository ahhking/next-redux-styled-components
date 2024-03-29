/**
 * @param {string} url - 주소
 * @param {string} method - method
 * @param {object} data - 전달 data
 */
import axios from 'axios';
import { authHeader } from './authheader';

export function fetchApi(url, method, req, data) {
  // console.log('fetchApi!! ' + url);
  // console.log('method: ', method);
  // console.log('data: ', data);
  return axios({
    method: method,
    url: url,
    headers: authHeader(req.isServer, req.cookie),
    data: data ? data : undefined
  });
}
