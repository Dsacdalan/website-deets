const timezoneService = require('../src/timezoneService');

exports.format = (data) => {
  var formattedData = data;
  
  var date = new Date();
  formattedData.time_zone = timezoneService.getTimezone(date, data.time_zone);
  formattedData.city = (data.city ? data.city : 'Unknown');
  formattedData.region_name = (data.region_name ? data.region_name : 'Unknown');
  formattedData.zip_code = (data.zip_code ? data.zip_code : 'Unknown');
  formattedData.country_name = (data.country_name ? data.country_name : 'Unknown');

  return formattedData;
};