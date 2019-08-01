export function getBmType(s) {
  var nm = ''

  switch (s) {
    case 'COMMISSION':
      nm = '판매수수료';
      break;
    case 'FIXED_COSTS':
      nm = '고정비';
      break;
    case 'CONSULTATION':
      nm = '사용료 협의';
      break;
    default:
      nm = 'unknown';
      break;
  }

  return nm;
}
