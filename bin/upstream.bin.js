#!/usr/bin/env node
//get the paramaters, slicing off the first two wich end up being node and the file
var Promise = require('bluebird');
var params  = Array.prototype.slice.call(process.argv, 2);
var path    = require('path');
var fs      = Promise.promisifyAll(require('fs'));

var command = params[0] || 'default';

//get the path of the current directory


({
  init: require('./init-cmd.js'),

  default: function() {
    console.log('no paramaters given');
  }
})[command](params);






