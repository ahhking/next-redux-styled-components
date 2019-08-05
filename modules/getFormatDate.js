import { getDayName } from './getDayName';
export function getFormatDate(date, format) {
  // date:  2019-04-17T13:36:24.000+0000
  var s = null;

  var d = null;;
  var curr_year = null;
  var curr_month = null;
  var curr_date = null;

  if (new Date(date).toString() == 'Invalid Date') {
    date = date.split('.')[0];
    date = date.replace(/T/gi, '-');
    date = date.replace(/:/gi, '-')
    date = date.split('-');

    date = date.map((item, index) => {
      return Number(item);
    });

    d = new Date(date[0], date[1], date[2], date[3], date[4], date[5]);
  } else {
    d = new Date(date);
  }

  console.log('d:', d);

  curr_year = d.getFullYear();
  curr_month = (d.getMonth() + 1) > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);
  curr_date = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();

  s = curr_year + '-' + curr_month + '-' + curr_date;

  if (format) {
    switch (format) {
      case 0:

        break;
      case 1:
        curr_year = d.getFullYear();
        curr_month = (d.getMonth() + 1) > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);
        curr_date = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();

        s = curr_year + '.' + curr_month + '.' + curr_date + ' (' + getDayName(d.getDay()) + ') ' + d.toTimeString().split(' ')[0];
        break;
      case 2:
        curr_year = d.getFullYear();
        curr_month = (d.getMonth() + 1) > 9 ? d.getMonth() + 1 : '0' + (d.getMonth() + 1);
        curr_date = d.getDate() > 9 ? d.getDate() : '0' + d.getDate();

        s = curr_year + '.' + curr_month + '.' + curr_date + ' ' + d.toTimeString().split(' ')[0];
        break;
      default:
        break;
    }
  }

  return s;
}
