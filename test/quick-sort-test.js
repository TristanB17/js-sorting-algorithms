assert = require('chai').assert;
quick = require('../quicksort').quickSort;

describe('quickSort functionality', function() {
  context('swap function', function() {
    it('it can swap two values in an array', function() {
      assert.deepEqual(sorter.swap([1,2,3],0,2), [3,2,1])
    })
  })
})
