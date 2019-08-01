import { getCookie } from './getCookie'
import base64 from 'base-64';
import utf8 from 'utf8';

export function authInfo() {
    let token = getCookie('access_token')
    let auth_info = null;
    if(token) {
        let tmp = token.split('.');
        var info = tmp[1].replace(/-/gi, '+');
        info = info.replace(/_/gi, '/');
        //console.log(info)
        var bytes = base64.decode(info);
        //console.log(bytes)
        var text = utf8.decode(bytes);
        //console.log(text)
        var data = JSON.parse(text);
        //console.log(data)
        auth_info = data;
    }
    return auth_info;
}