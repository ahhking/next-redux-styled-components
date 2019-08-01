export function numberWithCommas(x) {
  x = String(x);
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
