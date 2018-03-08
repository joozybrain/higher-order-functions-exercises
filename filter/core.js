function onlyEven(array) {
  const evenArray = array.filter(element => element % 2 === 0);
  return evenArray;
  // You can consider returning the output directly, unless you think
  // the variable name `evenArray` can help to make your code more readable.
  // However, for this short function, the variable name would already do this job.

  // return array.filter(element => element % 2 === 0);
}

function onlyOneWord(array) {
  const oneWordArray = array.filter(element => !element.includes(" "));
  return oneWordArray;
}

function positiveRowsOnly(array) {
  const positiveArray = array.filter(
    element => !element.some(negativeNum => negativeNum < 0)
    // 1. negativeNum could be better named as `number` because sometimes there are positive values!
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
