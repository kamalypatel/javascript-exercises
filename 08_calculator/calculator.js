const add = function(total, ...numbers) {
  let sum = parseInt(total);
  for (num in numbers) {
    sum = parseInt(sum) + parseInt(num);
  }
  return sum;
};

const subtract = function() {
	
};

const sum = function() {
	
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
