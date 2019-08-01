export function getBytesLength(s) {
  var len = 0;

  for (var i = 0; i < s.length; i++) {
    var oneChar = escape(s.charAt(i));
    if (oneChar.length == 1) {
      len++;
    } else if (oneChar.indexOf('%u') != -1) {
      len += 2;
    } else if (oneChar.indexOf('%') != -1) {
      len++;
    }
  }

  return len;
}
