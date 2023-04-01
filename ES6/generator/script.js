/*
Create a generator that returns fibonacci series that takes only
one parameter. Make two different implementations as described below:
  a.	the parameter passed determines the number of elements
  displayed from the series.

*/
function* fab(x) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < x; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var x = 5;
var it = fab(x);

for (let i = 0; i <= x; i++) {
  console.log(it.next());
}

for (const number of fab(x)) {
  console.log(number);
}
/////////////////////////////////
/*
  b.	the parameter passed determines the max number of the displayed 
  series should not exceed its value.
*/
console.log("#########################");
function* fab2(x) {
  let a = 0;
  let b = 1;
  for (let i = 0; a <= x; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

var y = 6;
var it = fab2(y);

for (let i = 0; i <= y; i++) {
  console.log(it.next());
}

for (const number of fab2(y)) {
  console.log(number);
}
