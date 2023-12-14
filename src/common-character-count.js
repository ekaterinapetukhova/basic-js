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
  const obj1 = {},
    obj2 = {};

  let arr1 = [...s1];
  let arr2 = [...s2];

  let result = 0;

  arr1.forEach(item => !obj1.hasOwnProperty(item) ? obj1[item] = 1 : obj1[item] += 1);
  arr2.forEach(item => !obj2.hasOwnProperty(item) ? obj2[item] = 1 : obj2[item] += 1);

  for (let key1 in obj1) {
    for (let key2 in obj2) {
      if (key1 === key2) {
        result += Math.min(obj1[key1], obj2[key2]);
      }
    }
  }

  return result;
}

module.exports = {
  getCommonCharacterCount
};
