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
  const arr = [];
  let substr = '';
  let result = '';

  for (let i = 0; i < str.length; i += 1) {
      substr += str[i];

      if (str[i] !== str[i + 1]) {
        arr.push(substr);
        substr = "";
      }
  }
  
  arr.forEach(item => item.length === 1 ? result += `${item}` : result += `${item.length}${item[0]}`);

  return result;
}

module.exports = {
  encodeLine
};
