import { getCookie } from './getCookie'
import base64 from 'base-64';
import utf8 from 'utf8';

export function getUser() {
  var o = null;

  console.log('cookie: ', getCookie('access_token'));

  if (getCookie('access_token') != null && getCookie('access_token') != '' && getCookie('access_token').indexOf('@') < 0) {
    var token = getCookie('access_token').split('.');

    var bytes = base64.decode(token[1].replace(/-/gi, '+').replace(/_/gi, '/'));
    var decoded = utf8.decode(bytes);

    if (decoded.length < 10) {
    } else {
      o = JSON.parse(decoded);
    }
  } else {
    //
  }

  console.log('token', o);
  return o;
}
