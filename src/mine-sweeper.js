const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  let result = [];

    matrix.forEach((arr, index) => {
      if (index === 0) {
        let subsres = Array(3).fill(0);
        arr.forEach((item, i) => {
          if (i === 0) {
            if (arr[i + 1]) {
              subsres[0] += 1;
            }
            if (matrix[1][i]) {
              subsres[0] += 1;
            }
            if (matrix[1][i + 1]) {
              subsres[0] += 1;
            }
          }

          if (i === 1) {
            if (arr[i - 1]) {
              subsres[1] += 1;
            }
            if (arr[i + 1]) {
              subsres[1] += 1;
            }
            if (matrix[1][i]) {
              subsres[1] += 1;
            }
            if (matrix[1][i - 1]) {
              subsres[1] += 1;
            }
            if (matrix[i][i + 1]) {
              subsres[1] += 1;
            }
          }

          if (i === 2) {
            if (arr[i - 1]) {
              subsres[2] += 1;
            }
            if (matrix[1][i]) {
              subsres[2] += 1;
            }
            if (matrix[1][i - 1]) {
              subsres[2] += 1;
            }
          }
        });
        result.push(subsres);
      } else if (index === 1) {
        let subsres = Array(3).fill(0);
        arr.forEach((item, i) => {
          if (i === 0) {
            if (arr[i + 1]) {
              subsres[0] += 1;
            }
            if (matrix[0][i]) {
              subsres[0] += 1;
            }
            if (matrix[0][i + 1]) {
              subsres[0] += 1;
            }
            if (matrix[2]) {
              if (matrix[2][i + 1]) {
                subsres[0] += 1;
              }
              if (matrix[2][i]) {
                subsres[0] += 1;
              }
            }
          }

          if (i === 1) {
            if (arr[i - 1]) {
              subsres[1] += 1;
            }
            if (arr[i + 1]) {
              subsres[1] += 1;
            }
            if (matrix[0][i]) {
              subsres[1] += 1;
            }
            if (matrix[0][i - 1]) {
              subsres[1] += 1;
            }
            if (matrix[0][i + 1]) {
              subsres[1] += 1;
            }
            if (matrix[2]) {
              if (matrix[2][i]) {
                subsres[1] += 1;
              }
              if (matrix[2][i - 1]) {
                subsres[1] += 1;
              }
              if (matrix[2][i + 1]) {
                subsres[1] += 1;
              }
            }
          }

          if (i === 2) {
            if (arr[i - 1]) {
              subsres[2] += 1;
            }
            if (matrix[0][i + 1]) {
              subsres[2] += 1;
            }
            if (matrix[2]) {
              if (matrix[2][i]) {
                subsres[2] += 1;
              }
              if (matrix[2][i - 1]) {
                subsres[2] += 1;
              }
            }
          }
        });
        result.push(subsres);
      } else if (index === 2) {
        let subsres = Array(3).fill(0);
        arr.forEach((item, i) => {
          if (i === 0) {
            if (arr[i + 1]) {
              subsres[0] += 1;
            }
            if (matrix[1][i]) {
              subsres[0] += 1;
            }
            if (matrix[1][i + 1]) {
              subsres[0] += 1;
            }
          }

          if (i === 1) {
            if (arr[i - 1]) {
              subsres[1] += 1;
            }
            if (arr[i + 1]) {
              subsres[1] += 1;
            }
            if (matrix[1][i]) {
              subsres[1] += 1;
            }
            if (matrix[1][i - 1]) {
              subsres[1] += 1;
            }
            if (matrix[1][i + 1]) {
              subsres[1] += 1;
            }
          }

          if (i === 2) {
            if (arr[i - 1]) {
              subsres[2] += 1;
            }
            if (matrix[1][i]) {
              subsres[2] += 1;
            }
            if (matrix[1][i - 1]) {
              subsres[2] += 1;
            }
          }
        });

        result.push(subsres);
      }
    });
  
  return result;
}


module.exports = {
  minesweeper
};
