const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit-32)*5/9;
  let roundedCelsius = Math.round(celsius*10)/10;
  return roundedCelsius;
  //return celsius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius*9/5) + 32;
  let roundedFahrenheit= Math.round(fahrenheit*10)/10;
  return roundedFahrenheit;
  //return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
