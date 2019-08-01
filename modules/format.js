export function format(_s, len = 7) {
  var s = '';

  if (len - _s.length > 0) {
    for (var i = 0; i < len - _s.length; i++) {
      s += '0';
    }
  } else {
    console.log(len - _s.length);
  }

  return s + _s;
}
