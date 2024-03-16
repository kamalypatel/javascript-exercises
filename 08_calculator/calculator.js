const add = function(firstNumber, ...numbers) {
  let sum = parseInt(firstNumber);
  console.log(sum)
  for (let num of numbers) {
    sum += parseInt(num);
    console.log(num);
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
