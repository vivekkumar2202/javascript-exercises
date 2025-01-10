const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(arr) {
  total = 0;
	for (num of arr) {
    total += num;
  }
  return total;
};

const multiply = function(arr) {
  product = 1;
  for (num of arr) {
    product *= num;
  }
  return product;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(num) {
	product = 1;
  for (let i = 1; i <= num; i++) {
    product *= i;
  }
  return product;
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
