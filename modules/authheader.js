
import { getCookie } from './getCookie'
import base64 from 'base-64';
import utf8 from 'utf8';
import validator from 'validator';

export function authHeader() {
  // let token = getCookie('access_token');
  let token = null;
  
  console.log('cookie: ', token);

  if (!token) {
    return {
      'X-AUTH-HEADER': 'VLLHNAAW1GVXV7HDRRPI6CURSWEAXAZDZ8K3BDFVG'
    };
  }

  if (validator.isEmail(token)) {
    return {
      'X-AUTH-HEADER': 'VLLHNAAW1GVXV7HDRRPI6CURSWEAXAZDZ8K3BDFVG'
    };
  }

  if (!token.length > 0) {
    return {
      'X-AUTH-HEADER': 'VLLHNAAW1GVXV7HDRRPI6CURSWEAXAZDZ8K3BDFVG'
    };
  }

  var tmp = token.split('.');
  var bytes = base64.decode(tmp[1].replace(/-/gi, '+').replace(/_/gi, '/'));
  var decoded = utf8.decode(bytes);

  var data = JSON.parse(decoded);
  console.log(data);
  console.log(new Date(data.exp * 1000));

  var now = new Date();
  var exp = new Date(data.exp * 1000);

  if (now > exp) {
    console.log('쿠키만료');
  } else {
    console.log('쿠키유효');
  }

  return {
    'Authorization': 'Bearer ' + token,
    'Pragma': 'no-cache',
    'X-AUTH-HEADER': 'VLLHNAAW1GVXV7HDRRPI6CURSWEAXAZDZ8K3BDFVG'
  };
}
