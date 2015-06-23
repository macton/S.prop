var S = require('s');

S.prop = require( '../s.prop' );

console.log( S.prop.get( 'foo', { foo: 'Foo' } ) );
console.log( S.prop.set( 'foo', 'Bar', { foo: 'Foo' } ) );
console.log( S.prop.set( 'foo', 'Bar', null ) );

