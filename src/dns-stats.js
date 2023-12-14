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
function getDNSStats(domains) {
  const stats = {};

  domains.forEach((domain) => {
    let reverseDomain = domain.split('.').reverse().map(item => '.' + item);
    let substr = '';
    let count = 0;

    for (let i = domain.length - 1; i >= 0; i -= 1) {
      if (domain[i] === '.' || i === 0) {
        substr += reverseDomain[count];
        count += 1;

        if (!stats.hasOwnProperty(substr)) {
          stats[substr] = 1;
        } else {
          stats[substr] += 1;
        }
      }
    }
  });

  return stats;
}

module.exports = {
  getDNSStats
};
