const convertToCelsius = function(inputTemp) {
  return (inputTemp - 32) * 5/9
};

const convertToFahrenheit = function(inputTemp) {
  return inputTemp * 5 / 9 + 32
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
