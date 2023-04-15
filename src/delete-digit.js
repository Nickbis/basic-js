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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const strN = n.toString();
  const d = strN
    .split('')
    .reduce((acc, cur) =>
      +strN.replace(acc, '') > +strN.replace(cur, '') ? acc : cur
    );
  return +strN.replace(d, '');
}

module.exports = {
  deleteDigit
};
