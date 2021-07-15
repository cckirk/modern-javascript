
console.log('hellooooooo');

var math = require('mathjs');

console.log('create and manipulate complex numbers');
const a = math.complex(2, 3);
console.log(a); // 2 + 3i


console.log('this is so fun!')

function f(x, y = 12) {
  // y is 12 if not passed (or passed as undefined)
  return x + y;
}
console.log(f(3) === 15);

