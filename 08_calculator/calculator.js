const add = function(n1,n2) {
	return n1+n2;
};

const subtract = function(n1,n2) {
	return n1-n2;
};

const sum = function(numbers) {
	return numbers.reduce((accumulator, currentNumber) => accumulator + currentNumber,
  0);
};

const multiply = function(numbers) {
  return  numbers.reduce((produce,currentNumber)=> produce * currentNumber,1);
};

const power = function(n1,n2) {
	return n1 ** n2;
};

const factorial = function(numbers) {
	if (numbers < 0)
    return -1;

  else if (numbers == 0 )
    return 1;

  else 
  return numbers * factorial(numbers -1);
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
