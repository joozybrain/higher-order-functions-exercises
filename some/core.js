// Check to see if any of the elements in the
// array are numbers greater than 10.
function anyGreaterThan10(input) {
  return (input = input.some(element => element > 10));
  // brackets and array assignment are not required
  // Example:
  // return input.some(element => element > 10);
}

// Check to see if any of the strings in
// the array is longer than 10 characters.
function longWord(input) {
  return (input = input.some(element => element.length > 10));
  // brackets and array assignment are not required
}

// Check to see if any of the elements in
// the matrix are true.
function truePossibilities(input) {
  return (input = input.some(element => element.some(ele => ele)));
  // brackets and array assignment are not required
}

// Check to see if 'Lost' is in
// the phrase (using some).
function lostCarcosa(input) {
  return (input = input.some(element => element.includes("Lost")));
  // brackets and array assignment are not required
}

module.exports = {
  anyGreaterThan10,
  longWord,
  truePossibilities,
  lostCarcosa
};
