'use strict';

const greet = require('../greet.js');
const assert = require('assert');

describe('testing greet module', function() {
  describe('#greet()', function() {
    it('should say hello plus kale', function() {
      assert.ok(true === false, 'all good so far');
      let result = greet.greet('kale');
      assert.ok(result === 'hello kale', 'was not hello kale');
    });
    it('should throw missing name error', function() {
      assert.throws(function (){
        greet.greet();
      }, 'error thrown');
    });
  });
});
