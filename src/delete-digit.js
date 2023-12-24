const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit( n ) {
  let maxNumber = Number.NEGATIVE_INFINITY;
  const digitArray = String(n).split('');
  for (let index = 0; index < digitArray.length; index++) {
    const testNumberArray = [...digitArray];
    testNumberArray.splice(index,1);
    const testNumber = Number(testNumberArray.join(''));
    maxNumber < testNumber && (maxNumber = testNumber)
  }
  return maxNumber
}

module.exports = {
  deleteDigit
};
