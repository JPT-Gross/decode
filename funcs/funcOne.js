export function funcOne(base, exp, double) {
  let x = base ^ exp;
  x += base * double;

  let y = double ^ exp;
  y += double * base;

  return x + y;
}
