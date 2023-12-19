const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  if (!arr.some(item => `${item}`.startsWith('--d'))) {
    return arr;
  }

  let result = Array.from( {length: arr.length }, (_, i) => arr[i]);

  for (let i = 0; i < arr.length; i += 1) {
    let current = arr[i];
    console.log(current)
    
   if (current === "--discard-next") {
     if (i < arr.length - 1) {
       delete result[i + 1];
     }
     delete result[i];

     if (arr[i + 2] === "--discard-prev" || arr[i + 2] === "--double-prev") {
       delete result[i + 2];
     }
   } else if (current === "--double-next") {
      i < arr.length - 1 ? (result[i] = arr[i + 1]) : delete result[i];
   } else if (current === "--discard-prev") {
    if (i > 0) {
      delete result[i - 1];
    }
    delete result[i];
   } else if (current === "--double-prev" && arr[i - 2] !== "--discard-next") {
    i > 0 ? (result[i] = arr[i - 1]) : delete result[i];
   }
  }

  return result.filter(item => item);
}

module.exports = {
  transform
};
