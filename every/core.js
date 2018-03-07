// Check to see if all elements in an array
// are even numbers.
function allEven(input) {
  return input.every(number => number % 2 === 0);
}

// Check to see if every element in the matrix is
// an array and that every element in the array is
// greater than 0.
function positiveMatrix(input) {
  const pos = input.every(element => element.every(numInArray => numInArray > 0));
  return pos;
}

module.exports = {
  allEven,
  positiveMatrix
};
