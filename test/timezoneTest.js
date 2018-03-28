const assert = require('assert');
const timezoneService = require('../src/timezoneService');

describe('Timezone Service', function() {
  it('should format time correctly', function() {
    var time = '2018-03-28T19:29:46.387Z';
    var timeZone = 'America/New_York';
    var formatted = timezoneService.getTimezone(time, timeZone);
    assert.equal('3pm EDT', formatted);
  });
});