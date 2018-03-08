function multiplyBy10(array) {
  array = array.map(element => element * 10);
  return array;
}

function onlyVowels(array) {
  return (array = array.map(element => splitWord(element)));
}

function splitWord(word) {
  var wordArray = word.split("");
  var newWord = wordArray.filter(element => "aeiou".includes(element));
  return newWord.join("");
}

function doubleMatrix(array) {
  return (array = array.map(element => element.map(ele => ele * 2)));
}

function onlyNames(array) {
  return (array = array.map(element => element.name));
}

module.exports = {
  multiplyBy10: multiplyBy10,
  onlyVowels: onlyVowels,
  doubleMatrix: doubleMatrix,
  onlyNames: onlyNames
};
