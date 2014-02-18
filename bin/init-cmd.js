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
    .then(createMigrationDir)
    .then(createFile(['..', 'boilers', 'config.json'], 'db/config.json'));
};

function createFolder(folderPath) {
  return function(params) {
    return fs.existsAsync(folderPath).then(function(exists) {
      if (exists) { return params; }
      else {
        return fs.mkdirAsync(folderPath).then(function() {
          return params;
        });
      }
    });
  };
}

function createFile(boilerSource, folderPath) {
  return function(params) {
    console.log('its getting here');
    return fs.existsAsync(folderPath).then(function(exists) {
      console.log('exists?', exists);
      if (exists) { return params; }
      else {
        return fs.readFileAsync(path.join.apply(path, [__dirname].concat(boilerSource)), 'utf8')
          .then(function(data) {
            console.log('data', data);
            return fs.writeFileAsync(folderPath, data);
          }).then(function() { return params; });
      }
    });
  };
}
