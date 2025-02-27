const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let temp = [];
  let count = 0;
  for (const letter of s1) {
    if (!temp.includes(letter)) {
      const s1CharCount = getCharCount(s1, letter);
      const s2CharCount = getCharCount(s2, letter);
      count += Math.min(s1CharCount, s2CharCount);
      temp.push(letter);
    }
  }
  return count;
}

function getCharCount(s_let, letter) {
  return s_let.split('').filter((a) => a === letter).length;

}

module.exports = {
  getCommonCharacterCount
};
