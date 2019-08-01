import { CHECK_BOXES } from '../constants';

export function getUserPurpose(n) {
  var s = '';
  var len = null;
  var tmp = n.toString(2);
  var pad = '';

  // len = new Array(tmp).length;
  len = tmp.length;
  console.log('tmp: ', tmp.length);
  console.log('len: ', len);

  for (var i = 0; i < CHECK_BOXES.RECOMMENDATION - len; i++) {
    pad += '0';
  }

  tmp = pad + tmp;

  tmp = tmp.split('').reverse().map((item, index) => {
    return Number(item);
  });

  console.log('tmp: ', tmp);

  console.log('purpse: ', n);

  for (var i = 0; i < tmp.length; i++) {
    if (i != 0 && tmp[i] && s.length > 0) {
      s += ', ';
    }

    switch (i) {
      case 0:
        if (tmp[i]) {
          s += '팝업스토어';
        }
        break;
      case 1:
        if (tmp[i]) {
          s += '패밀리 세일';
        }
        break;
      case 2:
        if (tmp[i]) {
          s += '플리마켓';
        }
        break;
      case 3:
        if (tmp[i]) {
          s += '바자회';
        }
        break;
      case 4:
        if (tmp[i]) {
          s += '제품 런칭 이벤트';
        }
        break;
      case 5:
        if (tmp[i]) {
          s += '패션쇼';
        }
        break;
      case 6:
        
        if (tmp[i]) {
          s += '기업/단체 행사';
        }
        break;
      case 7:
        if (tmp[i]) {
          s += '전시회';
        }
        break;
      case 8:
        if (tmp[i]) {
          s += '영화/사진 촬영';
        }
        break;
    }
  }

  console.log('s: ', s);
  return s;
}
