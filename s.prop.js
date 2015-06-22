var S = require('s');

var prop = {
  get  : function( key, obj ) { return obj?obj[key]:null; },
  set  : function( key, value, obj ) { obj[key] = value; return obj; },
};

exports = module.exports = prop;
