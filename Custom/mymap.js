// polyfill for map
// map creates a new array by applying a function to each element in the original array
Array.prototype.myMap = function(callback) {
  // initialize an empty array to store the result
  var result = [];
  // loop through the array elements
  for (var i = 0; i < this.length; i++) {
    // call the callback function with the current element, index, and array
    // and push the returned value to the result array
    result.push(callback(this[i], i, this));
  }
  // return the result array
  return result;
};
