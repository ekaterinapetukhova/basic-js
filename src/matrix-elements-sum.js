const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let result = 0;
  matrix.map((arr, index) => {
    if (index === 0) {
      result += arr.reduce((sum, item) => sum + item);
    } else {
      arr.map((item, i) => {
        if (!(matrix[index - 1].at(i) == 0)) {
          result += item;
        }
      })
    }
  })

  return result;
}

module.exports = {
  getMatrixElementsSum
};
