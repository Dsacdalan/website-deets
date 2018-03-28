const moment = require('moment');
const tz = require('moment-timezone');

/**
 * 
 * @param {Date} date 
 * @param {String} timeZone 
 */
exports.getTimezone = (date, timeZone) => {
  var formattedDate = moment(date);
  if (timeZone) {
    return formattedDate.tz(timeZone).format('ha z');    
  } else {
    return 'Unknown';
  }
};