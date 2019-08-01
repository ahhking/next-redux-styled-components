export function getDayName(n) {
  var nm = '';
  switch (n) {
    case 0:
      nm = '일';
      break;
    case 1:
      nm = '월';
      break;
    case 2:
      nm = '화';
      break;
    case 3:
      nm = '수';
      break;
    case 4:
      nm = '목';
      break;
    case 5:
      nm = '금';
      break;
    case 6:
      nm = '토';
      break;
    default:
      break;
  }
  return nm;
}
