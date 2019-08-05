export function getCookie(name, isServer, cookie) {
  var value = null;

  if (isServer == false) {
    value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  } else {
    if (cookie) {
      value = cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    } else {
      value = null;
    }
  }

  return value ? value[2] : null;
}
