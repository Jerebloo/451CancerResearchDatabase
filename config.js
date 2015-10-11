var local = require('./config.local');

module.exports = {};

for ( var key in local ){
  module.exports[ key ] = local[ key ];
}