'use strict';

const greet = require('../greet.js');
const assert = require('assert');

describe('testing greet module', function() {
  it('should say hello world', function() {
    assert.equal(greet('world'), 'hello world');
  });
  it('should throw missing name error', function() {
    assert.throws(function (){
      greet();
    }, 'error thrown');
  });
});
