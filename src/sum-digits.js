const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(digit) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let summa = 0;
  let result = 0;

  let digits = digit.toString();
  for (let i = 0; i < digits.length; i++) {
      summa += parseInt(digits.charAt(i), 10);
    }
  
  if (summa < 10) {
      return summa;
    } else {
      let sum = summa.toString();
      for (let i = 0; i < sum.length; i++) {
          result += parseInt(sum.charAt(i), 10);
        }  
      return result;;
      }
}
  

module.exports = {
  getSumOfDigits
};
