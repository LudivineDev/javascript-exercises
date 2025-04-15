const convertToCelsius = function(tempF) {
  const fToC = ((tempF - 32) * 5/9);
return Math.round(fToC*10)/10;

};


const convertToFahrenheit = function(tempC) {
  const cToF = (tempC * 9/5 +32)
  return Math.round(cToF*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
