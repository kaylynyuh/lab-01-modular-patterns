'use strict';

module.exports = function(name) {
  if (!name) throw new Error('expected name');
  return `hello ${name}`;
};
