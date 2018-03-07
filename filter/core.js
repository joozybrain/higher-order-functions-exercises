function onlyEven(array) {
  const evenArray = array.filter(element => element % 2 === 0);
  return evenArray;
}

function onlyOneWord(array) {
  const oneWordArray = array.filter(element => !element.includes(" "));
  return oneWordArray;
}

function positiveRowsOnly(array) {
  const positiveArray = array.filter(
    element => !element.some(negativeNum => negativeNum < 0)
  );
  return positiveArray; //(hint: use Array.prototype.some())
}

function truthyValuesOnly(array) {
  const truthyArray = array.filter(element => element);
  return truthyArray;
}

module.exports = {
  onlyEven: onlyEven,
  onlyOneWord: onlyOneWord,
  positiveRowsOnly: positiveRowsOnly,
  truthyValuesOnly: truthyValuesOnly
};
