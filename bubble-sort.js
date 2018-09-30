function swap(array, intialPosition, desiredPosition) {
  var temp = array[intialPosition];
  array[intialPosition] = array[desiredPosition];
  array[desiredPosition] = temp;
};

function bubbleSortArray(array) {
  var swapped;
  do {
    swapped = false;
    for(var index = 0; index < array.length; index++) {
      if(array[index] && array[index + 1] && array[index] > array[index + 1]) {
        swap(array, index, index + 1);
        swapped = true;
      }
    }
  } while(swapped);
  return array;
};

module.exports = {bubbleSortArray, swap};
