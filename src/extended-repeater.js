const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let result = [];

  if (typeof str !== 'string') {
    str = `${str}`;
  }
    
  if (!options.repeatTimes && !options.additionRepeatTimes) {
    return str + options.addition;
  }

  for (let i = 0; i < options.repeatTimes; i += 1) {
    let arr = [];

    if (!options.additionRepeatTimes) {
      arr.push(`${str}${options.addition || ''}`);
      result.push(arr.join(options.additionSeparator || options.separator));
    } else {
      for (let j = 0; j < options.additionRepeatTimes; j += 1) {
        arr.push(options.addition || `${options.addition}`);
      } 

      result.push(str + arr.join(options.additionSeparator || "|"));
    }
  }

  return result.join(options.separator || '+')
}

module.exports = {
  repeater
};
