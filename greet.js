'use strict';

module.exports = function greet(name) {
  // console.log('hello ' + name );
  if (!name) throw new Error('expected name');
  return 'hello ' + name;
};
