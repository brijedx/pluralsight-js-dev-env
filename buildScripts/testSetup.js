//This file isn't transpiled, so must use CommonJS and ES5

//register babel to transpile before our tests begin
require('babel-register')();

//disable webpack features that Mocha does not understand - treat css file as an empty function
require.extensions['.css'] =  function(){};