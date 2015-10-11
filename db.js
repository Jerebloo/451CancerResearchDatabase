var mysql = require('mysql');
var config = require('./config');
var pool = mysql.createPool( config.db );

module.exports = {};

module.exports.query = function( query, values, callback ){
  pool.getConnection( function( error, connection ){
    if ( error ){
      return callback( error );
    }

    connection.query( query, values, function( error, rows, metaData ){
      connection.release();

      callback( error, rows );
    });
  });
};

module.exports.getCity = function( name, district, callback ){
  if ( typeof name !== 'string' ){
    throw new Error('Invalid first parameter `name`');
  }

  if ( typeof district !== 'string' ){
    throw new Error('Invalid second parameter `district`');
  }

  if ( typeof callback !== 'function' ){
    throw new Error('Invalid third parameter `callback`');
  }

  var queryStr = 'select * from city where name = ? and district = ?';
  var queryValues = [ name, district ];

  module.exports.query( queryStr, queryValues, function( error, rows ){
    if ( error ){
      return callback( error );
    }

    callback( null, rows[0] );
  });
};