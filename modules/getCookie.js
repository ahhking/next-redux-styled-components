export function getCookie(name) {
  var value = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  // console.log(value)
  return value ? value[2] : null;
}
