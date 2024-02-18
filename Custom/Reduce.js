// polyfill for reduce
// reduce reduces an array to a single value by applying a function cumulatively to the elements
Array.prototype.myReduce = function(callback, initialValue) {
  // initialize the accumulator to the initial value or the first element
  var accumulator = initialValue || this[0];
  // loop through the array elements starting from the second element or the first element if no initial value is provided
  for (var i = initialValue ? 0 : 1; i < this.length; i++) {
    // call the callback function with the accumulator, current element, index, and array
    // and assign the returned value to the accumulator
    accumulator = callback(accumulator, this[i], i, this);
  }
  // return the accumulator
  return accumulator;
};
