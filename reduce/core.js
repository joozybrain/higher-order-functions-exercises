function sum(array) {
  const totalSum = array.reduce((accumulator, currentValue) => accumulator + currentValue,0)
  return totalSum;
}

function productAll(array) {
  const multiply = (acc, curr) => acc * curr.reduce((accumulator, currentValue) => accumulator * currentValue,1);
  const multiplySum = array.reduce(multiply,1)
  return multiplySum;
}

function luckyNumbers(array) {
  const luckySentence = array.reduce((acc, curr) => acc + ", " + curr);
  const fullSentence = "Your lucky numbers are: " + luckySentence + ".";
  return fullSentence;
}

module.exports = {
  sum: sum,
  productAll: productAll,
  luckyNumbers: luckyNumbers
};
