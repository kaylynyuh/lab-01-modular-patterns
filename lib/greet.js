'use strict';

// module.exports = function(name) {
//   if (!name) throw new Error('expected name');
//   console.log(`hello ${name}`);
// };

module.exports = exports = {};

exports.sayHello = function(name){
  if(arguments.lenth === 0) throw new Error('expected name');
  console.log(`Hello ${name}`);
};

exports.sayGoodbye = function(name){
  if(arguments.lenth === 0) throw new Error('expected name');
  console.log(`Goodbye ${name}`);
};

exports.dynamicGreet = function(){
  let someName = process.argv[2];
  if(arguments.lenth === 0) throw new Error('expected name');
  console.log(`Yo ${someName}`);
};
