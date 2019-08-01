export function getRandomDrawing(range, len) {
  // console.log(range);
  // console.log(len);
  if (range == undefined || len == undefined) {
    return false;
  }

  if (range < len) {
    return false;
  }

  var tmp = [];
  var prevValue = null;
  var nextValue = null;

  while (true) {
    console.log('while 돈당');
    nextValue = Math.floor(Math.random() * range);

    if (tmp.length == 0) {
      tmp.push(nextValue);
    } else {
      var b = true;
      nextValue = Math.floor(Math.random() * range);

      for (var i = 0; i < tmp.length; i++) {
        if (tmp[i] == nextValue) {
          b = false;
        }
      }

      if (b) {
        tmp.push(nextValue);
      } else {
        continue;
      }
    }

    prevValue = nextValue;

    if (tmp.length == len) {
      break;
    }
  }

  return tmp;
}
