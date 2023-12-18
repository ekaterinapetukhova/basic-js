const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (arguments.length === 0) {
    return 'Unable to determine the time of year!'
  };
  
  try { 
    let time = date.getMonth();
    date.setTime();

  if (time === 11 || time === 0 || time === 1) {
    return 'winter';
  }

  if (time === 2 || time === 3 || time === 4) {
    return 'spring';
  }

  if (time === 5 || time === 6 || time === 7) {
    return 'summer';
  }

  if (time === 8 || time === 9 || time === 10) {
    return 'autumn';
  }
} catch (e) {
  throw new Error("Invalid date!");
}
}

module.exports = {
  getSeason
};
