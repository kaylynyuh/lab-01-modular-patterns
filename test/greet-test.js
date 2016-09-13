'use strict';

const program = require('../program.js');
const assert = require('assert');

console.log('program', program);

describe('testing greet module', function() {
  describe('#greet()', function() {
    it('should say hello world', function() {
      assert.equal(program.greet(), 'hello world');
    });
    it('should throw missing name error', function() {
      assert.throws(function (){
        program.greet();
      }, 'error thrown');
    });
  });
});
