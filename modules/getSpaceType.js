export function getSpaceType(s) {
  var nm = ''

  switch (s) {
    case 'OFFICE':
      nm = '오피스';
      break;
    case 'ARCADE':
      nm = '상업시설';
      break;
    case 'SCHOOL':
      nm = '학교';
      break;
    case 'ETC':
      nm = '기타';
      break;
    default:
      nm = 'unknown';
      break;
  }

  return nm;
}
