// polyfill for filter
// filter creates a new array with elements that pass a test provided by a function
Array.prototype.myFilter = function(callback) {
  // initialize an empty array to store the result
  var result = [];
  // loop through the array elements
  for (var i = 0; i < this.length; i++) {
    // call the callback function with the current element, index, and array
    // and if the returned value is truthy, push the current element to the result array
    if (callback(this[i], i, this)) {
      result.push(this[i]);
    }
  }
  // return the result array
  return result;
};
