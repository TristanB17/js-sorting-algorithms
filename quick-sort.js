function swap(array, intialPosition, desiredPosition) {
  var temp = array[intialPosition];
  array[intialPosition] = array[desiredPosition];
  array[desiredPosition] = temp;
};



module.exports = {bubbleSortArray, swap};
