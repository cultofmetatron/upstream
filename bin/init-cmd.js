/*
 * basic script that creates the following director
 * ./db
 * ./db/migrations
 * ./db/config
*/
var Promise = require('bluebird');
var path    = require('path');
var fs      = Promise.promisifyAll(require('fs'));


module.exports = function(params) {
  console.log('initializing migrations');
  //create the db folder if it exists
  return createDbDirectory(params);

};


function createMigrationFolder(params) {
  return fs.existsAsync(path.join('.', 'db', 'migrations')).then(function(exists) {
    if (exists) { return null; } 
    else {
      return fs.mkdir('db/migrations');
    }
  });
}

function createDbDirectory(params) {
 return fs.existsAsync('db').then(function(exists) {
    if (exists) { return null; } 
    else {
      return fs.mkdir('db');
    }
 }).then(createMigrationFolder);
}


