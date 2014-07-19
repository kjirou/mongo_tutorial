//
// Set environments
//   Must to sync generator/conf.js
//
global.env = {
  ROOT: null
};

global._ = require('underscore');
global.moment = require('moment');

require('../generator/utils');


//
// Run tests
//
global.expect = require('expect.js');
global.sinon = require('sinon');

require('./tests.js');
