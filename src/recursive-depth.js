const { NotImplementedError } = require('../extensions/index.js');
const hasNestedArray =(arr) => arr.some(item => Array.isArray(item));
/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    let depth = 1;
    if (hasNestedArray(arr)){
    const newArr = arr.reduce((acc, cur) => acc.concat(cur),[]);
    return depth + this.calculateDepth(newArr);
  }
  return depth;
}
}

module.exports = {
  DepthCalculator
};
