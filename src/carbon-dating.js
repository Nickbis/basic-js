const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(Str_activiti) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (typeof(Str_activiti)=='string') {
    let result = Math.ceil( Math.log(15/Number(Str_activiti))/(0.693/5730));
    if (Number.isFinite(result) == false) {
      return false; 
    } else if (result >0) {
            return result;
    } else {
      return false
    } 
    } else {
    return false;
  }


} 
module.exports = {
  dateSample
};
