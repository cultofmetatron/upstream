/*
 * basic script that creates the following director
 * ./db
 * ./db/migrations
 * ./db/config
*/
var Promise = require('bluebird');
var path    = require('path');
var fs      = Promise.promisifyAll(require('fs'));


var createMigrationDir = createFolder('db/migrations');
var createDbDir = createFolder('db');

module.exports = function(params) {
  console.log('initializing migrations');
  //create the db folder if it exists
  return createDbDir(params)
    .then(createMigrationDir);
};

function createFolder(folderPath) {
  return function(params) {
    return fs.existsAsync(folderPath).then(function(exists) {
      if (exists) { return params; }
      else {
        return fs.mkdir(folderPath).then(function() {
          return params;
        });
      }
    });
  };
}

