export function getQuery(s) {
  console.log('getQuery: ', s);

  var query = window.location.search.substring(1);
  var vars = query.split('&');
  var value = '';

  if (s === undefined) {
    var o = {};

    for (var i = 0; i < vars.length; i++) {
      var obj = vars[i].split('=');

      o[obj[0]] = obj[1];
    }

    value = o;
  } else {
    for (var i = 0; i < vars.length; i++) {
      var obj = vars[i].split('=');

      if (decodeURIComponent(obj[0]) == s) {
        value = obj[1];
      }
    }
  }

  return value;
}
