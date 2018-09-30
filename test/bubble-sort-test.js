assert = require('chai').assert;
bubbleSort = require('../bubble-sort').bubbleSortArray;

describe('bubble sort functionality', function() {
  context('arranges things in correct order', function() {
    it('functions correctly', function() {
      array = [5, 4, 3, 2, 1]
      assert.deepEqual(bubbleSort(array), [1, 2, 3, 4, 5])
    });
  });
});
