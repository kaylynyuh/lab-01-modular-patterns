'use strict';

module.exports = function(name) {
  // if(arguments.length === 0)
  if (!name) throw new Error('expected name');
  console.log(`hello ${name}`);
};

// module.exports = exports {};
//
// exports.sayHello = function(name){
//   if (arguments.length === 0) throw new Error('expected a name');
//   return 'hello ' + name;
// };
//
// exports.sayGoodbye = function(){
//   console.log('Bye');
// };
