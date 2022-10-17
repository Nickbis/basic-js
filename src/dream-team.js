const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  if (!(members instanceof Array)) return false;
  const resultUnsorted = [];
  const length = members.length;
  for (let i = 0; i < length; i++) {
    if (typeof members[i] === 'string') {
      const trimmedMember = members[i].trim();
      resultUnsorted.push(trimmedMember[0].toUpperCase());
    }
  }
  return resultUnsorted.sort().join('');
}

module.exports = {
  createDreamTeam
};
