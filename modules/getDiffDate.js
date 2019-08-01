export function getDiffDate(_date1, _date2) {
  let diff = 0;
  if(_date1 && _date2) {
    var date_1 = _date1 instanceof Date ? _date1 : new Date(_date1);
    var date_2 = _date2 instanceof Date ? _date2 : new Date(_date2);

    // millisecond 단위로 변환
    // 1s = 1000 ms, 1min = 60s, 1hr = 60m, 1day = 24hr
    diff = 1 + Math.round((date_2 - date_1)/(1000 * 60 * 60 * 24));
  }
  
  console.log('getDiffDate')
  
  return diff
}
