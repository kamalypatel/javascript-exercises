const add = function(firstNumber, ...numbers) {
  let sum = parseInt(firstNumber);
  
  for (let num of numbers) {
    sum += parseInt(num);
  }
  return sum;
};

const subtract = function(firstNumber, ...numbers) {
	let total = firstNumber;
  
  for (let num of numbers) {
    total -= num
  }

  return total
};

const sum = function(arr) {
	return arr.reduce((total, currentNumber) => total + currentNumber, 0)
};

const multiply = function(arr) {
  return arr.reduce((total, currentNumber) => total * currentNumber, 1)
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
