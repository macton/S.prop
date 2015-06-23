var S = require('s');

var prop = {
  get  : S.curry( function( key, obj ) { return obj?obj[key]:null; } ),
  set  : S.curry( function( key, value, obj ) { obj = obj?obj:{}; obj[key] = value; return obj; } ),
};

exports = module.exports = prop;
