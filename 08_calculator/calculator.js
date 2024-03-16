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

const power = function(originalNumber, powerTo) {
  let total = originalNumber
  for (let i = 2; i <= powerTo; i++){
    total = total * originalNumber
  }
  return total
};

const factorial = function(number) {
	if (number == 1 || number == 0) {
    return 1;
  } else if (number < 1) {
    return -1;
  } else {
    let total = 1;
    for (let i = 1; i <= number; i++) {
      total = total * i;
    }
    return total
  }
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
