const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
  const initial = 0;
	return arr.reduce((a, b) => a + b, initial,);
};

const multiply = function(arr) {
	return arr.reduce((a, b) => a * b,);
};

const power = function(a,b) {
  return Math.pow(a,b);

};

const factorial = function(n) {
  let factoral = 1;
	for (let i = 1; i <= n; i++){
    factoral *= i;
  }
  return factoral;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
