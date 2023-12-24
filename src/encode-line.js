const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  return str.split('').reduce((result, char, index) => {
    (char === str[index + 1])
    ? result.count++
   : (
      result.result += (result.count == 1) ? char : result.count + char,
      result.count = 1
      )
    return result;
  }, { result: '', count: 1 }).result;
}

module.exports = {
  encodeLine
};
