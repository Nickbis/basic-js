const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains ) {
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const rez = {};
  for (const domain of domains) {
    const subdomains = domain.split('.').reverse();
    for (const subdomain of subdomains) {
      const currentDomain = subdomains
        .slice(0, subdomains.indexOf(subdomain) + 1)
        .join('.');
      rez[`.${currentDomain}`] = domains.filter((a) =>
        a.includes(subdomain)
      ).length;
    }
  }
  return rez;
}

module.exports = {
  getDNSStats
};
